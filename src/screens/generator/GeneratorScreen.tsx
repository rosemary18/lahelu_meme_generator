// IMPORT CORE MODULES

import React, { useEffect, useRef, useState } from 'react'
import { Alert, PermissionsAndroid, Platform, Share, TouchableOpacity, View } from 'react-native'

// IMPORT THIRD PARTY MODULES

import AsyncStorage from '@react-native-async-storage/async-storage'
import RNFS from 'react-native-fs'
import { Gesture, GestureDetector, GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import ImagePicker, { Image } from 'react-native-image-crop-picker'
import { Snackbar } from 'react-native-paper'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from "react-native-reanimated"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import ViewShot from "react-native-view-shot"

// IMPORT LOCAL MODULES & COMPONENTS

import { Button, Icon, ImageGenerator, ModalBottomSheetAddOptions, ModalGeneratorAppearenceStyle, TextGenerator } from '../../components'
import Styles from '../../styles'
import { colors, IFont, IObjectItem, IPosition } from '../../types'
import { alertOpenPrivacy, generateRandomID } from '../../utils'
import { width } from './constants'
import styles from './styles'
import { ISavedEditMeme } from './type'

// MAIN COMPONENT

/**
 * 
 * @param undefined
 * @returns React.FC
 */
const GeneratorScreen: React.FC = () => {

    // STATES & VARIABLES

    const [items, setItems] = useState<IObjectItem[]>([]);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [activeCanvas, setActiveCanvas] = useState<boolean>(false);
    const [modal, setModal] = useState<number | null>(null);
    const [backgroundColor, setBackgroundColor] = useState<string>(colors.white);

    const viewShotRef = useRef<ViewShot | null>(null);

    const scale = useSharedValue(1);
    const savedScale = useSharedValue(1);
    const translateX = useSharedValue(0);
    const translateY = useSharedValue(0);
    const savedTranslateX = useSharedValue(0);
    const savedTranslateY = useSharedValue(0);

    const itemsRef = useRef<IObjectItem[]>(items);
    const insets = useSafeAreaInsets();

    /* Apply shared values animated style */
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
                { scale: scale.value },
            ],
        };
    });

    // HANDLERS

    /**
     * @description Clear active item
     * @returns void
     */
    const handlerFullScreen = () => {

        // Set default values
        scale.value = 1.1;
        savedScale.value = 1;
        translateX.value = 0;
        translateY.value = 0;
        savedTranslateX.value = 0;
        savedTranslateY.value = 0;
    }

    /**
     * 
     * @param id string
     * @description Set active item
     * @returns void
     */
    const handlerActiveItem = (id: string) => {

        setActiveItem(activeItem == id ? null : id); // Set active item
        setActiveCanvas(false); // Clear active canvas
    }

    /**
     * 
     * @description Clear active item
     * @returns void
     */
    const handlerClearActiveItem = () => {
        
        setActiveItem(null); // Clear active item
        setActiveCanvas(false); // Clear active canvas
    };

    /**
     * 
     * @param data IObjectItem
     * @description Update item
     * @returns void
     */
    const handlerOnUpdate = (data: IObjectItem) => {
        setItems(old => {
            // Find index
            const index = old.findIndex((item) => item.id === data.id);
            const newItems = [...items];
            // Update data by index
            newItems[index] = data;
            return newItems;
        });
    };

    /**
     * 
     * @param data IObjectItem
     * @description Duplicate item
     * @returns void
     */
    const handlerOnDuplicate = (data: IObjectItem) => {

        // New data
        const newData = {
            ...data,
            id: `I${generateRandomID()}`,
            position: {
                x: data.position.x + 2, // Add 2 pixels on x axis
                y: data.position.y + 10 // Add 10 pixels on y axis
            }
        };
        
        // Push new data
        setItems(old => {
            const newItems = [...old];
            newItems.push(newData);
            return newItems;
        });

        // Set active item with the new data
        setActiveItem(newData.id);
    };

    /**
     * 
     * @param id number
     * @description Delete item
     * @returns void
     */
    const handlerOnDelete = (id: number) => {

        // Delete item
        setItems(old => {
            const newItems: IObjectItem[] = [];
            for (let i = 0; i < old.length; i++) if (i !== id) newItems.push(old[i]);
            return newItems;
        });
        // Clear active item
        handlerClearActiveItem();
    };

    /**
     * 
     * @description Close modal
     * @returns void
     */
    const handlerCloseModal = () => setModal(null);
    
    /**
     * 
     * @description Show add options
     * @returns void
     */
    const handlerShowAddOptions = () => setModal(0);

    /**
     * 
     * @description Show appearence style
     * @returns void
     */
    const handlerShowAppearenceStyle = () => setModal(1);

    /**
     * 
     * @description Add text
     * @returns void
     */
    const handlerAddText = () => {

        handlerCloseModal();

        setTimeout(() => {

            // Initial position
            const initialPosition: IPosition = {
                x: (width - 100) / 2, 
                y: (width - 100) / 2
            }

            // New font
            const newFont: IFont = {
                family: '',
                italic: false,
                bold: false,
                shadow: 0,
                shadowColor: ''
            }

            // Add text
            setItems(old => {

                const newItems = [...old];
                // Push new item to items
                newItems.push({
                    id: `I${generateRandomID()}`,
                    type: 'text',
                    value: 'Text',
                    position: initialPosition,
                    font: newFont,
                    opacity: 1,
                    color: colors.black
                });
                return newItems;
            });
        }, 500);
    }

    /**
     * 
     * @description Add image
     * @returns void
     */
    const handlerPickImage = async () => {

        handlerCloseModal()

        setTimeout(() => {
            ImagePicker.openPicker({
                mediaType: 'photo',
                includeBase64: false,
                cropping: true,
                freeStyleCropEnabled: true,
            }).then(handlerAddImage) // Handle image with handler handlerAddImage
            .catch(error => {
                // Handle error
                if (error?.code == "E_NO_LIBRARY_PERMISSION" || error?.code == "E_PICKER_PERMISSION_DENIED") alertOpenPrivacy()
                else if (error?.code != "E_PICKER_CANCELLED") console.log(error)
            });
        }, 500);
    }

    /**
     * 
     * @description Add image
     * @param image Image
     * @returns void
     */
    const handlerAddImage = (image: Image) => {

        const initialPosition: IPosition = {
            x: (width - 100) / 2,
            y: (width - 100) / 2
        }

        setItems(old => {
            const newItems = [...old];
            newItems.push({
                id: `I${generateRandomID()}`,
                type: 'image',
                value: image.path,
                position: initialPosition,
                opacity: 1
            });
            return newItems;
        })
    }

    /**
     * 
     * @description Delete all items
     * @returns void
     */
    const handlerDeleteAllItems = () => {

        handlerCloseModal();
        setTimeout(async () => {
            
            setItems([]);
            setBackgroundColor(colors.white);
            const saved = await AsyncStorage.getItem('saved_edit_meme');
            if (saved) await AsyncStorage.removeItem('saved_edit_meme');
        }, 700);
    }

    /**
     * 
     * @param data IObjectItem | string
     * @description Update item
     * @returns void
     */
    const handlerOnUpdateAppearence = (data: IObjectItem | string) => {

        if (typeof data == 'string') setBackgroundColor(data);
        else {
            const index = items.findIndex((item) => item.id == activeItem);
            const newItems = [...items];
            newItems[index] = data;
            setItems(newItems);
        }
    }

    /**
     * 
     * @description Request permission
     * @returns Promise<boolean>
     */
    const requestPermission: () => Promise<boolean> = async () => {

        if (Platform.OS === 'android') {
            if (Platform.Version >= 33) {
                const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } else {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            }
        }

        return true;
    };

    /**
     * 
     * @description Export meme
     * @returns void
     */
    const handlerExport = () => {
        
        handlerClearActiveItem();

        setTimeout(async () => {

            const hasPermission = await requestPermission();
            if (!hasPermission) {
                Alert.alert('Permission denied');
                return;
            }
            
            const current = viewShotRef.current;
            if (current && typeof current.capture === "function") {
                current.capture().then(async (uri) => {

                    const fileName = `meme_${Date.now()}.png`;
                    const filePath =
                        Platform.OS === 'android'
                        ? `${RNFS.DownloadDirectoryPath}/${fileName}`
                        : `${RNFS.DocumentDirectoryPath}/${fileName}`;

                    await RNFS.copyFile(uri, filePath);

                    console.log("Captured image URI:", uri);
                    console.log(`File saved to: ${filePath}`);

                    setItems([]);
                    setBackgroundColor(colors.white);
                    handlerFullScreen();
                    setModal(2);

                    await Share.share({
                        url: Platform.OS === 'android' ? 'file://' + filePath : filePath,
                        title: 'Bagikan Meme Ini',
                        message: 'Cek meme ini!',
                    });
                });
            } else console.log("ViewShot ref not ready");
        }, 1000);
    };

    /**
     * 
     * @description Check saved editing
     * @returns Promise<void>
     */
    const handlerCheckSavedEditing: () => Promise<void> = async () => {
        
        const saved = await AsyncStorage.getItem('saved_edit_meme');

        if (saved) {
            const data: ISavedEditMeme = JSON.parse(saved);
            setItems(data.items);
            setBackgroundColor(data.backgroundColor);
        }
    }

    /**
     * 
     * @description Save edited meme
     * @returns void
     */
    const handlerSaveEditedMeme = async () => {
        
        if (itemsRef.current.length > 0) {

            const data: ISavedEditMeme = {
            items: itemsRef.current,
            backgroundColor
            };

            await AsyncStorage.setItem('saved_edit_meme', JSON.stringify(data));
        }
    };

    // LISTENERS

    /* Pinch listener to update scale */
    const pinchGesture = Gesture.Pinch()
        .onUpdate((e) => scale.value = savedScale.value * e.scale)
        .onEnd(() => savedScale.value = scale.value);
    
    /* Pan listener to update position */
    const panGesture = Gesture.Pan()
        .onUpdate((e) => {
          translateX.value = savedTranslateX.value + e.translationX;
          translateY.value = savedTranslateY.value + e.translationY;
        })
        .onEnd(() => {
          savedTranslateX.value = translateX.value;
          savedTranslateY.value = translateY.value;
        });
    
    /* Double tap listener to clear active item */
    const doubleTapGesture = Gesture.Tap()
        .numberOfTaps(2)
        .onEnd(() => {
            runOnJS(setActiveCanvas)(activeCanvas ? false : true);
            runOnJS(setActiveItem)(null);
        });
    
    /* Composed gesture listener */
    const composedGesture = Gesture.Race(
        Gesture.Simultaneous(pinchGesture, panGesture),
        Gesture.Exclusive(doubleTapGesture)
    );

    // EFFECTS

    /* Effect for check saved editing */
    useEffect(() => {
        
        handlerCheckSavedEditing();

        return () => {
            console.log("Unmounting ...")
            handlerSaveEditedMeme()
        };
    }, [])

    /* Effect for save edited meme to refference for accessing current items on unmount component */
    useEffect(() => {
        itemsRef.current = items;
    }, [items]);

    // RENDERS

    return (
        <GestureHandlerRootView style={Styles.container.flex}>
            <ModalBottomSheetAddOptions 
                isVisible={modal == 0} 
                currentLengthItem={items.length}
                onAddText={handlerAddText}
                onAddImage={handlerPickImage}
                onDeleteAll={handlerDeleteAllItems}
                onClose={handlerCloseModal} />
            <ModalGeneratorAppearenceStyle 
                isVisible={modal == 1} 
                setting={activeCanvas ? 'canvas' : activeItem != null ? items.find((item) => item.id == activeItem)!.type : 'text'}
                data={(activeCanvas || !activeItem) ? backgroundColor : items.find((item) => item.id == activeItem) || ''}
                onUpdate={handlerOnUpdateAppearence}
                onClose={handlerCloseModal} />
            <Icon source='mi' name="fullscreen" color={colors.white} size={24} containerStyle={styles.fullscreen} onPress={handlerFullScreen} />
            <TouchableOpacity style={styles.content} onPress={handlerClearActiveItem} activeOpacity={1}>
                <GestureDetector gesture={composedGesture}>
                    <Animated.View style={[styles.canvas, animatedStyle, activeCanvas && { borderColor: colors.blue }]}>
                        <TouchableOpacity style={{ flex: 1 }} activeOpacity={1}>
                            <ViewShot
                                ref={viewShotRef}
                                style={[styles.viewShot, { backgroundColor }]}
                                options={{ format: 'png', quality: 1, result: 'tmpfile' }}>
                                { 
                                    items.map((item, index) => {
                                        if (item.type == 'image') {
                                            return (
                                                <ImageGenerator
                                                    key={item.id} 
                                                    id={index} 
                                                    data={item} 
                                                    active={activeItem === item.id} 
                                                    onActive={handlerActiveItem} 
                                                    onUpdate={handlerOnUpdate}
                                                    onDuplicate={handlerOnDuplicate}
                                                    onDelete={handlerOnDelete}/>
                                            )
                                        } else {
                                            return (
                                                <TextGenerator 
                                                    key={item.id} 
                                                    id={index} 
                                                    data={item} 
                                                    active={activeItem === item.id} 
                                                    onActive={handlerActiveItem} 
                                                    onUpdate={handlerOnUpdate}
                                                    onDuplicate={handlerOnDuplicate}
                                                    onDelete={handlerOnDelete}/>
                                            )
                                        }
                                    }) 
                                }
                            </ViewShot>
                        </TouchableOpacity>
                    </Animated.View>
                </GestureDetector>
            </TouchableOpacity>
            <View style={[styles.rowControl, { paddingBottom: insets.bottom + 12 }]}>
                <ScrollView contentContainerStyle={styles.rowScroll} horizontal={true}>
                    {
                        (activeItem != null || activeCanvas) && (
                            <Button 
                                title="Gaya"
                                leftIcon={{ name: 'brush', source: 'fa5', size: 16, color: colors.yellow, style: { marginRight: 10, transform: [{ rotate: '45deg' }] } }} 
                                onPress={handlerShowAppearenceStyle} 
                                textColor={colors.yellow}
                                style={{ backgroundColor: colors.yellow, borderRadius: 100 }}
                                type='inverse' />
                        )
                    }
                    <Button 
                        title="Tambah"
                        leftIcon={{ name: 'plus', size: 16, color: colors.blue, style: { marginRight: 6 } }} 
                        onPress={handlerShowAddOptions} 
                        textColor={colors.blue}
                        style={{ borderRadius: 100 }}
                        type='inverse' />
                    {
                        items.length > 0 && (
                            <Button 
                                title="Export"
                                leftIcon={{ name: 'download', size: 16, color: colors.white, style: { marginRight: 6 } }} 
                                onPress={handlerExport} 
                                style={{ borderRadius: 100 }} />
                        )
                    }
                </ScrollView>
            </View>
            <Snackbar
                visible={modal == 2}
                onDismiss={handlerCloseModal}
                style={{ backgroundColor: colors.grey }}
                children='Meme berhasil disimpan!'
                duration={2000} />
        </GestureHandlerRootView>
    )
}

// EXPORT

export default GeneratorScreen
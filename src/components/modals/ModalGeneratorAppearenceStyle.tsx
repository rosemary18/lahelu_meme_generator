// IMPORT CORE MODULES

import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// IMPORT THIRD PARTY MODULES

import { ScrollView } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Slider from '@react-native-community/slider';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// IMPORT LOCAL MODULES & COMPONENTS

import Styles from '../../styles';
import { colors, IObjectItem } from '../../types';
import { COLORS, FONT_STYLES, FONTS, height } from './constants';
import styles from './modal_generator_appearence.styles';
import { IModalGeneratorAppearenceStyle } from './types';

// MAIN COMPONENT

/**
 * 
 * @param props IModalGeneratorAppearenceStyle
 * @returns React.FC
 */
const ModalGeneratorAppearenceStyle: React.FC<IModalGeneratorAppearenceStyle> = (props: IModalGeneratorAppearenceStyle) => {

    // STATES & VARIABLES

    const {
        isVisible,
        setting,
        data,
        onUpdate,
        onClose
    } = props

    const [color, setColor] = useState<string>('')
    const [opacity, setOpacity] = useState<number>(0)
    const [shadow, setShadow] = useState<number>(0)
    const [fontFamily, setFontFamily] = useState<string>('')
    const [bold, setBold] = useState<boolean>(false)
    const [italic, setItalic] = useState<boolean>(false)
    const [shadowColor, setShadowColor] = useState<string>('')

    const insets = useSafeAreaInsets();

    // HANDLERS

    const handlerChangeColor = (newColor: string) => () => {

        setColor(newColor)
        if (typeof data == 'string') onUpdate(newColor);
        else onUpdate({ ...data, color: newColor });
    }

    const handlerChangeOpacity = () => {

        if (typeof data != 'string') onUpdate({ ...data, opacity })
    }

    const handlerChangeFont = (newFont: string) => () => {

        setFontFamily(newFont)
        if (typeof data != 'string' && data.font != undefined) onUpdate({ ...data, font: { ...data.font, family: newFont } })
    }

    const handlerChangeFontBold = () => {

        setBold(!bold)
        if (typeof data != 'string' && data.font != undefined) onUpdate({ ...data, font: { ...data.font, bold: !bold } })
    }

    const handlerChangeFontItalic = () => {

        setItalic(!italic)
        if (typeof data != 'string' && data.font != undefined) onUpdate({ ...data, font: { ...data.font, italic: !italic } })
    }

    const handlerChangeShadow = () => {

        if (typeof data != 'string' && data.font != undefined) onUpdate({ ...data, font: { ...data.font, shadow } })
    }

    const handlerChangeShadowColor = (newColor: string) => () => {

        setShadowColor(newColor)
        if (typeof data != 'string' && data.font != undefined) onUpdate({ ...data, font: { ...data.font, shadowColor: newColor } });
    }

    // EFFECTS

    useEffect(() => {

        if (isVisible) {
            if (setting == 'canvas') setColor(data as string)
            else if (setting == 'text') {
                setColor((data as IObjectItem).color || '')
                setOpacity((data as IObjectItem).opacity || 0)
                setFontFamily((data as IObjectItem).font?.family || '')
                setBold((data as IObjectItem).font?.bold || false)
                setItalic((data as IObjectItem).font?.italic || false)
                setShadow((data as IObjectItem).font?.shadow || 0)
                setShadowColor((data as IObjectItem).font?.shadowColor || '')
            } else if (setting == 'image') {
                setOpacity((data as IObjectItem).opacity || 0)
            }
        }
    }, [isVisible])

    useEffect(handlerChangeOpacity, [opacity])
    useEffect(handlerChangeShadow, [shadow])

    // RENDERS

    /**
     * 
     * @description Render font option
     * @returns React.FC
     */
    const renderFontOption = () => (
        <View style={styles.section}>
            <Text style={Styles.text['mdBW']}>Font</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                { FONTS.map(({ font, name }, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[styles.fontItem, { borderColor: fontFamily == font ? colors.green : colors.grey }]} 
                        onPress={handlerChangeFont(font)}>
                        <Text 
                            style={[
                                Styles.text.mdW, 
                                { 
                                    color: fontFamily == font ? colors.green : colors.white,
                                    fontFamily: font,
                                    fontWeight: 'bold'
                                }
                            ]}>
                            {name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )

    /**
     * 
     * @description Render format
     * @returns React.FC
     */
    const renderFormat = () => (
        <View style={styles.section}>
            <Text style={Styles.text['mdBW']}>Format</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                { FONT_STYLES.map((font, index) => (
                    <TouchableOpacity 
                        key={index} 
                        style={[styles.fontItem, { borderColor: font.toLowerCase() == 'italic' ? (italic ? colors.green : colors.grey) : (bold ? colors.green : colors.grey) }]} 
                        onPress={font.toLowerCase() == 'italic' ? handlerChangeFontItalic : handlerChangeFontBold}>
                        <Text 
                            style={[
                                Styles.text.mdW, 
                                { 
                                    fontStyle: font.toLowerCase() == 'italic' ? 'italic' : 'normal',
                                    fontWeight: font.toLowerCase() == 'bold' ? 'bold' : 'normal',
                                    color: font.toLowerCase() == 'italic' ? (italic ? colors.green : colors.white) : (bold ? colors.green : colors.white)
                                },
                            ]}>
                            {font}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    )

    /**
     * 
     * @description Render color option
     * @returns React.FC
     */
    const renderColorOption = () => (
        <View style={styles.section}>
            <Text style={Styles.text['mdBW']}>Warna</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                { 
                    COLORS.map((_color, index) => (
                        <TouchableOpacity 
                            key={index}  
                            style={[
                                styles.colorItem, 
                                { 
                                    backgroundColor: _color,
                                    borderColor: _color == color ? colors.green : colors.grey,
                                    height: _color == color ? 28 : 24,
                                    width: _color == color ? 28 : 24,
                                }
                            ]}
                            onPress={handlerChangeColor(_color)} />
                    )) 
                }
            </View>
        </View>
    )

    /**
     * 
     * @description Render opacity option
     * @returns React.FC
     */
    const renderOpacityOption = () => (
        <View style={styles.section}>
            <Text style={Styles.text['mdBW']}>Opacity</Text>
            <Slider
                style={{ marginTop: 12 }}
                minimumValue={0}
                maximumValue={1}
                step={.01} 
                minimumTrackTintColor={colors.blue}
                maximumTrackTintColor={colors.white1}
                thumbTintColor={colors.blue}
                value={opacity}
                onValueChange={setOpacity} />
        </View>
    )

    /**
     * 
     * @description Render shadow option
     * @returns React.FC
     */
    const renderShadowOption = () => (
        <View style={styles.section}>
            <Text style={Styles.text['mdBW']}>Shadow</Text>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 12 }}>
                { 
                    COLORS.map((color, index) => (
                        <TouchableOpacity 
                            key={index} 
                            style={[
                                styles.colorItem, 
                                { 
                                    backgroundColor: color, 
                                    borderColor: shadowColor == color ? colors.green : colors.grey,
                                    height: shadowColor == color ? 28 : 24,
                                    width: shadowColor == color ? 28 : 24,
                                }
                            ]}
                            onPress={handlerChangeShadowColor(color)} />
                    )) 
                }
            </View>
            <Slider
                style={{ marginTop: 12 }}
                minimumValue={0}
                maximumValue={10}
                step={1} 
                minimumTrackTintColor={colors.blue}
                maximumTrackTintColor={colors.white1}
                thumbTintColor={colors.blue}
                value={shadow}
                renderStepNumber={true}
                onValueChange={setShadow} />
        </View>
    )

    /**
     * 
     * @description Render content
     * @returns React.FC
     */
    const renderContent = () => (
        <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ padding: 16, paddingVertical: 4 }}>
                { setting == 'text' && renderFontOption() }
                { setting == 'text' && renderFormat() }
                { setting != 'image' && renderColorOption() }
                { setting != 'canvas' && renderOpacityOption() }
                { setting == 'text' && renderShadowOption() }
            </ScrollView>
        </View>
    )

    return (
        <Modal
            isVisible={isVisible}
            style={[styles.modal, { marginBottom: insets.bottom + 70 }] }
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            animationIn='fadeIn'
            animationOut='fadeOut'
            animationInTiming={300}
            animationOutTiming={300}
            backdropOpacity={0.1}
            deviceHeight={height}
            useNativeDriverForBackdrop
            hideModalContentWhileAnimating>
            { renderContent() }
        </Modal>
    )
}

// EXPORT

export default ModalGeneratorAppearenceStyle

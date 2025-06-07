// IMPORT CORE MODULES

import React, { useEffect } from 'react';
import { Image, View } from 'react-native';

// IMPORT THIRD PARTY MODULES

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

// IMPORT LOCAL MODULES & COMPONENTS

import { colors, IObjectItem } from '../../types';
import { Icon } from '../Icon';
import styles from './image_generator.styles';
import { IDataGenerator } from './types';

// CONSTANTS

const WIDTH = 100;
const HEIGHT = 100;

// MAIN COMPONENT

/**
 * 
 * @param props IDataGenerator
 * @returns React.FC
 */
const ImageGenerator: React.FC<IDataGenerator> = (props: IDataGenerator) => {

    // STATES & VARIABLES

    const {
        id,
        data,
        active,
        onActive,
        onUpdate,
        onDuplicate,
        onDelete,
    } = props;

    const scale = useSharedValue(data.scale || 1);
    const startScale = useSharedValue(1);
    const rotation = useSharedValue(data.rotate || 0);
    const translateX = useSharedValue(data.position.x);
    const translateY = useSharedValue(data.position.y);

    const startX = useSharedValue(0);
    const startY = useSharedValue(0);
    const startRotation = useSharedValue(0);

    // Apply shared values animated style
    const animatedStyle = useAnimatedStyle(() => ({
        transform: [
            { translateX: translateX.value },
            { translateY: translateY.value },
            { rotate: `${rotation.value}rad` },
            { scale: scale.value },
        ],
    }));

    // HANDLERS

    // LISTENERS

    // Rotation listener for image
    const rotateGesture = Gesture.Rotation()
        .onStart(() => {
            'worklet';
            startRotation.value = rotation.value;
        })
        .onUpdate((e) => {
            'worklet';
            if (active) rotation.value = startRotation.value + e.rotation;
        });

    // Rotation listener for image handled by icon rotation
    const rotateIconPanGesture = Gesture.Pan()
        .onStart(() => {
            'worklet';
            startRotation.value = rotation.value;
        })
        .onUpdate((e) => {
            'worklet';
            if (active) rotation.value = startRotation.value + e.translationX * -0.001;
        });

    // Pan listener for image
    const panGesture = Gesture.Pan()
        .onStart(() => {
            'worklet';
            startX.value = translateX.value;
            startY.value = translateY.value;
        })
        .onUpdate((e) => {
            'worklet';
            if (active) {
                translateX.value = startX.value + e.translationX;
                translateY.value = startY.value + e.translationY;
            }
        });
    
    // Scale listener for image
    const scaleGesture = Gesture.Pan()
        .onStart(() => {
            'worklet';
            startScale.value = scale.value;
        })
        .onUpdate((e) => {
            'worklet';
            if (active) {
                const newScale = startScale.value + e.translationY * 0.005;
                scale.value = Math.max(0.2, Math.min(newScale, 5));
            }
        });

    // 1x Tap listener
    const tapGesture = Gesture.Tap()
        .numberOfTaps(1)
        .onEnd(() => runOnJS(onActive)(data.id));

    // Composed gesture listener
    const composedGesture = Gesture.Exclusive(
        Gesture.Race(panGesture, rotateGesture),
        tapGesture
    );

    // EFFECTS

    /* Effect for update passing updated data to parent when component is not active */
    useEffect(() => {
        if (!active) {
            const newData: IObjectItem = {
                ...data,
                rotate: rotation.value,
                scale: scale.value,
                position: {
                    x: translateX.value,
                    y: translateY.value,
                },
            };
            onUpdate?.(newData);
        }
    }, [active]);

    // RENDERS

    return (
        <Animated.View
            style={[
                animatedStyle,
                styles.container,
                active && styles.activeBorder,
                { 
                    zIndex: id,
                    opacity: data.opacity,
                },
            ]}
            >
            <GestureDetector gesture={composedGesture}>
                <View>

                {   
                    /* Only show options when component is active */
                    active && (
                        <>
                            <Icon
                                source="mi"
                                name="content-copy"
                                size={16}
                                containerStyle={{ position: 'absolute', left: -14, top: -22 }}
                                onPress={() => onDuplicate?.(data)}
                            />
                            <Icon
                                source="fa"
                                name="trash-o"
                                size={16}
                                color={colors.red}
                                containerStyle={{ position: 'absolute', right: -14, top: -22 }}
                                onPress={() => onDelete?.(id)}
                            />
                            <GestureDetector gesture={rotateIconPanGesture}>
                                <Icon
                                    source="fo"
                                    name="spinner-rotate-forward"
                                    size={14}
                                    containerStyle={{
                                        position: 'absolute',
                                        right: -16,
                                        bottom: -18,
                                    }}
                                    onPress={() => {}}
                                    />
                            </GestureDetector>
                            <GestureDetector gesture={scaleGesture}>
                                <Icon
                                    source="ii"
                                    name="resize"
                                    size={14}
                                    containerStyle={{
                                        position: 'absolute',
                                        left: -16,
                                        bottom: -18,
                                    }}
                                    onPress={() => {}}
                                    />
                            </GestureDetector>
                        </>
                    )
                }

                <Image
                    source={{ uri: data.value }}
                    style={[styles.image, { width: WIDTH, height: HEIGHT }]}
                    resizeMode="contain" />
                </View>
            </GestureDetector>
        </Animated.View>
    );
};

// EXPORT

export default ImageGenerator;

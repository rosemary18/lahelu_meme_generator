// IMPORT CORE MODULES

import React, { useEffect, useRef, useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

// IMPORT THIRD PARTY MODULES

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

// IMPORT LOCAL MODULES & COMPONENTS

import { colors, fonts, IObjectItem } from '../../types';
import { Icon } from '../Icon';
import styles from './text_generator.styles';
import { IDataGenerator } from './types';

// MAIN COMPONENT

/**
 * 
 * @param props IDataGenerator
 * @returns React.FC
 */
const TextGenerator: React.FC<IDataGenerator> = (props: IDataGenerator) => {

    // VARIABLES & STATES

    const {
        id,
        data,
        active,
        onActive,
        onUpdate,
        onDuplicate,
        onDelete,
    } = props;

    const [editing, setEditing] = useState(false);
    const [_text, setText] = useState(data.value);
    const inputRef = useRef<TextInput>(null);

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

    const handlerDoneEditing = () => setEditing(false);

    // LISTENERS

    // Rotation listeners for text
    const rotateGesture = Gesture.Rotation()
        .onStart(() => {
            'worklet';
            startRotation.value = rotation.value;
        })
        .onUpdate((e) => {
            'worklet';
            if (active && !editing)  rotation.value = startRotation.value + e.rotation;
        });
    
    // Rotation listeners for icon
    const rotateIconPanGesture = Gesture.Pan()
        .onStart(() => {
            'worklet';
            startRotation.value = rotation.value;
        })
        .onUpdate((e) => {
            'worklet';
            if (active) rotation.value = startRotation.value + e.translationX * -0.01;
        });

    // Pan listeners for text
    const panGesture = Gesture.Pan()
        .onStart(() => {
            'worklet';
            startX.value = translateX.value;
            startY.value = translateY.value;
        })
        .onUpdate((e) => {
            'worklet';
            if (active && !editing) {
                translateX.value = startX.value + e.translationX;
                translateY.value = startY.value + e.translationY;
            }
        });
    
    // Scale listeners for text
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
    
    // Double tap listeners
    const doubleTapGesture = Gesture.Tap()
        .numberOfTaps(2)
        .onEnd(() => runOnJS(setEditing)(true));
    
    // Composed gesture listener
    const composedGesture = Gesture.Exclusive(
        Gesture.Race(panGesture, rotateGesture),
        doubleTapGesture
    );

    // EFFECTS

    /* Effect to passing the updated data to onUpdate handler when the component is not active */
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
            }
            setEditing(false);
            onUpdate?.(newData);
        }
    }, [active]);

    /* Effect to update the data.value when the text is changed */
    useEffect(() => {

        if (_text !== data.value) {
            onUpdate?.({
                ...data,
                value: _text,
            });
        }
    }, [_text]);

    return (
        <Animated.View 
            style={[
                animatedStyle,
                styles.container,
                active && styles.activeBorder,
                { zIndex: id },
            ]}>
            <GestureDetector gesture={composedGesture}>
                <View>

                    {
                        /* Only show options when the component is active and not editing */
                        active && !editing && (
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
                                        source='mci'
                                        name="refresh"
                                        size={16}
                                        containerStyle={{ position: 'absolute', right: -16, bottom: -18 }}
                                        onPress={() => {}}
                                        />
                                </GestureDetector>
                                <GestureDetector gesture={scaleGesture}>
                                    <Icon
                                        source="ii"
                                        name="resize"
                                        size={16}
                                        containerStyle={{
                                            position: 'absolute',
                                            left: -18,
                                            bottom: -20,
                                        }}
                                        onPress={() => {}}
                                        />
                                </GestureDetector>
                            </>
                        )
                    }

                    {
                        /* Show text when not active or editing */
                        !editing || !active ? (
                            <TouchableOpacity onPress={() => onActive(data.id)} activeOpacity={1}>
                                <Text 
                                    style={[
                                        styles.text,
                                        {
                                            opacity: data.opacity || 1,
                                            color: data.color || colors.black,
                                            fontFamily: data.font?.family || fonts.regular,
                                            fontWeight: data.font?.bold ? 'bold' : 'normal',
                                            fontStyle: data.font?.italic ? 'italic' : 'normal',
                                            textShadowColor: data.font?.shadowColor || colors.transparent,
                                            textShadowOffset: (data.font?.shadow || 0) > 0 ? { width: 1, height: 1 } : undefined,
                                            textShadowRadius: data.font?.shadow,
                                        }
                                    ]}>
                                    {_text}
                                </Text>
                            </TouchableOpacity>
                        ) : /* Otherwhise show text input */ (
                            <TextInput
                                ref={inputRef}
                                style={[
                                    styles.input,
                                    {
                                        opacity: data.opacity || 1,
                                        color: data.color || colors.black,
                                        fontFamily: data.font?.family || fonts.regular,
                                        fontWeight: data.font?.bold ? 'bold' : 'normal',
                                        fontStyle: data.font?.italic ? 'italic' : 'normal',
                                        textShadowColor: data.font?.shadowColor || colors.transparent,
                                        textShadowOffset: (data.font?.shadow || 0) > 0 ? { width: 1, height: 1 } : undefined,
                                        textShadowRadius: data.font?.shadow,
                                    }
                                ]}
                                value={_text}
                                onChangeText={setText}
                                onBlur={handlerDoneEditing}
                                autoFocus
                                multiline />
                        )
                    }

                </View>
            </GestureDetector>
        </Animated.View>
    );
};

// EXPORT

export default TextGenerator;
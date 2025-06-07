// IMPORT CORE MODULES

import React, { useEffect, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';

// IMPORT THIRD PARTY MODULES

import Modal from 'react-native-modal';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// IMPORT LOCAL MODULES & COMPONENTS

import Styles from '../../styles';
import { colors } from '../../types';
import { Button } from '../buttons';
import { Icon } from '../Icon';
import styles from './modal_bottom_sheet_add_options.styles';
import { IModalBottomSheetAddOptions } from './types';

// CONSTANTS

const { width, height } = Dimensions.get('window');

// MAIN COMPONENT

/**
 * 
 * @param props IModalBottomSheetAddOptions
 * @returns React.FC
 */
const ModalBottomSheetAddOptions: React.FC<IModalBottomSheetAddOptions> = (props: IModalBottomSheetAddOptions) => {

    // STATES & VARIABLES

    const {
        isVisible,
        currentLengthItem,
        onClose,
        onAddText,
        onAddImage,
        onDeleteAll
    } = props

    const [show, setShow] = useState<boolean>(false);

    const insets = useSafeAreaInsets();

    // HANDLERS

    // LISTENERS

    // EFFECTS

    /* Effect for update show if props isVisible changed */
    useEffect(() => {
        setShow(isVisible);
    }, [isVisible]);

    // RENDERS

    return (
        <Modal
            isVisible={show}
            style={styles.modal}
            backdropOpacity={0.5}
            swipeDirection="down"
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            onSwipeComplete={onClose}
			useNativeDriverForBackdrop={true}
            animationIn={"slideInUp"}
            animationOut={"slideOutDown"}
            animationInTiming={500}
            animationOutTiming={500}
            hideModalContentWhileAnimating={true}
            deviceHeight={height}
            deviceWidth={width}>
            <View style={styles.sheet}>
                <View style={styles.header}>
                    <Text style={Styles.text['xlSBW']}>Pilihan</Text>
                    <Icon name="x" color={colors.white} onPress={onClose} />
                </View>
                <View style={[styles.content, { marginBottom: insets.bottom + 18 }]}>
                    <Button 
                        style={{ backgroundColor: colors.transparent }} 
                        title="Teks" 
                        leftIcon={{ source: "mci", name: "format-text", size: 20, color: colors.white, style: { marginRight: 8} }}
                        onPress={onAddText} />
                    <Button 
                        style={{ backgroundColor: colors.transparent }} 
                        title="Gambar" 
                        leftIcon={{ source: "fa", name: "image", size: 16, color: colors.white, style: { marginRight: 10} }}
                        onPress={onAddImage} />
                    {
                        /* Only show delete all button if currentLengthItem is greater than 0 */
                        currentLengthItem > 0 && (
                            <Button 
                                style={{ backgroundColor: colors.transparent }} 
                                title="Hapus Semua" 
                                leftIcon={{ source: "fa", name: "trash", size: 16, color: colors.white, style: { marginRight: 12, marginLeft: 3} }}
                                onPress={onDeleteAll} />
                        )
                    }
                </View>
            </View>
        </Modal>
    );
};

// EXPORT

export default ModalBottomSheetAddOptions;
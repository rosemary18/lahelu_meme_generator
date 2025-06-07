// IMPORT CORE MODULES

import React from 'react'
import { TouchableOpacity } from 'react-native'

// IMPORT THIRD PARTY MODULES

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import Ion from 'react-native-vector-icons/Ionicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Octoicons from 'react-native-vector-icons/Octicons'  
import Antdesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

// IMPORT LOCAL MODULES & COMPONENTS 

import { colors } from '../../types'
import { IIconProps } from './types'

// MAIN COMPONENT

const Icon = ({ source, name, color, size, disabled, style, containerStyle, onPress }: IIconProps) => {

    // STATES & VARIABLES

    const Source =
        source === "mi" ? MaterialIcons
        : source === "mci" ? MaterialCommunityIcon 
        : source === "ii" ? Ion 
        : source == "fa" ? FontAwesome 
        : source == "fa5" ? FontAwesome5 
        : source == "fa5p" ? FontAwesome5Pro 
        : source == "fo" ? Fontisto 
        : source == "oo" ? Octoicons 
        : source == "ad" ? Antdesign 
        : Feather 

    // HANDLERS

    // LISTENERS

    // EFFECTS

    // RENDERS

    /**
     * 
     * @description Render icon
     * @returns React.FC
     */
    const renderIcon = () => <Source 
        name={name} 
        color={disabled ? colors.textTertiary : color || colors.black} 
        size={size || 18} 
        style={style || { width: null, height: null }} />

    
    // Render wrapped with touchable icon if onPress is provided
    if (onPress) {
        return (
            <TouchableOpacity onPress={onPress} activeOpacity={.7} style={containerStyle}>
                { renderIcon() }
            </TouchableOpacity>
        )
    }

    // Render default icon
    return renderIcon()
}

// EXPORT

export default Icon
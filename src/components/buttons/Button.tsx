// IMPORT CORE MODULES

import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

// IMPORT LOCAL MODULES & COMPONENTS

import { Icon } from '../Icon'
import Styles from '../../styles'
import { colors } from '../../types'
import styles from './styles'
import { IButton } from './types'

// MAIN COMPONENT

/**
 * 
 * @param props IButton
 * @returns React.FC
 */
const Button: React.FC<IButton> = (props: IButton) => {

    // STATES & VARIABLES

    const { 
      style, 
      title, 
      type = 'default', 
      activeOpacity = .7, 
      leftIcon, 
      rightIcon, 
      textColor, 
      onPress
    } = props

    return (
      <TouchableOpacity 
          style={[styles.button, style, type == 'inverse' && { backgroundColor: colors.transparent, borderWidth: 1, borderColor: style?.backgroundColor || colors.blue } ]} 
          activeOpacity={activeOpacity} 
          onPress={onPress}>
          { /* Only show left icon if leftIcon data is provided */ leftIcon && <Icon {...leftIcon} /> }
          <Text style={[type == 'inverse' ? Styles.text.lgB : Styles.text.lgBW, textColor && { color: textColor }]}>{title}</Text>
          { /* Only show right icon if rightIcon data is provided */ rightIcon && <Icon {...rightIcon} /> }
      </TouchableOpacity>
    )
}

// EXPORT

export default Button

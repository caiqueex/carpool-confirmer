import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import styles from './style';

export default Button = ({ disabled, onPress, style, title, fontSize }) => {

    return (
        <TouchableOpacity
            disabled={disabled}
            style={styles.button}
            onPress={onPress}>
            <Text style={[styles.buttonText, disabled && styles.disabledText, fontSize && { fontSize: fontSize }]}>{title}</Text>
        </TouchableOpacity>
    )
}
import React from 'react'
import { Pressable, Text } from 'react-native'
import { styles } from './styles'

export const CustomButton = props => {
    return (
        <Pressable style = { { ...styles.container, backgroundColor: props.color } } onPress = { props.handlePress }>
            <Text style = { styles.text }>{ props.text }</Text>
        </Pressable>
    )
}
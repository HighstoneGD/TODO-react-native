import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import * as actions from '../../../redux/actions'
import { CustomButton } from '../CustomButton/CustomButton'

export const AddItem = () => {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const handleAdd = () => {
        if (!text) return
        dispatch(actions.addItem(text))
        setText('')
    }

    return (
        <View style = { styles.container }>
            <TextInput 
                style = { styles.input } 
                value = { text } 
                onChangeText = { setText } 
                autoFocus/>
            <CustomButton handlePress = { handleAdd } text = "Add" color = "#26de81"/>
        </View>
    )
}
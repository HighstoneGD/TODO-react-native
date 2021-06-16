import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { styles } from './styles'
import { useDispatch } from 'react-redux'
import * as actions from '../../../redux/actions'
import { CustomButton } from '../CustomButton/CustomButton'

export const ListItem = (props) => {
    const [newName, setNewName] = useState(props.text)

    const dispatch = useDispatch()

    const handleRename = () => {
        dispatch(actions.renameItem(props.serverId, newName))
    }

    const handleDelete = () => {
        dispatch(actions.deleteItem(props.serverId))
    }

    return (
        <View style = { styles.container }>
            <TextInput 
                style = { styles.input } 
                value = { newName } 
                onChangeText = { setNewName }
                onBlur = { handleRename }/>
            <View style = { styles.buttons }>
                <CustomButton handlePress = { handleDelete } text = "Delete" color = "#fc5c65"/>
            </View>
        </View>
    )
}
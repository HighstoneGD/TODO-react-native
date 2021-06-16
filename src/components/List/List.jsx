import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import { ListItem } from './ListItem/ListItem'
import { AddItem } from './AddItem/AddItem'

export const List = () => {
    const data = useSelector(state => state)

    const renderItem = ({ item }) => <ListItem text = { item.title } serverId = { item.id } />

    return (
        <View style = { styles.container }>
            { data.length ? 
                <FlatList 
                    data = { data } 
                    renderItem = { renderItem }
                    keyExtractor = { item => item.id.toString() }/> : 
                <Text style = { styles.noItems }>No items</Text> }
            <AddItem />
        </View>  
    )
}
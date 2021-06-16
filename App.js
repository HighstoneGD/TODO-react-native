import React from 'react'
import { StyleSheet, View } from 'react-native'
import { List } from './src/components'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducer } from './src/redux/reducer'

const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
))

export default function App() {
  return (
    <Provider store = { store }>
      <View style = { styles.container }>
        <List />
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
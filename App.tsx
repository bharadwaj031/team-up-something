import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import { store } from './src/store'
import MessageComponent from './src/components/Message/message.component'

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
          <MessageComponent />
        </View>
      </PaperProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

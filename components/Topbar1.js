import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Topbar1 = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.txt1}>
            Uniconnect
        </Text>
    </View>
  )
}

export default Topbar1

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c8ccb8',
        alignItems: 'center',
        justifyContent: 'center',
        top: 10
    },
    txt1: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
})
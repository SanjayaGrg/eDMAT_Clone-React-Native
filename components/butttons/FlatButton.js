
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const FlatButton = ({ submit }) => {
    return (
        <View style={styles.container}>

            <Text style={styles.button} onPress={submit}> Sign In </Text>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    button: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#2ecc71',
        textAlign: 'center',
        borderRadius: 40,
        marginHorizontal: 20,
        padding: 8,
        height: 45
    },
});

//make this component available to the app
export default FlatButton;

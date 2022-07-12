
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const UploadButton = ({ submit }) => {
    return (
        <View>

            <Text style={styles.button} onPress={submit}> Upload </Text>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({

    button: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
        backgroundColor: '#EE5A24',
        textAlign: 'center',
        borderRadius: 40,
        marginHorizontal: 20,
        marginTop: 20,
        padding: 8,
        height: 45
    },
});

//make this component available to the app
export default UploadButton;


import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const SearchBar = ({ containerStyle, searchValue, value }) => {
    return (
        <View style={[styles.container, { ...containerStyle }]}>
            <Icon
                name='search'
                size={25}
                style={styles.icons}
            />
            <TextInput
                style={styles.searchbar}
                placeholder='Search'
                onChangeText={searchValue}
                value={value}
                keyboardType='number-pad'
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 5,
        borderWidth: 0.5,
        borderColor: '#95a5a6',
        backgroundColor: '#fff',
        borderRadius: 40,
        marginHorizontal: 20,
        height: 45
    },
    icons: {
        marginLeft: 8,
        marginTop: 10
    },
    searchbar: {
        flex: 1,
        height: 40,
        paddingLeft: 5,
        fontSize: 18,
        marginTop: 5,
    },
});

export default SearchBar;

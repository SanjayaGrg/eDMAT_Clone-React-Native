
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const UploadHeader = ({ logOut, goHome }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity>
                    <Icon
                        name='home'
                        size={27}
                        style={styles.icons}
                        onPress={goHome}
                    />
                </TouchableOpacity>

                <Text style={{ fontSize: 20, fontWeight: '600' }}>Dashboard</Text>

                <TouchableOpacity>
                    <Icon
                        name='menu-open'
                        size={27}
                        style={styles.icons}
                        onPress={logOut}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: StatusBar.currentHeight,

    },
    navbar: {
        // flex: 1,
        marginTop: 0,
        marginBottom: 10,
        height: 50,
        backgroundColor: '#27ae60',
        elevation: 3,
        borderRadius: 5,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
export default UploadHeader;

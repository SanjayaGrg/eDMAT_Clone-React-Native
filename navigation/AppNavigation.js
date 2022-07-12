
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import UploadImage from '../screens/UploadImage';

const AppStack = createNativeStackNavigator();

// create a component
const AppNavigation = () => {
    return (
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name='HomeScreen' component={HomeScreen} options={{ title: 'My Home' }} />
            <AppStack.Screen name='UploadImage' component={UploadImage} options={{ title: 'Upload Image' }} />
        </AppStack.Navigator>
    );
};

export default AppNavigation;

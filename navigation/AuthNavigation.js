
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';

const AuthStack = createNativeStackNavigator();

// create a component
const AuthNavigation = () => {
    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }}
        >
            <AuthStack.Screen name='SignInScreen' component={SignInScreen} />
        </AuthStack.Navigator>
    );
};

export default AuthNavigation;

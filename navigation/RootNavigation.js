
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigation from './AuthNavigation';
import AppNavigation from './AppNavigation';
import { AuthContext } from '../components/Context';
import DeviceInfo from 'react-native-device-info';
import { handleLogin } from "../api/Auth";


const RootNavigation = () => {
    const [username, setUsername] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(true);
    const [responseMsg, setResponseMsg] = useState("");
    const [userId, setUserId] = useState();
    const [dialogVisible, setDialogVisible] = useState(false);
    const [userToken, setUserToken] = useState('abc');
    console.log(userToken);

    const authContext = React.useMemo(() => ({
        SignIn: async (username, password) => {
            setIsLoggingIn(true);
            let deviceID = DeviceInfo.getUniqueId();
            console.log(email, password, deviceID);
            const userResponse = await handleLogin(
                email, password, deviceID
            );
            if (userResponse.status == 200) {
                if (!userResponse.data.error) {
                    if (userResponse.data.access_token) {
                        setUserId(userResponse.data.user.id);
                        setUserToken(userResponse.data.access_token);
                        Alert.alert(userResponse.data.message)
                    }
                } else {
                    Alert.alert(userResponse.data.error)
                    console.log('error', userResponse.data.error)
                }
            } else {
                setDialogVisible(true)
                setResponseMsg(userResponse)
                console.log('userResponse', userResponse)
            }
            setIsLoggingIn(false);
        },
        SignOut: () => {
            setUserToken(null);
            setResponseMsg("The account has been logged out.");
            setIsLoggingIn(false);
        }
    }), []);
    useEffect(() => {
        // setTimeout(async () => {
        //     isLoggingIn(false);
        // }, 1000);
        setIsLoggingIn(false);
    }, []);

    return (
        <AuthContext.Provider
            value={{
                authContext,
                isLoggingIn,
                responseMsg,
                userToken,
                userId,
                dialogVisible,
            }}
        >
            <NavigationContainer>
                {userToken != null ? <AppNavigation /> : <AuthNavigation />}
            </NavigationContainer>
        </AuthContext.Provider>

    );
};

export default RootNavigation;

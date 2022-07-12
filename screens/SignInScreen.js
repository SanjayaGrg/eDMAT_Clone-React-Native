import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TextInput, Image, Dimensions, StatusBar, TouchableOpacity, Button } from 'react-native';
import { Formik } from 'formik';
import FlatButton from '../components/butttons/FlatButton';
import * as Yup from 'yup';
import { AuthContext } from '../components/Context';
import { useNavigation } from '@react-navigation/native';


const SignInScreen = () => {

    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);

    // const handleSubmit = () => {
    //     alert("Please enter the fields.")
    // }
    const handlePassword = () => {
        alert("Please Contact Bank.");
    };

    const {
        authContext: { signIn },
        responseMsg,
        isLoggingIn,
        dialogVisible,
        hideDialog,
    } = React.useContext(AuthContext);

    const validation = Yup.object().shape({
        username: Yup.string().required().min(10).label("Username"),
        password: Yup.string().required().min(8).label("Password")
    });


    return (
        <View style={styles.container}>
            <StatusBar
                translucent={true}
                backgroundColor="rgba(0,0,0,0.2)"
                barStyle="light-content"
            />
            <View style={styles.logoContainer}>
                <Image style={styles.logoImg} source={require('../components/images/eDMAT_Logo.png')} />
            </View>
            <View style={styles.loginContainer}>
                <Formik
                    initialValues={{ username: "sanjaya@gmail.com", password: "admin123" }}
                    validationSchema={validation}
                    onSubmit={({ username, password }) => {
                        // signIn(username, password);
                    }}
                >
                    {({ values, errors, touched, handleChange, handleSubmit }) => (
                        <View style={styles.content}>
                            <View style={{ marginBottom: 0 }}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder='Username'
                                    placeholderTextColor='#b2bec3'
                                    autoCapitalize='none'
                                    keyboardType='email-address'
                                />
                                <Text style={styles.errorMessage}>
                                    {touched.username && errors.username}
                                </Text>
                            </View>
                            <KeyboardAvoidingView>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder='Password'
                                    placeholderTextColor='#b2bec3'
                                    secureTextEntry={true}
                                />
                                <Text style={styles.errorMessage}>
                                    {touched.password && errors.password}
                                </Text>
                            </KeyboardAvoidingView>

                            <TouchableOpacity>

                                <FlatButton submit={handleSubmit} />

                            </TouchableOpacity>

                            <TouchableOpacity>

                                <Text style={styles.forgot} onPress={handlePassword}>Forgot Password?</Text>

                            </TouchableOpacity>

                        </View>
                    )}

                </Formik>

            </View >
        </View >
    );
};

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logoContainer: {
        flex: 1,
        width: windowWidth,
        marginTop: 50,
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    loginContainer: {
        flex: 2,
        backgroundColor: '#ffffff'
    },
    content: {
        marginHorizontal: 20,
    },
    logoImg: {
        width: 350,
        height: 70,
        marginTop: 30,
    },
    errorMessage: {
        color: "crimson",
        marginBottom: 2,
        marginTop: 2,
        marginLeft: 5,
    },

    inputText: {
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#dfe6e9',
        padding: 13,
        height: 44,
        backgroundColor: "white",
        // marginVertical: 5,
    },
    forgot: {
        textAlign: 'center',
        color: '#2ecc71',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        marginHorizontal: 5,
        padding: 2

    },
});

export default SignInScreen;

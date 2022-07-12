
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AuthContext } from "../components/Context";

const DashboardHeader = () => {

    // const {
    //     authContext: { signOut },

    // } = React.useContext(AuthContext);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navbar}>
                <TouchableOpacity>
                    <Icon
                        name='menu-open'
                        size={27}
                        style={styles.icons}
                        onPress={() => console.log('Pressed')}
                    />
                </TouchableOpacity>

                <Text style={{ fontSize: 20, fontWeight: '600' }}>Dashboard</Text>

                <TouchableOpacity>
                    <Icon
                        name='logout'
                        size={27}
                        style={styles.icons}
                    // onPress={signOut}
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
export default DashboardHeader;

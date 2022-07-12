import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import UploadButton from '../components/butttons/UploadButton';
import UploadHeader from '../components/UploadHeader';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'react-native-image-picker';

const UploadImage = () => {
    const navigation = useNavigation();
    const [image1, setImage1] = useState();
    const [isImage1, setIsImage1] = useState(false);
    const back = () => { }
    const next = () => { }

    const returnHome = () => {
        navigation.navigate('HomeScreen');
    }
    const openCamera = () => {
        console.log('opening camera');
        ImagePicker.launchCamera({ mediaType: 'photo ' }, (response) => {
            if (!response.didCancel) {
                // console.log('res', response)
                // setImage1(response)
                // setImgData1(response)
                // setIsImage1(true)				
                response.assets.map(({ uri }) => {
                    // setImage1(uri)
                    // setIsImage1(true)
                    console.log(uri)
                    setImage1(uri);
                    setIsImage1(true);

                })
            }
        })
    }




    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent={true}
                backgroundColor="rgba(0,0,0,0.5)"
                barStyle='light-content'
            />

            {/* creating a navbar style */}
            <UploadHeader goHome={returnHome} />
            <Text style={styles.title}>Form Image 1</Text>
            <View>
                <View style={styles.logoContainer}>
                    <TouchableOpacity
                        onPress={openCamera}
                    >
                        {isImage1 == false ?
                            <Icon
                                name='photo-camera'
                                size={187}
                                style={styles.icons}
                            /> :

                            <Image style={styles.image1} source={{ uri: image1 }} />}
                    </TouchableOpacity>


                </View>
            </View>
            <TouchableOpacity>
                <UploadButton />
            </TouchableOpacity>

            <View style={styles.buttons}>
                <TouchableOpacity>

                    <Text style={styles.button} onPress={back}> Back </Text>

                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.button} onPress={next}> Next </Text>

                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        alignItems: 'center'
    },
    title: {
        textAlign: 'center',
        marginVertical: 20,
        fontWeight: 'bold',
        fontSize: 18
    },
    icons: {
        marginVertical: 30
    },
    buttons: {
        marginVertical: 10,
        flexDirection: 'row',
        // alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,

    },
    image1: {
        height: 250,
        width: 250,
        justifyContent: 'center'
    },

    button: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#2ecc71',
        textAlign: 'center',
        borderRadius: 40,
        padding: 8,
        height: 45
    },


});

export default UploadImage;
 //<Image style={styles.image1} source={{ uri: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67773a9d419786091c958b2ad08eae5e" }} />
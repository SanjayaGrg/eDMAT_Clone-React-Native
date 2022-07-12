import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, TextInput, FlatList, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DashboardHeader from '../components/DashboardHeader';
import SearchBar from '../components/SearchBar';
import UploadImage from './UploadImage';

const DATA = [
    { 'id': 1, 'token': 'DEAQIJO:EUIISKKJDJKSLISKDJJIDJDKDKDDDIEWNSDJEUWOIRRKDNSDJ', 'ph': 9865328906 },
    { 'id': 2, 'token': 'DEAQIJO:EUIISKKJDJKSLISKDJJIDJDKDKIEWNSDDEEWJEUWOIRRKDNSDJ', 'ph': 9860105827 },
    { 'id': 3, 'token': 'DEAQIJO:EUIISKKJDJKSLISKDJJIDJDKDKIEWNSDYYYYJEUWOIRRKDNSDJ', 'ph': 9878451254 },
    { 'id': 4, 'token': 'DEAQIJO:EUIISKKJDJKSLISKDJJIDJDKDKIEWNSDJEQQWEUWOIRRKDNSDJ', 'ph': 9858526369 },
    { 'id': 5, 'token': 'DEAQIJO:EUIISKKJDJKSLISKDJJIDJDKD1112KIEWNSDJEUWOIRRKDNSDJ', 'ph': 9875869495 },
    { 'id': 6, 'token': 'DEAQIJO:EUIISKKJDJKSLISKDJJIDJDKDKIE2222WNSDJEUWOIRRKDNSDJ', 'ph': 9865328956 },
    { 'id': 7, 'token': 'DEAQIJO:EUIISKKJDJKSLISKDJJIDJDKDKIE2222WNSDJEUWOIRRKDNSDJ', 'ph': 9815328956 },
    { 'id': 8, 'token': 'DEAQIJO:EUIISKKJDJKSLISKDJJIDJDKD1112KIEWNSDJEUWOIRRKDNSDJ', 'ph': 9805869495 },
    { 'id': 9, 'token': 'DEAQIJO:EUIISKKJDJKSLISKDJJIDJDKDKIE2222WNSDJEUWOIRRKDNSDJ', 'ph': 98565328956 },
    { 'id': 10, 'token': 'DEAQIJO:EUIISKKJDJKSLISKDJJIDJDKDKIE2222WNSDJEUWOIRRKDNSDJ', 'ph': 9811328956 }
];


const HomeScreen = () => {

    const navigation = useNavigation();
    const [isFetching, setIsFetching] = useState(false);
    // const [search, setSearch] = useState();
    const [dummyData, setDummyData] = useState(DATA);
    const [masterData, setMasterData] = useState(DATA);
    const [searchQuery, setSearchQuery] = useState('');

    const openUpload = () => {
        navigation.navigate('UploadImage')
    }

    const handleSearch = (text) => {
        setDummyData(masterData);
        console.log(text);
        if (text) {
            const newData = masterData.filter(item => {
                const itemData = `${item.ph}`;
                const textData = text;
                return itemData.indexOf(textData) > -1;
            })
            setDummyData(newData);
            setSearchQuery(text);
        } else {
            setDummyData(masterData);
            setSearchQuery(text);
        }
    }


    useEffect(() => {
        onRefresh();
    }, [])

    const onRefresh = () => {
        setIsFetching(true);
        setDummyData(DATA);
        setIsFetching(false);

    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent={true}
                backgroundColor="rgba(0,0,0,0.5)"
                barStyle='light-content'
            />

            {/* creating a navbar style */}
            <DashboardHeader />
            <View>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('../components/images/eDMAT_Logo.png')} />
                </View>
                <View style={styles.search}>
                    <SearchBar searchValue={(query) => handleSearch(query)} value={searchQuery} />
                </View>
                <View style={styles.header}>
                    <Text>Token</Text>
                    <Text style={{ marginLeft: 130 }}>Mobile Number</Text>
                    <Text>Upload</Text>
                </View>
            </View>
            {/* <View> */}

            <FlatList
                Vertical
                data={dummyData}
                renderItem={({ item }) => {
                    return (<View style={styles.flatList}>
                        <Text style={styles.tokenNo} ellipsizeMode='tail' numberOfLines={1}>{item.token}</Text>
                        <Text style={styles.phone}>{item.ph}</Text>
                        <TouchableOpacity>
                            <Icon
                                name='file-upload'
                                size={27}
                                style={styles.upload}
                                onPress={openUpload}
                            />
                        </TouchableOpacity>

                    </View>)
                }}
                onRefresh={onRefresh}
                refreshing={isFetching}
                keyExtractor={(item) => item.id}
            />
            {/* </View> */}

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
    logo: {
        width: 350,
        height: 70,
        marginTop: 15,
        marginBottom: 15,
    },
    search: {
        // flex: 1,
        marginVertical: 20,
    },
    header: {
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#95a5a6'
    },
    flatList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#95a5a6',
        backgroundColor: '#fff',
        padding: 5,
        height: 50,
    },
    tokenNo: {
        // paddingHorizontal: 100,
        marginLeft: 10,
        width: '40%',
        marginVertical: 10
    },
    phone: {
        // textAlign: 'center',
        marginLeft: 0,
        marginVertical: 10
    },
    upload: {
        marginRight: 20,
        marginVertical: 10
    }
});

export default HomeScreen;

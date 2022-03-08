/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import Feather from 'react-native-vector-icons/Feather';

import BannerSlider from '../components/BannerSlider';
import { windowWidth } from '../utils/Dimensions';

import { freeGames, paidGames, sliderData } from '../model/data';
import CustomSwitch from '../components/CustomSwitch';
import ListItem from '../components/ListItem';
import UseAuth from '../Hooks/UseAuth';
import UseProfileImg from '../Hooks/UseProfileImg';
import InvoiceItem from '../components/Invoiceitem';
import { Center } from 'native-base';

export default function AllOrdersScreen({ navigation }) {
    const [gamesTab, setGamesTab] = useState(1);
    const onSelectSwitch = value => {
        setGamesTab(value);
    };
    const { user } = UseAuth();
    const profilepic = UseProfileImg();
    // fetching order item
    const [orders, setOrders] = useState([]);
    const [invoices, setInvoices] = useState([]);
    // orders collection
    useEffect(() => {
        fetch(`https://www.alijahan.xyz/marchentOrder?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(error => console.log(error));
    }, []);
    // invoices collection
    useEffect(() => {
        fetch(`https://www.alijahan.xyz/marchentPaymentSingle?email=${user.email}`)
            .then(res => res.json())
            .then(data => setInvoices(data))
            .catch(error => console.warn(error))
    }, []);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ padding: 20 }}>


                <View style={{ marginVertical: 20 }}>
                    <CustomSwitch
                        selectionMode={1}
                        option1="Orders"
                        option2="Invoice"
                        onSelectSwitch={onSelectSwitch}
                    />
                </View>

                {gamesTab === 1 &&
                    orders.map(item => (
                        <ListItem
                            key={item._id}
                            item={item}
                            onPress={() =>
                                navigation.navigate('OrderDetails', {
                                    title: item.title,
                                    id: item.id,
                                    item: item
                                })
                            }
                        />
                    ))}

                {gamesTab === 2 &&
                    invoices.map(item => (
                        <InvoiceItem
                            key={item._id}
                            item={item}
                            onPress={() =>
                                navigation.navigate('InvoiceDetails', {
                                    title: item.title,
                                    id: item._id,
                                    item: item
                                })
                            }
                        />
                    ))}

            </ScrollView>
        </SafeAreaView>
    );
}

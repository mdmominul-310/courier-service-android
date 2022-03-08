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
import InvoiceListItem from '../components/InvoiceListItem';

export default function InvoiceDetailsScreen({ navigation, route }) {
    let ordersId = route.params.item.ordersId;
    const [orders, setOrders] = useState([]);
    const { user } = UseAuth();
    // fetch order item
    useEffect(() => {
        fetch(`https://www.alijahan.xyz/paidOrders?email=${user.email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ordersId)
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <ScrollView style={{ padding: 20 }}>

                {
                    orders.map(item => (
                        <InvoiceListItem
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

            </ScrollView>
        </SafeAreaView>
    );
}

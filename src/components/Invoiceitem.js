/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import UseAuth from '../Hooks/UseAuth';
import { windowWidth } from '../utils/Dimensions';

export default function InvoiceItem({
    photo,
    title,
    subTitle,
    isFree,
    price,
    onPress,
    item
}) {
    const [orders, setOrders] = useState([]);
    const { user } = UseAuth();
    let payableAmount = 0;
    let status = '';

    useEffect(() => {
        fetch(`https://www.alijahan.xyz/paidOrders?email=${user.email}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item.ordersId)
        })
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    orders.map(order => {
        if (order.orderSummaray.status === "Delivered") {
            status = order.payment
            return payableAmount = payableAmount + parseFloat(order.orderSummaray.payAbleAmout)
        }
        if (order.orderSummaray.status === "Returned") {
            return payableAmount = payableAmount - parseFloat(order.orderSummaray.calcDCharge)
        }
        else return 0
    })
    console.log(orders)
    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 20,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>

                <View style={{ width: windowWidth - 220 }}>
                    <Text
                        style={{
                            color: '#333',
                            fontFamily: 'Roboto-Medium',
                            fontSize: 14,
                        }}>
                        {item._id}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            color: '#333',
                            fontFamily: 'Roboto-Medium',
                            fontSize: 14,
                            textTransform: 'uppercase',
                        }}>
                        Date:{item.date}

                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            color: '#333',
                            fontFamily: 'Roboto-Medium',
                            fontSize: 14,
                            textTransform: 'uppercase',
                        }}>
                        Amount:{payableAmount}

                    </Text>
                </View>
            </View>

            <TouchableOpacity
                onPress={onPress}
                style={{
                    backgroundColor: '#0aada8',
                    padding: 10,
                    width: 100,
                    borderRadius: 10,
                }}>
                <Text
                    style={{
                        color: '#fff',
                        textAlign: 'center',
                        fontFamily: 'Roboto-Medium',
                        fontSize: 14,
                    }}>
                    {status}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

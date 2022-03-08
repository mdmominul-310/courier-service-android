/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/Dimensions';

export default function InvoiceListItem({
    photo,
    title,
    subTitle,
    isFree,
    price,
    onPress,
    item
}) {
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
                        {item.recieverDetails.name}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            color: '#333',
                            fontFamily: 'Roboto-Medium',
                            fontSize: 14,
                            textTransform: 'uppercase',
                        }}>
                        {item.recieverDetails.number}

                    </Text>
                    <Text
                        numberOfLines={1}
                        style={{
                            color: '#333',
                            fontFamily: 'Roboto-Medium',
                            fontSize: 14,
                            textTransform: 'uppercase',
                        }}>
                        Amount:{item.orderSummaray.payAbleAmout}

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
                    View
                </Text>
            </TouchableOpacity>
        </View>
    );
}

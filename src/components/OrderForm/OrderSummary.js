import { View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Box, Center, Divider, HStack, ScrollView, Text } from 'native-base'

export default function OrderSummary(props) {
    return (
        <SafeAreaView style={{
            margin: 10
        }}>
            <Center marginTop={3} marginBottom={3} borderBottomColor="green.700" borderBottom={2} borderBottomWidth={2}>
                <Text>Order summaray</Text>
            </Center>
            <Box marginBottom={5}>
                <Divider />
                <HStack space={150} >
                    <Text>Cash Collection:</Text>
                    <Text>{props.cashCollection}+{props.dCharge}+{props.weightCharge}={props.netCashCollection}</Text>
                </HStack>
                <HStack space={150} >
                    <Text>Delivery Charge:</Text>
                    <Text>{props.calcDCharge}</Text>
                </HStack>
                <HStack space={150} >
                    <Text>Weight Charge   :</Text>
                    <Text>{props.weight}</Text>
                </HStack>
                <HStack space={150} j>
                    <Text>COD                     :</Text>
                    <Text>{props.cod}</Text>
                </HStack>
                <HStack space={150} >
                    <Text>Total                    :</Text>
                    <Text>{props.total}</Text>
                </HStack>
                <HStack space={150} >
                    <Text>Payable Amount :</Text>
                    <Text>{props.totalCharge}</Text>
                </HStack>
            </Box>
            <TouchableOpacity style={{
                backgroundColor: 'green',
                width: 100,
                padding: 10,
                borderRadius: 5,

            }}
                onPress={() => props.setActive((p) => p = 0)}
            >
                <Text style={{
                    color: 'white'
                }} >
                    Preview
                </Text>
            </TouchableOpacity>
        </SafeAreaView >


    )
}
import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Center, FormControl, Input, Radio } from 'native-base'

export default function OrderInfoNext(props) {
    return (
        <SafeAreaView>
            <Center>
                <Text>
                    Order Information
                </Text>
            </Center>
            <FormControl isRequired maxW="350" margin={3}>
                <FormControl.Label>Cash Collection</FormControl.Label>
                <Input borderColor='gray.600' borderWidth={1} placeholder='Cash Collection' type="number" defaultValue={props.cashCollection} onChangeText={text => props.setCashCollection(text)} />

            </FormControl>
            <FormControl isRequired maxW="350" margin={3}>
                <FormControl.Label>With Delivery Charge</FormControl.Label>
                <Radio.Group defaultValue={props.WithDelivery} onChange={value => props.setWithDelivery(value)}>
                    <Radio value="yes" my={1} >
                        Yes
                    </Radio>
                    <Radio value="no" my={1} >
                        No
                    </Radio>
                </Radio.Group>

            </FormControl>
        </SafeAreaView>
    )
}
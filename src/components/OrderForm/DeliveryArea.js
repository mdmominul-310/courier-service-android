import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Center, TextArea } from 'native-base'
import AutoComplete from '../Shared/AutoComplete'

export default function DeliveryArea(props) {
    return (
        <SafeAreaView>
            <Center>
                <Text>
                    Selec Delivery area
                </Text>
            </Center>
            <AutoComplete item={props.item} setItem={props.setItem} />
            <View margin={5}>
                <TextArea h={20} placeholder="Full Address" borderColor='gray.600' defaultValue={props.fullAddress} onChangeText={text => props.setFullAddress(text)} />

            </View>
        </SafeAreaView>
    )
}
import { View, Text } from 'react-native'
import React from 'react'
import { Box, Center, TextArea } from 'native-base'
import AutoComplete from '../Shared/AutoComplete'

export default function RegStepTwo(props) {
    return (
        <View>
            <Center>
                <Text>
                    Select Pickup Location
                </Text>
            </Center>
            <AutoComplete item={props.item} setItem={props.setItem} />
            <View margin={5}>
                <TextArea h={20} placeholder="Full Address" borderColor='gray.600' defaultValue={props.fullAddress} onChangeText={text => props.setFullAddress(text)} />

            </View>
        </View>
    )
}
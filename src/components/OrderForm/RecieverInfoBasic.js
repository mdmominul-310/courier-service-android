import { View, Text } from 'react-native'
import React from 'react'
import { Center, Divider, FormControl, Input } from 'native-base'

export default function RecieverInfoBasic(props) {
    return (
        <View>

            <Center marginBottom={5}>
                <Text>Reciever Information</Text>
            </Center>
            <Divider />
            <View style={{ margin: 10 }}>
                <FormControl isRequired>
                    <FormControl.Label>Reciever Name</FormControl.Label>
                    <Input borderColor='gray.600' borderWidth={1} placeholder='Reciever Name' marginBottom={5} defaultValue={props.recieverName} onChangeText={text => props.setRecieverName(text)} />

                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label>Reciever Number</FormControl.Label>
                    <Input borderColor='gray.600' borderWidth={1} placeholder='Reciever Number' type="number" defaultValue={props.recieverNumber} onChangeText={text => props.setRecieverNumber(text)} />

                </FormControl>
            </View>
        </View >
    )
}
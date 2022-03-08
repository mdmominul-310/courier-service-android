import { View, Text } from 'react-native'
import React from 'react'
import { Box, FormControl, Input } from 'native-base'

export default function RegStepOne(props) {
    return (
        <View>
            <Box marginTop={3}>
                <FormControl isRequired>
                    <FormControl.Label>Name</FormControl.Label>
                    <Input borderColor='gray.600' borderWidth={1} placeholder='Name' marginBottom={5} defaultValue={props.name} onChangeText={text => props.setName(text)} />

                </FormControl>
                <FormControl isRequired>
                    <FormControl.Label>Mobile Number</FormControl.Label>
                    <Input borderColor='gray.600' borderWidth={1} type='number' placeholder='Mobile Number' marginBottom={5} defaultValue={props.number} onChangeText={text => props.setNumber(text)} />

                </FormControl>
            </Box>

        </View>
    )
}
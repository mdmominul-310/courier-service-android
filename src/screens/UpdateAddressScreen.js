import { View, Text, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { Button, Center, Heading, TextArea } from 'native-base'
import AutoComplete from '../components/Shared/AutoComplete'
import SuccessAlert from '../components/Shared/SuccessAlert';
import UseSingleuser from '../Hooks/UseSingleUser';
import { TouchableOpacity } from 'react-native-gesture-handler';
import UseAuth from '../Hooks/UseAuth';

export default function UpdateAddressScreen(props) {
    // marchent
    const { user } = UseAuth();
    const [item, setItem] = useState({ id: 'update', name: props.route.params.marchent.location });
    const [fullAddress, setFullAddress] = useState(props.route.params.marchent.address)
    // success modal state
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef(null);
    const handleSubmit = () => {
        const newLocation = {
            location: item.name,
            address: fullAddress
        }
        fetch(`https://www.alijahan.xyz/updatelocation?email=${user?.email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newLocation)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setIsOpen(!isOpen);
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <SafeAreaView>
            <Center marginTop={4}>
                <Heading>
                    Update Address
                </Heading>
            </Center>
            <AutoComplete item={item} setItem={setItem} />
            <View margin={5}>
                <TextArea h={20} placeholder="Full Address" borderColor='gray.600' defaultValue={fullAddress} onChangeText={text => setFullAddress(text)} />

            </View>
            <Center marginTop={5}>
                <Button onPress={handleSubmit} >
                    <Text>Save</Text>
                </Button>
            </Center>
            <SuccessAlert isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} cancelRef={cancelRef} />

        </SafeAreaView>
    )
}
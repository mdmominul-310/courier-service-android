import { View, Text } from 'react-native'
import React from 'react'
import { AlertDialog, Button, Center } from 'native-base'

export default function DeleteOrder(props) {
    const confirm = () => {
        fetch(`https://www.alijahan.xyz/order?id=${props.item._id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    console.log(data)
                    props.onClose();
                    alert("success! order removed from database! reload the app");
                }
            })

    }
    return (
        <Center>

            <AlertDialog leastDestructiveRef={props.cancelRef} isOpen={props.isOpen} onClose={props.onClose}>
                <AlertDialog.Content>
                    <AlertDialog.CloseButton />
                    <AlertDialog.Header>Delete Order!</AlertDialog.Header>
                    <AlertDialog.Body>
                        This will remove all data relating to this order. This action cannot be
                        reversed. Deleted data can not be recovered.
                    </AlertDialog.Body>
                    <AlertDialog.Footer>
                        <Button.Group space={2}>
                            <Button variant='unstyled' colorScheme='coolGray' onPress={props.onClose} ref={props.cancelRef}>
                                Cancel
                            </Button>
                            <Button colorScheme='danger' onPress={confirm}>
                                Delete
                            </Button>
                        </Button.Group>
                    </AlertDialog.Footer>
                </AlertDialog.Content>
            </AlertDialog>
        </Center>
    )
}
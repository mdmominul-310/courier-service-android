/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Stack,
  Alert,
  IconButton,
  HStack,
  VStack,
  CloseIcon,
  Text,
  Center,
  NativeBaseProvider,
  Button,
  AlertDialog,
} from 'native-base';

function SuccessAlert(props) {
  const error = props.error;
  return (
    <Center>

      <AlertDialog leastDestructiveRef={props.cancelRef} isOpen={props.isOpen} onClose={props.onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Confirmation !</AlertDialog.Header>
          <AlertDialog.Body>
            Data Submitted succesfully!
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>

              <Button colorScheme='success' onPress={props.onClose}>
                Done
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
}

export default SuccessAlert;

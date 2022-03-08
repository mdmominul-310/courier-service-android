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
} from 'native-base';

function AlertWarning(props) {
  const error = props.error;
  return (
    <Center>
      <Stack space={3} w="90%" maxW="400">
        <Alert w="100%" status="error">
          <VStack space={2} flexShrink={1} w="100%">
            <HStack flexShrink={1} space={2} justifyContent="space-between">
              <HStack space={2} flexShrink={1}>
                <Alert.Icon mt="1" />
                <Text fontSize="md" color="coolGray.800">
                {error}
              </Text>
              </HStack>
              {/* <IconButton
                variant="unstyled"
                icon={<CloseIcon size="3" color="coolGray.600" />}
              /> */}
            </HStack>
          </VStack>
        </Alert>
      </Stack>
    </Center>
  );
}

export default AlertWarning;

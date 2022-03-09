/* eslint-disable react-native/no-inline-styles */
import {
  Box,
  Button,
  Center,
  FormControl,
  Input,
  Link,
  Stack,
  WarningOutlineIcon,
} from 'native-base';
import React, { useState } from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Lock from '../assets/lock.svg';
import AlertWarning from '../components/Shared/AlertWarning';
import UseAuth from '../Hooks/UseAuth';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signInWithEmail, error } = UseAuth();
  const handleSubmit = () => {
    signInWithEmail(email, password);
  };
  return (
    <Center>
      <Box w="100%" mt={5}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
            marginBottom: 40,
          }}>
          <Lock width={100} height={100} />
        </View>
        <FormControl isRequired>
          <Stack mx="4">
            <FormControl.Label>Email</FormControl.Label>
            <Input
              onChangeText={em => setEmail(em)}
              _light={{
                bg: 'coolGray.100',
              }}
              _dark={{
                bg: 'coolGray.800',
              }}
              _hover={{
                bg: 'coolGray.200',
              }}
              shadow={2}
              type="email"
              placeholder="Enter Your Email Address"
            />
            <FormControl.HelperText>Email Address</FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
          <Stack mx="4" mt={3}>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              onChangeText={pass => setPassword(pass)}
              _light={{
                bg: 'coolGray.100',
              }}
              _dark={{
                bg: 'coolGray.800',
              }}
              _hover={{
                bg: 'coolGray.200',
              }}
              shadow={2}
              type="password"
              placeholder="password"
            />
            <FormControl.HelperText>
              Must be atleast 6 characters.
            </FormControl.HelperText>
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}>
              Atleast 6 characters are required.
            </FormControl.ErrorMessage>
          </Stack>
          {error ? <AlertWarning error={error} /> : ''}
          <TouchableOpacity
            style={{
              padding: 20,
              width: '90%',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                color: 'blue',
                fontSize: 14,
              }}>
              Don't have account? Registration
            </Text>
          </TouchableOpacity>
          <Center>
            <Link href="https://www.alijahan.com/forgetpass">
              Forget password? click here to reset
            </Link>
          </Center>
          <Button
            shadow={2}
            onPress={handleSubmit}
            m={4}
            style={{ backgroundColor: 'green' }}>
            Login
          </Button>
        </FormControl>
      </Box>
    </Center>
  );
};

export default LoginScreen;

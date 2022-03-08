/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
    Box,
    Button,
    Center,
    FormControl,
    Icon,
    Input,
    Stack,
    WarningOutlineIcon,
} from 'native-base';
import React, { useState } from 'react';
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Lock from '../../assets/lock.svg';
import UseAuth from '../../Hooks/UseAuth';

const RegStepThree = (props) => {
    const navigation = props.navigation;
    const { error } = UseAuth();


    return (
        <Box w="100%" mt={5}>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 40, marginBottom: 40 }}>
                <Lock width={100} height={100} />
            </View>
            <FormControl isRequired>
                <Stack mx="4">
                    <FormControl.Label>Email</FormControl.Label>
                    <Input
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
                        defaultValue={props.email}
                        onChangeText={(text) => props.setEmail(text)}
                    />
                    <FormControl.HelperText>Email Address</FormControl.HelperText>
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Atleast 6 characters are required.
                    </FormControl.ErrorMessage>
                </Stack>
                {/* <AutoComplete item={item} setItem={setItem} /> */}
                <Stack mx="4" mt={3}>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input
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
                        defaultValue={props.password}
                        onChangeText={(text) => props.setPassword(text)}
                    />
                    <FormControl.HelperText>
                        Must be atleast 6 characters.
                    </FormControl.HelperText>
                    <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                        Atleast 6 characters are required.
                    </FormControl.ErrorMessage>
                </Stack>
                <TouchableOpacity
                    style={{
                        padding: 20,
                        width: '90%',
                        borderRadius: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}
                    onPress={() => navigation.navigate('Login')}>
                    <Text
                        style={{
                            color: 'blue',
                            fontSize: 14,
                        }}>
                        Already have account? Login
                    </Text>

                </TouchableOpacity>
                {
                    error && <Text
                        style={{
                            color: 'red',
                            fontSize: 14,
                        }}>
                        {error}
                    </Text>
                }

            </FormControl>
        </Box>
    );
};

export default RegStepThree;

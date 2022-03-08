import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Box, Center, CheckIcon, FormControl, ScrollView, Select } from 'native-base'

export default function OrderInfo(props) {
    return (
        <SafeAreaView>
            <Center>
                <Text>
                    Order Information
                </Text>
            </Center>
            <ScrollView>
                <FormControl margin={3} isRequired>
                    <FormControl.Label>
                        Select Product Catagory
                    </FormControl.Label>
                    <Box maxW="350" >
                        <Select selectedValue={props.catagory} minWidth="200" accessibilityLabel="Product Catagory" placeholder="Choose Product Catagory" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }} onValueChange={itemValue => props.setCatagory(itemValue)} borderColor='gray.600'>
                            <Select.Item label="Books" value="Books" />
                            <Select.Item label="Clothing" value="Clothing" />
                            <Select.Item label="Crafts" value="Crafts" />
                            <Select.Item label="Community" value="Community" />
                            <Select.Item label="E-commerce" value="E-commerce" />
                            <Select.Item label="Electronics & Gadgets" value="Electronics & Gadgets" />
                            <Select.Item label="Fashion Accessories" value="Fashion Accessories" />
                            <Select.Item label="Groceries" value="Groceries" />
                            <Select.Item label="Health & Fitness" value="Health & Fitness" />
                            <Select.Item label="Stationaries" value="Stationaries" />
                            <Select.Item label="Furniture" value="Furniture" />
                            <Select.Item label="Kids & mom" value="Kids & mom" />
                            <Select.Item label="Kids & mom" value="Kids & mom" />
                            <Select.Item label="Décor" value="Décor" />
                            <Select.Item label="Lights" value="Lights" />
                            <Select.Item label="Plants" value="Plants" />
                            <Select.Item label="Flowers" value="Flowers" />
                            <Select.Item label="Aquarium" value="Aquarium" />
                            <Select.Item label="Home Décor" value="Home Décor" />
                            <Select.Item label="Canvas" value="Canvas" />
                            <Select.Item label="OthersOthers" value="OthersOthers" />

                        </Select>
                    </Box>
                </FormControl>
                <FormControl margin={3} isRequired>
                    <FormControl.Label>
                        Product Weight
                    </FormControl.Label>
                    <Box maxW="350" >
                        {
                            props.sameCity ? <Select selectedValue={props.weight} minWidth="200" accessibilityLabel="Product Catagory" placeholder="Choose Product Catagory" _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size="5" />
                            }} onValueChange={itemValue => props.setWeight(itemValue)} borderColor='gray.600'>

                                <Select.Item label="Upto 1 kg" value="0" />
                                <Select.Item label="1 kg to 2 kg" value="20" />
                                <Select.Item label="2 kg to 3 kg" value="40" />
                                <Select.Item label="2 kg to 3 kg" value="60" />
                                <Select.Item label="4 kg to 5 kg" value="80" />
                            </Select> :
                                <Select selectedValue={props.weight} minWidth="200" accessibilityLabel="Product Catagory" placeholder="Choose Product Catagory" _selectedItem={{
                                    bg: "teal.600",
                                    endIcon: <CheckIcon size="5" />
                                }} onValueChange={itemValue => props.setWeight(itemValue)} borderColor='gray.600'>

                                    <Select.Item label="Upto 1 kg" value="0" />
                                    <Select.Item label="1 kg to 2 kg" value="30" />
                                    <Select.Item label="2 kg to 3 kg" value="50" />
                                    <Select.Item label="2 kg to 3 kg" value="70" />
                                    <Select.Item label="4 kg to 5 kg" value="90" />
                                </Select>
                        }

                    </Box>
                </FormControl>



            </ScrollView>
        </SafeAreaView>
    )
}
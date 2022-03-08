import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler';
import { Box, Center, Divider, Heading } from 'native-base';

export default function OrderDetailsScreen({ route }) {
  let data = route.params.item;
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Center>
            <Heading mx="3">
              Reciever Details
            </Heading>
          </Center>
          <Divider bg="emerald.500" thickness="2" />
          <View style={{ margin: 10 }}>
            <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Name:</Text>
              <Text>{data.recieverDetails.name}</Text>
            </Box>
            <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Delivery Area:</Text>
              <Text>{data.recieverDetails.deliveryArea}</Text>
            </Box>
            <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Phone Number:</Text>
              <Text>{data.recieverDetails.number}</Text>
            </Box>
            <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Address:</Text>
              <Text>{data.recieverDetails.address}</Text>
            </Box>
          </View>
        </View>
        <View style={{ marginTop: 10, marginBottom: 10 }}>
          <Center>
            <Heading mx="3">
              Order Summary
            </Heading>
          </Center>
          <Divider bg="emerald.500" thickness="2" />
          <View style={{ margin: 10 }}>
            <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Date:</Text>
              <Text>{data.orderSummaray.date}</Text>
            </Box>
            <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Delivery Charge:</Text>
              <Text>{data.orderSummaray.calcDCharge}</Text>
            </Box>
            <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Weight Charge:</Text>
              <Text>{data.orderSummaray.weightCharge}</Text>
            </Box>
            <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>COD:</Text>
              <Text>{data.orderSummaray.cod}</Text>
            </Box>
            <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Cash Collection:</Text>
              <Text>{data.orderSummaray.cashCollection}</Text>
            </Box>
            <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text>Payable Amount:</Text>
              <Text>{data.orderSummaray.payAbleAmout}</Text>
            </Box>

          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}
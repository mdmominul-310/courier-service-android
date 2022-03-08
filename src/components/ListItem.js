/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { windowWidth } from '../utils/Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeleteOrder from './Shared/DeleteOrder';


export default function ListItem({
  photo,
  title,
  subTitle,
  isFree,
  price,
  onPress,
  item
}) {
  // delete item state
  const [isOpen, setIsOpen] = React.useState(false);

  const onClose = () => setIsOpen(false);

  const cancelRef = React.useRef(null);
  return (

    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <DeleteOrder isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} cancelRef={cancelRef} item={item} />
      <TouchableOpacity onPress={onPress}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>

          <View style={{ width: windowWidth - 220 }}>
            <Text
              style={{
                color: '#333',
                fontFamily: 'Roboto-Medium',
                fontSize: 14,
              }}>
              {item.recieverDetails.name}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: '#333',
                fontFamily: 'Roboto-Medium',
                fontSize: 14,
                textTransform: 'uppercase',
              }}>
              {item.recieverDetails.number}

            </Text>
          </View>
        </View>
      </TouchableOpacity>


      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: '#0aada8',
          padding: 10,
          width: 100,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'Roboto-Medium',
            fontSize: 14,
          }}>
          {item.orderSummaray.status}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { }}>
        {item.orderSummaray.status === 'Pending' ? <Ionicons name="trash-outline" color="red" size={28} onPress={() => setIsOpen(!isOpen)} /> : <Ionicons name="walk-outline" color="green" size={28} />}
      </TouchableOpacity>
    </View>
  );
}

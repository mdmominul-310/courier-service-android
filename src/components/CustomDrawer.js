/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import UseAuth from '../Hooks/UseAuth';
import UseProfileImg from '../Hooks/UseProfileImg';
import { Avatar } from 'native-base';

const CustomDrawer = props => {
  const { logOut, user } = UseAuth();

  const profilepic = UseProfileImg();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#8200d6' }}>
        <ImageBackground
          source={require('../assets/images/menu-bg.jpeg')}
          style={{ padding: 20 }}>
          {
            profilepic.userImg ? <Image
              source={{
                uri: `data:image/jpeg;base64,${profilepic?.userImg}`,
              }}
              style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
            /> : <Avatar bg="green.500">
              AJ
            </Avatar>
          }

          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            {user?.displayName}
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 10,
              fontFamily: 'Roboto-Medium',
              marginBottom: 5,
            }}>
            {user?.email}
          </Text>
        </ImageBackground>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <TouchableOpacity onPress={logOut} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Ionicons name="exit-outline" size={22} />
            <Text
              style={{
                fontSize: 15,
                fontFamily: 'Roboto-Medium',
                marginLeft: 5,
              }}>
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

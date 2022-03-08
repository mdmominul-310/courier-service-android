import { Avatar, Box, Center, Divider, Heading } from 'native-base';
import React from 'react';
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import UseProfileImg from '../Hooks/UseProfileImg';
import UseSingleuser from '../Hooks/UseSingleUser';
import TabNavigator from '../navigation/TabNavigator';
import Ionicons from 'react-native-vector-icons/Ionicons';


const ProfileScreen = ({ navigation }) => {
  const profilepic = UseProfileImg();
  const { singleUser } = UseSingleuser();
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ margin: 10 }} >
          <Box>
            <Center>
              <Heading>Profile</Heading>
            </Center>
          </Box>
          <Divider bg="emerald.500" thickness="2" />
          <Box marginTop={3}>
            <Center>
              {profilepic.userImg ? <Image
                source={{
                  uri: `data:image/jpeg;base64,${profilepic?.userImg}`,
                }}
                style={{ height: 200, width: 200, borderRadius: 60, marginBottom: 10, marginTop: 10 }}
              /> : <Avatar bg="purple.600" alignSelf="center" size="2xl" >
                Aj
              </Avatar>}

            </Center>
          </Box>
          <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
            <Text>Name:</Text>
            <Text>{singleUser.name}</Text>
          </Box>
          <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Email:</Text>
            <Text>{singleUser.email}</Text>
          </Box>
          <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Number:</Text>
            <Text>{singleUser.number}</Text>
          </Box>
          <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Location:</Text>
            <Text>{singleUser.location}</Text>
          </Box>
          <Box style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Address:</Text>
            <Text>{singleUser.address}</Text>
          </Box>
        </View>

        <View>
          <Center>
            <TouchableOpacity onPress={() =>
              navigation.navigate('EditProfile', {
                title: 'Edit Profile'
              })
            }>
              <Ionicons name="create-outline" color='green' size={40} />
            </TouchableOpacity>
          </Center>

        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default ProfileScreen;

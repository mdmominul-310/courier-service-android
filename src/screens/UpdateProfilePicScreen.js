// Example of Image Picker in React Native
// https://aboutreact.com/example-of-image-picker-in-react-native/

// Import React
import { Avatar, Button, Center, Image } from 'native-base';
import React, { useState } from 'react';
// Import required components
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,

    Platform,
    PermissionsAndroid,
} from 'react-native';

// Import Image Picker
// import ImagePicker from 'react-native-image-picker';
import {
    launchImageLibrary
} from 'react-native-image-picker';
import SuccessAlert from '../components/Shared/SuccessAlert';
import UseAuth from '../Hooks/UseAuth';
import UseProfileImg from '../Hooks/UseProfileImg';

const ImageUpload = () => {
    const { user } = UseAuth();
    const [filePath, setFilePath] = useState({});
    let profilepic = UseProfileImg();
    // success modal state
    const [isOpen, setIsOpen] = React.useState(false);
    const onClose = () => setIsOpen(false);
    const cancelRef = React.useRef(null);


    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: 'Camera Permission',
                        message: 'App needs camera permission',
                    },
                );
                // If CAMERA Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                return false;
            }
        } else return true;
    };

    const requestExternalWritePermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs write permission',
                    },
                );
                // If WRITE_EXTERNAL_STORAGE Permission is granted
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.warn(err);
                alert('Write permission err', err);
            }
            return false;
        } else return true;
    };

    const chooseFile = (type) => {
        let options = {
            mediaType: type,
            maxWidth: 300,
            maxHeight: 550,
            quality: 1,
        };
        launchImageLibrary(options, (response) => {
            console.log('Response = ', response.assets[0]);

            if (response.didCancel) {
                alert('User cancelled camera picker');
                return;
            } else if (response.errorCode == 'camera_unavailable') {
                alert('Camera not available on device');
                return;
            } else if (response.errorCode == 'permission') {
                alert('Permission not satisfied');
                return;
            } else if (response.errorCode == 'others') {
                alert(response.errorMessage);
                return;
            }

            setFilePath(response?.assets[0]);

        });
    };
    console.log(filePath)
    const handleProfileImgUpload = () => {
        const formData = new FormData();
        formData.append('profile', {
            name: filePath.fileName,
            uri: filePath.uri,
            type: filePath.type
        })

        fetch(
            `https://www.alijahan.xyz/profile?email=${user?.email}`,
            {
                method: 'POST',
                body: formData,
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setIsOpen(!isOpen);

                }
            })
            .catch(error => console.log(error))
    }
    let baseimg = `data:image/jpeg;base64,${profilepic?.userImg}`
    let uri = `${filePath.uri ? filePath?.uri : baseimg}`
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Center>
                <View style={{ marginTop: 20 }} >
                    {/* <Image
                    source={{
                        uri: 'data:image/jpeg;base64,' + filePath.data,
                    }}
                    style={styles.imageStyle}
                    alt="some"
                /> */}
                    {profilepic.userImg ? <Image
                        source={{
                            uri: uri,
                        }}
                        style={{ height: 200, width: 200, borderRadius: 60, marginBottom: 10, marginTop: 10 }}
                        alt="Profile"
                    /> :
                        <Avatar bg="purple.600" alignSelf="center" size="2xl" source={{ uri: filePath.uri }}
                            alt="profile"
                        >
                            Aj
                        </Avatar>
                        // <Avatar
                        //     source={{ uri: filePath.uri }}
                        //     style={{ height: 200, width: 200, borderRadius: 60, marginBottom: 10, marginTop: 10 }}
                        //     alt="profile"
                        // >
                        //     AJ
                        // </Avatar >

                    }


                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.buttonStyle}
                        onPress={() => chooseFile('photo')}>
                        <Text style={styles.textStyle}>Choose Image</Text>
                    </TouchableOpacity>

                </View>
            </Center>
            <Center>
                <Button onPress={handleProfileImgUpload}>
                    save
                </Button>
            </Center>
            <SuccessAlert isOpen={isOpen} setIsOpen={setIsOpen} onClose={onClose} cancelRef={cancelRef} />

        </SafeAreaView>
    );
};

export default ImageUpload;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
    },
    textStyle: {
        padding: 10,
        color: 'black',
        textAlign: 'center',
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 5,
        marginVertical: 10,
        width: 250,
    },
    imageStyle: {
        width: 200,
        height: 200,
        margin: 5,
    },
});
// Example of Searchable Dropdown / Picker in React Native
// https://aboutreact.com/example-of-searchable-dropdown-picker-in-react-native/

// import React in our code
import { Box } from 'native-base';
import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

//import SearchableDropdown component
import SearchableDropdown from 'react-native-searchable-dropdown';
import UseLocation from '../../Hooks/Android/UseLocation';


const AutoComplete = (props) => {
    // const [item, setItem] = useState({ id: 'dkfdk', name: 'Delivery Area' });
    const { location } = UseLocation()
    let item = props.item;
    let setItem = props.setItem;
    return (
        <SafeAreaView >
            {/* <View style={styles.container}> */}
            <Text style={styles.headingText}>
                Area
            </Text>
            <SearchableDropdown
                onTextChange={(text) => console.log(text)}
                //On text change listner on the searchable input
                onItemSelect={(item) => setItem(item)}
                //onItemSelect called after the selection from the dropdown
                containerStyle={{ padding: 5 }}
                //suggestion container style
                textInputStyle={{
                    //inserted text style
                    padding: 12,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    backgroundColor: '#FAF7F6',
                }}
                itemStyle={{
                    //single dropdown item style
                    padding: 10,
                    marginTop: 2,
                    backgroundColor: '#FAF9F8',
                    borderColor: '#bbb',
                    borderWidth: 1,
                }}
                itemTextStyle={{
                    //text style of a single dropdown item
                    color: '#222',
                }}
                itemsContainerStyle={{
                    //items container style you can pass maxHeight
                    //to restrict the items dropdown hieght
                    maxHeight: '60%',
                }}
                items={location}
                //mapping of item array
                // defaultIndex={1}
                //default selected item index
                placeholder={item?.name}
                //place holder for the search input
                resetValue={false}
                //reset textInput Value with true and false state
                underlineColorAndroid="transparent"
            //To remove the underline from the android input
            />

            {/* </View> */}
        </SafeAreaView >
    );
};

export default AutoComplete;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    titleText: {
        padding: 8,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    headingText: {
        padding: 8,
    },
});

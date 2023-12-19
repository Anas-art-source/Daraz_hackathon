import { StyleSheet, Text, View ,TextInput, Pressable} from 'react-native'
import React, {useState} from 'react'
import { Icon } from 'react-native-elements'

const SearchScreen = ({navigation}) => {
    const [text, setText] = useState('');

  const handleInputChange = (inputText) => {
    setText(inputText);
  };

  const handleButtonPress = () => {
    Alert.alert('Entered Text', text);
  };
  return (
    <View
    style={{
        marginTop: 34
    }}
    >
    <View style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems:'center'
    }}>

    <Icon name='arrow-back-ios'  type='material-icons' color='grey' size={20}/>
    <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', borderColor: 'orange', borderWidth: 1, borderRadius: 5 }}>
      <Icon name="search" size={25} color="gray" style={{ marginHorizontal: 5}} />
      <TextInput
        style={{
          height: 26,
          flex: 1, // Take up the available space
          paddingLeft: 2,
        }}
        placeholder="Search in Daraz"
        onChangeText={handleInputChange}
        value={text}
      />
    </View>
        
        <Pressable onPress={() => navigation.navigate('ProductListing')}><Text style={{color: 'orange', marginLeft: 7, fontWeight: 600}}>Search</Text></Pressable>
      </View>

        <View style={{}}>
            <View style={{flexDirection: 'row', marginTop: 10, justifyContent: 'space-between',marginHorizontal: 10}}>
                <Text style={{fontSize: 15}}>Search History</Text>
                <Icon name="delete" size={25} color="gray" style={{ marginHorizontal: 5}} />
            </View>
        </View>

    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
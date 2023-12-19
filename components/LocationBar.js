import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

const LocationBar = () => {
  return (
    <View style={styles.container}>
        <View style={styles.location_search}>
        <Icon name="location-on" size={14} color="orange" style={styles.icon}/>
        <Text style={styles.vertical_bar}>|</Text>
        <Text style={styles.location_text}>Set your delivery location</Text>

        </View>
    </View>
  )
}

export default LocationBar

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: -50,
        position: 'absolute',
        bottom: 5,
        width: '100%',
        // backgroundColor: '#Ffc290'
    },
    location_search: {
        backgroundColor: 'white',
        width: '90%',
        textAlignVertical: 'center',
        justifyContent: "flex-start",
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        borderRadius: 4
    },
    icon: {
        marginHorizontal: 4
    },
    vertical_bar: {
        marginHorizontal: 4,
        color:'grey' 
    },
    location_text: {
        color: 'grey',
        fontSize: 12,
        marginHorizontal: 4
    }  
})
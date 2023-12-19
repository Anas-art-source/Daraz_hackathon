import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Icon } from 'react-native-elements';


const SearchBar = ({onPress}) => {
  return (
        <View style={{...styles.container}}>
        <View>
        <MaterialIcons name="qr-code-scanner" size={15} color="black"  style={styles.icon}/>
        <Text style={styles.text_scan}>Scan</Text>
        </View>
            <Pressable style={styles.searchBox} onPress={onPress}>
            <Icon name="search" size={24} color="grey" />
            <Text style={styles.text_search}>Search</Text>
        </Pressable>
        <View style={styles.icon_set}>
            <Icon name='monetization-on'  type='material-icons' color='#f59b42' size={15}/>
            <Text style={styles.text_scan}>Coins</Text>
        </View>

        <View>
            <Icon name='wallet'  type='antdesign' color='#f59b42' size={15} color="black"/>
            <Text style={styles.text_scan}>Wallet</Text>
        </View>

        </View>

  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 10,
        marginTop: 25,
        flexDirection: 'row',
      },
    text: {
        color: "red",
        fontSize: 1000
    },
    icon: {
        margin: 2
    },
    searchBox: {
        marginHorizontal: 5,
        backgroundColor: 'lightgrey',
        width: '75%',
        borderRadius: 3,
        padding: 10,
        paddingVertical: 2,
        flexDirection: 'row',
        alignItems: 'center',
        height: 30,
        
    },
    text_scan: {
        fontSize: 10,
        textAlign: 'center',
        verticalAlign: 'top'
    },
    searchbar_internal: {
        flexDirection: 'row'
    },
    icon_set: {
        marginHorizontal: 3
    },
    text_search: {
        fontSize: 12
    }
})
import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'

function ProductCardChoice ({source, price, old_price, review, sold})
  {
  
    return (
      <View style={{width: 150, backgroundColor: 'white', padding:10}}>
        <View style={{width: '100%', height: '65%', backgroundColor: 'lightgrey', borderRadius: 4}}>
          <Image source={source} style={{resizeMode: 'contain', width:'100%', height: '100%'}}/>
        </View>
  
      <View style={{flexDirection: 'row', alignItems:'baseline'}}>
      <Text style={{color: 'orange'}}>{price}</Text>
      <Text style={{textDecorationLine: 'line-through', fontSize: 10, marginLeft: 10, color:'grey' }}>{old_price}</Text>
      </View>
  
  
      <View style={{flexDirection: 'row', alignItems:'baseline'}}>
      <Icon name="star" size={10} color="orange" style={styles.icon}/>
      <Text style={{color: 'grey', fontSize: 10, marginLeft: 5}}>{review}</Text>
      <Text style={{ fontSize: 10, marginLeft: 10 }}>|</Text>
      <Text style={{ fontSize: 10, marginLeft: 10, color: 'grey' }}>{sold}</Text>
      </View>
      </View>
    )
  }
  
export default ProductCardChoice

const styles = StyleSheet.create({})
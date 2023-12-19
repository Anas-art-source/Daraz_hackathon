import { StyleSheet, Text, View, FlatList, Image, ScrollView, Animated } from 'react-native'
import SearchBar from '../components/SearchBar'
import SliderHero from '../components/SliderHero'
import LocationBar from '../components/LocationBar'
import { Icon } from 'react-native-elements'
import ProductCardChoice from '../components/ProductCardChoice'
import React, { useRef } from 'react';


const data = [
  { source: require('../resources/category_1.png'), title: 'Mart' },
  { source: require('../resources/category_2.png'), title: 'Fashion' },
  { source: require('../resources/category_beauty.png'), title: 'Beauty' },
  { source: require('../resources/category_freeDelivery.png'), title: 'Free \nDelivery' },
  { source: require('../resources/category_sns.png'), title: 'Subscribe &\n Save' },
  { source: require('../resources/category_home.png'), title: 'Home & \n Decor' },
  { source: require('../resources/category_flashsale.png'), title: 'Flash Sale' },
  { source: require('../resources/category_1212.png'), title: 'Shop Now' },
  { source: require('../resources/category_1212.png'), title: 'Shop Now' },
  { source: require('../resources/category_1212.png'), title: 'Shop Now' },
 
];

const choice_data = [
  { source:  require('../resources/choice_1.jpg'), price: 'Rs 500', old_price: 'Rs 800', review: "4.5/5 (6K)", sold: '12K sold', id: 1 },
  { source: require('../resources/choice_2.jpg'), price: 'Rs 800', old_price: 'Rs 1200', review: "4.3/5 (11K)", sold: '16K sold', id: 2 },
  { source: require('../resources/choice_3.jpg'), price: 'Rs 500', old_price: 'Rs 800', review: "4.1/5 (12K)", sold: '20K sold', id: 3 },
]

const HomeScreen = ({navigation}) => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const headerBackgroundColor = scrollY.interpolate({
    inputRange: [0, 1], // Adjust the range as needed
    outputRange: ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)'], // Transparent to white
    extrapolate: 'clamp',
  });
  return (
    <View style={{ flex: 1, backgroundColor: '#dadada' }}>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 50, // Adjust the height of your sticky header
          zIndex: 1000, // Make sure it's above other components
          backgroundColor: headerBackgroundColor,
          transform: [
            {
              translateY: scrollY.interpolate({
                inputRange: [0, 50], // Adjust the range as needed
                outputRange: [0, -50], // Adjust the offset as needed
                extrapolate: 'clamp',
              }),
            },
          ],
        }}
      > 

        <SearchBar onPress={() => navigation.navigate('Search')}/>


      </Animated.View>
    <ScrollView
    >

      <View style={styles.main_head}>

      <SliderHero/>
      <LocationBar />
      </View>

      <View style={styles.mainpage_body}>
        <View style={{flexWrap: 'wrap', flexDirection: 'row', width: '100%', flexWrap: 'wrap', alignContent: 'center', justifyContent: 'center'}}>

        <FlatList
  data={data}
  horizontal
  contentContainerStyle={{width: '100%', flexWrap: 'wrap'}}
  renderItem={({ item }) => (
    <View style={{ flexDirection: 'column', alignItems: 'centers', justifyContent: 'center', marginHorizontal: 15, marginVertical: 5}}>
    <Image source={item.source} style={{ width: 40, height: 40, borderRadius: 5 }} />
        <Text style={{ fontSize: 8, textAlign: 'center'}}>{item.title}</Text>
  </View>
  )}
/>


</View>
<View style={{width: '100%', height: 150}}>
<Image
  source={require('../resources/1212_gif.gif')}
  style={{ width: "100%", height: '100%', resizeMode: "cover"}}
/>
</View>

<View style={{width: '90%', height: 250, alignSelf: 'center', borderRadius: 8, marginTop: -70}}>
    <View style={{width: '100%', backgroundColor:'#ebe89a', borderTopLeftRadius: 8, borderTopRightRadius: 8, flexDirection: 'row', padding: 10, flexBasis:'auto'}}>
        <View>
          <View style={{flexDirection: 'row'}}>
              <Icon name="shopping-cart" size={20} color="orange" style={styles.icon}/>
              <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal:  5}}>Any 3 from Rs. 1599 *</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 12}}>* Rs 1800 ss for Repeat orders | Free Delivery</Text>
          </View>
        </View>

        <View  style={{justifyContent: 'center', flexGrow: 1}}>
          <View style={{borderColor: 'orange', borderWidth: 1, padding: 3, paddingHorizontal: 6, borderRadius: 2, alignSelf: 'center'}}>
            <Text style={{fontSize: 10}}>See More</Text>
          </View>
        </View>
    </View>

    <FlatList
  data={choice_data}
  horizontal
  renderItem={({ item }) => (
    <ProductCardChoice source={item.source} price={item.price} old_price={item.old_price} review={item.review} sold={item.sold}/>
  )}
  keyExtractor={(item) => item.id}
/>
    
    
</View> 



      </View>
    </ScrollView>
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  mainpage_body: {
    height: 10000,
    backgroundColor: '#dadada',
    // alignItems: 'center'
  }
})
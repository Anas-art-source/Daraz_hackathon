import { StyleSheet, Text, View, TextInput, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'


const ProductCard  = ({source, title1, title2, price, old_price, review, sold, onPress}) => {


    return (
        <Pressable 
        android_ripple={{ color: 'rgba(0, 0, 0, 0.1)' }}
        onPress={onPress}
        style={{
            width: "47%",
            backgroundColor: 'white',
            borderRadius: 5,
            marginVertical: 3
        }}>
            <View style={{
                height: 140, fontSize: 12,
                borderTopRightRadius: 5,
                borderTopLeftRadius: 5
            }}>

            <Image 
                source={source}
                style={{
                    width:'100%',
                    resizeMode: 'contain',
                    height: '100%'
                }}
            
            />
            </View>
            <View style={{
                flexDirection: 'row',
                padding: 4,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Image source={require('../resources/productListing_mall.png')}
                style={{
                    width: 25,
                    height: 25
                }}
            
            />
            <Text style={{fontSize: 12}}>{title1} </Text>

            </View>
            <Text style={{fontSize: 12, marginTop: -6, paddingHorizontal: 8}}>{title2}</Text>

            <View style={{flexDirection: 'row', alignItems:'center', marginLeft: 5}}>
                <Icon name="star" size={15} color="orange" style={styles.icon}/>
                <Text style={{color: 'grey', fontSize: 10, marginLeft: 5}}>{review}</Text>
                <Text style={{ fontSize: 10, marginLeft: 10 }}>|</Text>
                <Text style={{ fontSize: 10, marginLeft: 10, color: 'grey' }}>{sold}</Text>
            </View>
            <View style={{
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderColor:'green',
                borderWidth: 0.5,
                width: "45%",
                marginHorizontal: 5,
                marginVertical: 5

            }}>
                <Text style={{
                    fontSize: 10,
                    color: 'green'
                }}>Free Delivery</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems:'baseline',marginHorizontal: 5, marginVertical: 10}}>
                <Text style={{color: 'darkorange', fontWeight: 'bold'}}>Rs {price}</Text>
                <Text style={{textDecorationLine: 'line-through', fontSize: 10, marginLeft: 10, color:'grey' }}>Rs {old_price}</Text>
            </View>

        </Pressable>
    )
};

const ProductListing = ({navigation}) => {
  return (
    <View
    style={{
        marginTop: 34
    }}
    >
    <View style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems:'center',
        justifyContent: 'space-evenly'
    }}>

    <Icon name='arrow-back-ios'  type='material-icons' color='grey' size={20}/>
    <Pressable style={{ flexDirection: 'row', alignItems: 'center', width: '70%', borderColor: 'orange', borderWidth: 1, borderRadius: 5 }}>
      <Icon name="search" size={25} color="gray" style={{ marginHorizontal: 5}} />
      <Text
        style={{
          flex: 1, // Take up the available space
          paddingLeft: 2,
          color: 'grey'        
        }}
      >pet food</Text>
    </Pressable>

    <Icon name='shopping-cart'  type='material-icons-outlined' color='grey' size={20}/>
    <Icon name='filter-alt'  type='material-icons-outlined' color='grey' size={20}/>
      </View>


      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10}}>
        <View style={{
            width: 75,
            height: 60,
            borderColor: 'grey',
            borderWidth: 0.5,
            borderRadius: 5,
            justifyContent: 'center', // Center vertically
            alignItems: 'center', // Center horizontally
        }}>
                <Image source={require('../resources/productListing_freeshipping.png')} style={{resizeMode: 'contain', width:'40%', height: '40%'}}/>

            <Text style={{fontSize: 9}}>Free Delivery</Text>
        </View>
        <View style={{
            width: 75,
            height: 60,
            borderColor: 'grey',
            borderWidth: 0.5,
            borderRadius: 5,
            justifyContent: 'center', // Center vertically
            alignItems: 'center', // Center horizontally
        }}>
                <Image source={require('../resources/productListing_DarazVerified.png')} style={{resizeMode: 'contain', width:'40%', height: '40%'}}/>

            <Text style={{fontSize: 9}}>Daraz Verified</Text>
        </View>
        <View style={{
            width: 75,
            height: 60,
            borderColor: 'grey',
            borderWidth: 0.5,
            borderRadius: 5,
            justifyContent: 'center', // Center vertically
            alignItems: 'center', // Center horizontally
        }}>
                <Image source={require('../resources/productListing_mall.png')} style={{resizeMode: 'contain', width:'40%', height: '40%'}}/>

            <Text style={{fontSize: 9}}>Authentic</Text>
            <Text style={{fontSize: 9}}>Brands</Text>

        </View>
        <View style={{
            width: 75,
            height: 60,
            borderColor: 'grey',
            borderWidth: 0.5,
            borderRadius: 5,
            justifyContent: 'center', // Center vertically
            alignItems: 'center', // Center horizontally
        }}>
                <Image source={require('../resources/productListing_bestPrice.png')} style={{resizeMode: 'contain', width:'40%', height: '40%'}}/>

            <Text style={{fontSize: 9}}>Best Price</Text>
            <Text style={{fontSize: 9}}>Guaranteed</Text>

        </View>
      </View>

      <ScrollView
      horizontal
      contentContainerStyle={{justifyContent:'space-evenly', marginLeft:7, marginTop: 4}}
      showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      showsHorizontalScrollIndicator={false} // Hide horizontal scrollbar
      >

        <View style={{flexDirection: 'row', padding: 3, backgroundColor: 'lightgrey', borderRadius: 5, margin: 3}}>
        <Icon name='swap-vert'  type='material-icons-outlined' color='grey' size={15}/>
        <Text style={{fontSize: 12}}>Sort By</Text>
        <Icon name='expand-more'  type='material-icons-outlined' color='grey' size={15}/>

        </View>


        <View style={{flexDirection: 'row', padding: 3, paddingHorizontal:5, backgroundColor: 'lightgrey', borderRadius: 5, margin: 3}}>
        <Text style={{fontSize: 12}}>Brand</Text>
        <Icon name='expand-more'  type='material-icons-outlined' color='grey' size={15}/>

        </View>


        <View style={{flexDirection: 'row', padding: 3, paddingHorizontal:5, backgroundColor: 'lightgrey', borderRadius: 5, margin: 3}}>
        <Text style={{fontSize: 12}}>Recommended gender</Text>
        <Icon name='expand-more'  type='material-icons-outlined' color='grey' size={15}/>

        </View>


        <View style={{flexDirection: 'row', padding: 3, paddingHorizontal:5, backgroundColor: 'lightgrey', borderRadius: 5, margin: 3}}>
        <Text style={{fontSize: 12}}>Express Delivery</Text>
        <Icon name='expand-more'  type='material-icons-outlined' color='grey' size={15}/>

        </View>


      </ScrollView>

    <View style={{
        width: '100%',
        backgroundColor: 'lightgrey',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    }}>

        <ProductCard 
            source={require('../resources/catfood_1.jpg')} 
            title1="Fluffy Cat Food Pack of" 
            title2="2 (1.2KG + 1.2KG)" 
            price="1819" 
            old_price="2100"
            review="4.5/5 (4K)"
            sold="7K"
            onPress={() => navigation.navigate("PDP")}
           />

        <ProductCard 
            source={require('../resources/catfood_2.jpg')} 
            title1="K9 Adult dog food -    " 
            title2="Farmland 10Kg" 
            price="6800" 
            old_price="7000"
            review="4.6/5 (1K)"
            sold="3K"
            />

        <ProductCard 
            source={require('../resources/catfood_3.jpg')} 
            title1="feline cat food pack of" 
            title2="2 (1.2kg+1.2kg)" 
            price="1450" 
            old_price="1600"
            review="4.2/5 (5K)"
            sold="9K"
            />

<ProductCard 
            source={require('../resources/catfood_4.jpg')} 
            title1="Nourvet Cat Food – 1 KG" 
            title2="" 
            price="1150" 
            old_price="1200"
            review="4.0/5 (5K)"
            sold="4K"
            />

<ProductCard 
            source={require('../resources/catfood_5.jpg')} 
            title1="Nourvet Cat Food – 1 KG" 
            title2="" 
            price="1150" 
            old_price="1200"
            review="4.0/5 (5K)"
            sold="4K"
            />
<ProductCard 
            source={require('../resources/catfood_6.jpg')} 
            title1="Nourvet Cat Food – 1 KG" 
            title2="" 
            price="1150" 
            old_price="1200"
            review="4.0/5 (5K)"
            sold="4K"
            />




    </View>
      

    </View>
  )
}

export default ProductListing

const styles = StyleSheet.create({})
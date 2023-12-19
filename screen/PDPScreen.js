import { StyleSheet, Text, View, Pressable, Image, TouchableOpacity,ScrollView,   KeyboardAvoidingView, TextInput} from 'react-native'
import React, {useState} from 'react'
import { Icon } from 'react-native-elements'
import Modal from 'react-native-modal';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FlatList } from 'react-native-gesture-handler';




const BundleUI = ({name, image, quantity}) => {
  const [isPressed, setPressed] = useState(false);
  

  const handlePress = () => {
    setPressed(!isPressed);
  };

  return (
    <Pressable 
    onPress={handlePress}

    style={{
      width: 120,
      height: '100%',
      marginHorizontal: 5,
      borderRadius: 5,
      borderWidth: isPressed ? 2 : 1,
      borderColor: isPressed ? 'darkorange' : 'lightgrey'
    }}>
      <View >
        <View style={{
          width: '100%',
          height: '85%',
          backgroundColor: 'pink',
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}>
           <Image 
            source={image}
            style={{width: '100%', height: '100%'}}
        />

              <View style={{
               position: 'absolute',
               top: 5,
               right: 5,
               paddingHorizontal: 9,
               paddingVertical: 4,
               backgroundColor: 'orange',
               borderRadius: 1000
              }}>
                <Text style={{
                  fontSize: 12,
                  fontWeight: 'bold'
                }}>{isPressed ? quantity+1: quantity}</Text>
              </View>

        </View>
        <Text style={{
          fontSize: 12,
          textAlign: 'center',
        }}>{name}</Text>
      </View>

    </Pressable>
  )
}


const ModalBundleUI = ({navigation}) => {

  const [quantity, setQuantity]  = useState(1)

  

  const incrementQuantity = () => {
    setQuantity(quantity+1);
  };

  const decrementQuantity = () => {
    setQuantity(quantity-1);
  };


  return (
    
    <View style={{backgroundColor:'white'}}>
      <View style={{
        // backgroundColor:'white',lightgreyee/
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
      }}>
      <Text 
        style={{
          fontSize: 20,
          padding: 6
        }}
      >Subscribe & Save!</Text>
      </View>

      <View style={{
        marginTop: 10,
        marginBottom: 2,
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Text style={{fontSize: 15}}>Quantity</Text>

        <View style={{
          flexDirection: 'row'
        }}>
          <Pressable 
          onPress={incrementQuantity}
          style={{
            padding: 1,
            borderColor: 'grey',
            borderWidth:1
          }}>
            <Icon name='add'  type='material-icons-outlined' color='grey' size={20} style={{marginHorizontal: 3}}/>
          </Pressable>
          <View style={{
            padding: 2,
            paddingHorizontal: 17,
            borderColor: 'grey',
            borderWidth:1,
            borderRightWidth: 0,
            borderLeftWidth: 0
          }}>
            <Text>{quantity}</Text>
          </View>
          <Pressable 
          onPress={decrementQuantity}
          style={{
            padding: 1,
            borderColor: 'grey',
            borderWidth:1
          }}>
            <Icon name='remove'  type='material-icons-outlined' color='grey' size={20} style={{marginHorizontal: 3}}/>
          </Pressable>
        </View>
      </View>

      <View style={{height: '60%'}}>
        <Text style={{
          fontSize: 12,
          marginTop: 5
        }}>Existing Packs</Text>

        <View style={{
          flexDirection: 'row',
          width: '100%',
          height: '80%',
      
          paddingVertical: 7
        }}>
          <ScrollView
          horizontal
          scrollEnabled
          style={{
            width:'100%',
          }}
          >
            <BundleUI  name="Luna Monthly" image={require('../resources/product_1.png')} quantity={2}/>
            <BundleUI  name="Monthly Groceries" image={require('../resources/product_2.png')} quantity={8}/>
          </ScrollView>

        </View>
      </View>

      <View style={{
        // backgroundColor: 'yellow',
        width: '100%',
        height: "25%",
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: "flex-start"
        // marginTop: -0
      }}>
        <Pressable 
        onPress={() => navigation.navigate('createBundle')}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          backgroundColor: 'darkorange',
          borderRadius: 5
        }}><Text>Create new bundle</Text></Pressable>
      </View>

      </View>
  )
}


const ModelCreateBundle = () => {
  const [textInputValue, setTextInputValue] = useState('');

  const [schButton, setschButton] = useState(false)


  const handleschButton = () => {
    setschButton(!schButton)
  }

  const handleTextInputFocus = () => {
    // You can add additional logic here if needed
    console.log('Text input focused');
  };

  return (
    <View style={{
      backgroundColor: 'white',
      height: '100%',
      width: '100%'
    }}>
      <View style={{
        // backgroundColor:'white',lightgreyee/
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
      }}>
      <Text style={{
          fontSize: 20,
          padding: 6
        }}>Create Bundle</Text>
      </View>

      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={{
        paddingVertical: 10,
        paddingHorizontal: 5
      }}>
        <View style={{}}>
          {/* Text Input */}
          <TextInput
            style={{width: '80%', borderBottomWidth: 1, borderBottomColor: 'grey'}}
            placeholder="Enter Bundle Name "
            value={textInputValue}
            onChangeText={(text) => setTextInputValue(text)}
            onFocus={handleTextInputFocus}
          />


          <Text style={{
            marginTop: 10
          }}>Select Schedule</Text>
          <View style={{
            flexDirection: 'row',
            marginTop: 6
          }}>

          <Pressable 
          
            onPress={handleschButton}
            style={{
            paddingHorizontal: 5,
            paddingVertical: 3,
            borderColor: schButton ? 'orange': 'grey',
            borderWidth: schButton ? 2: 1,
            marginHorizontal: 4,
            borderRadius: 5
          }}>
            <Text style={{
              color: schButton ? 'orange': 'black',
            }}>
                1st of every month
            </Text>
          </Pressable>

          <Pressable style={{
            paddingHorizontal: 5,
            paddingVertical: 3,
            borderColor: 'grey',
            borderWidth: 0.5,
            marginHorizontal: 4,
            borderRadius: 5
          }}>
            <Text>
                15th of every month
            </Text>
          </Pressable>
          </View>
          

          <View style={{
              justifyContent: 'flex-end',
              flexDirection: 'row',
              marginTop: 20
          }}>

          <TouchableOpacity style={{
            paddingHorizontal: 10,
            paddingVertical: 3,
            backgroundColor: 'darkorange',
            borderRadius: 5
          }}>
            <Text style={{
              color: 'white'
            }}>Submit</Text>
          </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </KeyboardAvoidingView>

    </View>
  )
}

 

const PDPScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const ModalStack = createNativeStackNavigator();

  const [isForward, setIsForward] = useState(false)

  const handleModalPress = () => {
    setIsForward(!isForward)
  }


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{backgroundColor:'white'}}>
        <View
    style={{
        marginTop: 34,
        backgroundColor: 'white'
    }}
    >
    <View style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems:'center',
        justifyContent: 'space-evenly'
    }}>

    <Icon name='arrow-back-ios'  type='material-icons' color='grey' size={20}/>
    <Pressable style={{ flexDirection: 'row', alignItems: 'center', width: '60%', backgroundColor: 'lightgrey', borderRadius: 5 }}>
      <Icon name="search" size={25} color="gray" style={{ marginHorizontal: 5}} />
      <Text
        style={{
          flex: 1, // Take up the available space
          paddingLeft: 2,
          color: 'grey'        
        }}
      >search</Text>
    </Pressable>

    <Icon name='share'  type='material-icons-outlined' color='grey' size={20}
        style={{marginHorizontal: 3}}
        />
    <Icon name='filter-alt'  type='material-icons-outlined' color='grey' size={20} style={{marginHorizontal: 3}}/>
    <Icon name='more-horiz'  type='material-icons-outlined' color='grey' size={20} style={{marginHorizontal: 3}}/>

      </View>
      </View>

      <View style={{width: '100%', height: 350, backgroundColor: 'red', marginTop: 5}}>
        <Image 
            source={require('../resources/catfood_1.jpg')}
            style={{width: '100%', height: '100%'}}
        />
        <View
            style={{
                justifyContent:'center',
                alignItems: 'center'
            }}
        >
            <View style={{
                padding:3,
                backgroundColor:'grey',
                width: 40,
                borderRadius: 100,
                justifyContent:'center',
                alignItems: 'center',
                marginTop: -50
            }}>
                <Text style={{
                    color: 'white'
                }}>
                1/6
                </Text></View>
        </View>
      </View>
        
    <View style={{
        width:'100%',
        backgroundColor: '#ebeff5',
        justifyContent: 'center',
        alignItems: 'center'
    }}>

      <View style={{
        width: '90%',
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 8

      }}>
        <Text style={{marginHorizontal:5}}>Fluffy Cat Food Pack of 2 (1.2KG+1.2KG)</Text>

        <View style={{flexDirection: 'row', alignItems:'baseline',marginHorizontal: 9, marginVertical: 10}}>
                <Text style={{fontSize:18, fontWeight: 'bold'}}>Rs 1800</Text>
                <Text style={{textDecorationLine: 'line-through', fontSize: 10, marginLeft: 10, color:'grey' }}>Rs 2100</Text>
                <Text style={{ fontSize: 14, marginLeft: 10, color:'grey'}}>-13%</Text>
                <View style={{
                  marginLeft: 40
                }}>
                  <TouchableOpacity 
                  onPress={toggleModal}
                  style={{
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    borderRadius: 5,
                    backgroundColor: 'darkorange'
                  }}>
                    <Text style={{
                      color: 'white',
                      fontSize: 10
                    }}>Subscribe & Save!</Text>
                  </TouchableOpacity>
                </View>
        </View>

        <View style={{flexDirection: 'row',  justifyContent: 'flex-start', alignItems:'center',marginHorizontal: 5, borderRadius: 5, borderWidth:0.5, borderColor: 'lightgrey', padding: 7}}>
        <Image 
            source={require('../resources/productListing_bestPrice.png')}
            style={{width: 20, height: 20}}
        />
        <View style={{
            marginLeft: 10
        }}>
            <Text style={{
                color:'darkorange',
                fontWeight: 'bold'
            }}>
                Best Price Guaranteed by Daraz
            </Text>
            <Text style={{
                color:'grey',
                fontWeight: 'normal',
                fontSize: 10
            }}>
                Found a cheaper option? Get your money back!
            </Text>
        </View>

        <View style={{marginLeft: 23}}>

        <Icon name='info'  type='material-icons-outlined' color='grey' size={20} style={{marginHorizontal: 3}}/>
        </View>

        </View>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10

        }}>
          <View style={{
            backgroundColor: '#fe9b33',
            flexDirection: 'row',
            alignItems: 'center',
            width: '25%',
            padding: 3,
            borderRadius: 4
          }}>
          <Icon name='star'  type='material-icons-outlined' color='white' size={12} style={{marginHorizontal: 3}}/>
          <Text style={{
            color: 'white',
            fontSize: 10
          }}>Top Rated</Text>

          </View>
          <View style={{
            marginLeft: 5
          }}>
            <Text>
              4.7/5 (548)
            </Text>
          </View>
          <Icon name='chevron-right'  type='material-icons-outlined' color='grey' size={23} style={{marginHorizontal: 3}}/>
          <View>
            <Text>
              5K Sold
            </Text>
          </View>

          <View style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            marginLeft: 20
          }}>
          <Icon name='favorite-border'  type='material-icons-outlined' color='grey' size={16} style={{marginHorizontal: 3}}/>

            <Text>
              221
            </Text>
          </View>


        </View>

       
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10

        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 3,
            borderRadius: 4
          }}>
          <Icon name='question-answer'  type='material-icons-outlined' color='grey' size={15} style={{marginHorizontal: 3}}/>


          </View>
          <View style={{
            marginLeft: 5
          }}>
            <Text>
              39 product question and answers.
            </Text>
          </View>


          <View style={{
            alignSelf: 'flex-end',
            marginLeft: 30
          }}> 

          <Icon name='chevron-right'  type='material-icons-outlined' color='grey' size={23} style={{marginHorizontal: 3}}/>
          </View>
        </View>



        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10

        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 3,
            borderRadius: 4
          }}>
          <Icon name='web'  type='material-icons-outlined' color='grey' size={15} style={{marginHorizontal: 3}}/>


          </View>
          <View style={{
            marginLeft: 5
          }}>
            <Text style={{
              fontWeight: 'bold'
            }}>
              Karahi Pet Fo...
            </Text>
          </View>

          <View style={{
            backgroundColor: 'lightgrey',
            padding: 5,
            borderRadius: 5
          }}>
            <Text style={{
              fontSize: 12
            }}>
              92% Positive Review
            </Text>
          </View>


          <View style={{
            alignSelf: 'flex-end',
            marginLeft: 25
          }}> 

          <Icon name='chevron-right'  type='material-icons-outlined' color='grey' size={23} style={{marginHorizontal: 3}}/>
          </View>
        </View>


        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10

        }}>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 3,
            borderRadius: 4
          }}>
          <Icon name='emoji-events'  type='material-icons-outlined' color='#fe9b33' size={15} style={{marginHorizontal: 3}}/>


          </View>
          <View style={{
            marginLeft: 5
          }}>
            <Text style={{
              color: '#fe9b33'
            }}>
              Top 5 Product in Cat Dry Food!
            </Text>
          </View>


          <View style={{
            alignSelf: 'flex-end',
            marginLeft: 50
          }}> 

          <Icon name='chevron-right'  type='material-icons-outlined' color='#fe9b33' size={23} style={{marginHorizontal: 3}}/>
          </View>
        </View>

        

        


      </View>

      </View>
        
      {/* Subscription Modal */}
      {isModalVisible && 
      
      <Pressable
        // isVisible={isModalVisible}
        onPress={toggleModal}
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', width:'100%', height: '110%', top:0, bottom:0}}
      >
        <View style={{
          flex: 1,
        justifyContent: 'flex-end',
        // backgroundColor:
         

      }}>
            <View style={{
        backgroundColor: 'white',
        height: "50%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 10,
        

      }}>

          <ModalStack.Navigator screenOptions={{ headerShown: false,   animation: 'slide_from_right', animationTypeForReplace:'push' }}>
            <ModalStack.Screen name="modalBundle" component={ModalBundleUI}/>
            <ModalStack.Screen name="createBundle" component={ModelCreateBundle}/>
          </ModalStack.Navigator>
          {/* <ModalBundleUI /> */}


          </View>

        </View>

       
      </Pressable>
}
    
    </View>
    
  )
}

export default PDPScreen

const styles = StyleSheet.create({
  dimOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Adjust the alpha (last value) to control the dimming intensity
  },
})
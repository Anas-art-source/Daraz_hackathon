import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import SearchBar from './components/SearchBar';
import SliderHero from './components/SliderHero';
import LocationBar from './components/LocationBar';
import { Icon } from 'react-native-elements';
import HomeScreen from './screen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './screen/SearchScreen';
import { NavigationContainer } from '@react-navigation/native';
import ProductListing from './screen/ProductListing';
import PDPScreen from './screen/PDPScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false,   animation: 'slide_from_right', animationTypeForReplace:'push' }}>
      <Stack.Screen name="Home" component={HomeScreen} screenOptions={{headerShown: false}}/>
      <Stack.Screen name="Search" component={SearchScreen} screenOptions={{headerShown: false}}/>
      <Stack.Screen name="ProductListing" component={ProductListing} screenOptions={{headerShown: false}}/>
      <Stack.Screen name="PDP" component={PDPScreen} screenOptions={{headerShown: false}}/>

      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    width: "100%",
    backgroundColor: '#Ffc290'
  }
});

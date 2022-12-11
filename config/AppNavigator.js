import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Search from '../screens/Search';
import Detail from '../screens/Detail';
import MonsterScreen from '../screens/MonsterScreen';
import EquipmentScreen from '../screens/EquipmentScreen';
const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='StackNavigator' component={StackNavigator} options={{ headerShown: false, tabBarLabel: 'Zoeken', tabBarIcon: ({ color, size }) => (<Ionicons name='search' color={color} size={size} />)}} />
      <Tab.Screen name='MonsterScreen' component={MonsterScreen} options={{ headerShown: false, tabBarLabel: 'Monsters', tabBarIcon: ({ color, size }) => (<Ionicons name='bug-outline' color={color} size={size} />)}} />
      <Tab.Screen name='EquipmentScreen' component={EquipmentScreen} options={{ headerShown: false, tabBarLabel: 'Equipment', tabBarIcon: ({ color, size }) => (<Ionicons name='eyedrop-outline' color={color} size={size} />)}} />
       
          </Tab.Navigator>
  );
}
const Stack = createNativeStackNavigator();

function StackNavigator() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name='Search' component={Search} options={{ headerShown: false,title: 'BOTW - Zoek je monster'}} />
        <Stack.Screen name='MonsterScreen' component={MonsterScreen}  />
        <Stack.Screen name='EquipmentScreen' component={EquipmentScreen}  />
        <Stack.Screen name='Detail' component={Detail} options={({ route }) => ({ title: `${route.params.monster.name} ` })}/>
      </Stack.Navigator>
  
  );
}

export default StackNavigator;


const RootStack = createNativeStackNavigator();

export function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name='Tabs' component={TabNavigator} options={{ headerShown: false }} />
          
      </RootStack.Navigator>
    </NavigationContainer>
  )
}
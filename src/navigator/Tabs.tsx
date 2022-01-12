import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';
import { SearchScreen } from '../screens/SearchScreen';
import { style } from '../theme/appTheme';
import  Icon  from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor:'white',   
        }}
        screenOptions={{
            tabBarActiveTintColor:'#17a2b8',
            tabBarLabelStyle:{
                marginBottom: 10,
            },
            tabBarStyle:{
                position:'absolute',
                backgroundColor:'rgba(255,255,255,.85)',
                borderWidth: 0,
                elevation: 0,
                height: 60,
            },
            tabBarShowLabel:true,
            
        }}
        

        
    >
      <Tab.Screen 
        name="HomeScreen" 
        component={Navigator}
        options={{
            title: 'Listado',
            tabBarIcon: ({color}) => <Icon name='list-outline' color={color} size={25}/>
            }} />
      <Tab.Screen 
        name="SearchScreen" 
        component={SearchScreen}
        options={{
            title: 'Buscar',
            tabBarIcon: ({color}) => <Icon name='search-outline' color={color} size={25}/>
            }}/>
    </Tab.Navigator>
  );
}
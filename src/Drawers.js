import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/FontAwesome"
import Icon2 from 'react-native-vector-icons/MaterialIcons';;
import Tabs from './Tabs';
import SettingStackNavigator from './stack/SettingStackScreen';
import ServiceStackNavigator from './stack/ServiceStackScreen';
import SearchStackNavigator from './stack/SearchStackScreen';

const Drawer = createDrawerNavigator();

const Drawers = () => {
  return (
    
    <Drawer.Navigator
    screenOptions={{
        headerStyle: {
            backgroundColor: "#000000",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
        headerShown: false,
        tabBarActiveTintColor: 'purple',
    }}>

    <Drawer.Screen name="Inicio"
        component={Tabs}
        options={{
            tabBarLabel: 'Inicio',
            tabBarIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
            ),
        }}
    />                
    <Drawer.Screen name="Busqueda"
        component={SearchStackNavigator}
        options={{
            tabBarLabel: 'Busqueda',
            tabBarIcon: ({ color, size }) => (
                <Icon2 name="home-work" color={color} size={size} />
            ),
        }}
    />
    <Drawer.Screen name="Gestor de Servicios"
        component={ServiceStackNavigator}
        options={{
            tabBarLabel: 'Servicios',
            tabBarIcon: ({ color, size }) => (
                <Icon2 name="contacts" color={color} size={size} />
            ),
        }}
    />
    <Drawer.Screen name="Configuraciones"
        component={SettingStackNavigator}
        options={{
            tabBarLabel: 'Configuracion',
            tabBarIcon: ({ color, size }) => (
                <Icon2 name="settings" color={color} size={size} />
            ),
        }}
    />
</Drawer.Navigator>
   
  );
}
export default Drawers;
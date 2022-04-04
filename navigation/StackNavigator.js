import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, TouchableOpacity } from 'react-native'
import Home from "../src/screens/Home";
import About from "../src/screens/About";
import Servicios from "../src/screens/Servicios";
import MyServices from "../src/screens/MyServices";
import PerfilSettings from "../src/screens/PerfilSettings";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#000000",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} options={({ navigation }) => ({
title:"Categorias",
        headerStyle: { backgroundColor: "#000000" },
        headerTitlestyle: { color: "#ffffff" },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate("About")}
            >
            <Text style={{color: '#ffffff', marginRight: 20, fontSize: 15}}>New Category</Text>

          </TouchableOpacity>
        ),
      })}
      />
      <Stack.Screen name="About" component={About} options={{
 title: 'New Category',
 headerStyle: { backgroundColor: "#000000" },
 
}}/>
    </Stack.Navigator>
  );
};

const ServiceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Servicios" component={Servicios} />
    </Stack.Navigator>
  );
};

const MyServiceStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Mis Servicios" component={MyServices} />
    </Stack.Navigator>
  );
};


const PerfilStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Editar Perfil" component={PerfilSettings} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, ServiceStackNavigator, MyServiceStackNavigator, PerfilStackNavigator };

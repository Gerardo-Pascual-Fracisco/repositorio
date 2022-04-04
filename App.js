import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;

/*import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Drawers from './src/Drawers';

export default function App() {
  return (
    <NavigationContainer>
     <Drawers />
  </NavigationContainer>
  );
} */

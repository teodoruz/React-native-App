import React from "react";
import TelaDeLogin from "./src/components/Screens/screens";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import telaDeRegistro from "./src/components/registerScreen/telacadastro";



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="log" component={TelaDeLogin} options={{ headerShown: false }} />
        <Stack.Screen name="registro" component={telaDeRegistro} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

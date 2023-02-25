import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Formulario from "./screens/Formulario";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={
          {
            headerShown: false
          }
        } name="Formulario" component={Formulario} />
        <Stack.Screen options={
          {
            headerShown: false
          }
        } name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

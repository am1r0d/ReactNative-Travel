import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home/Home";
import AttractionDetails from "./src/screens/AttractionDetails/AttractionDetails";
import Gallery from "./src/screens/Gallery/Gallery";
import Map from "./src/screens/Map/Map";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen
                    name="AttractionDetails"
                    component={AttractionDetails}
                />
                <Stack.Screen name="Gallery" component={Gallery} />
                <Stack.Screen name="Map" component={Map} />
                {/* <Home /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

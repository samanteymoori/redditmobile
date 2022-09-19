import { useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Home from "./views/Home";
import Detail from "./views/Detail";
import Footer from "./components/layout/Footer";

import { TailwindProvider } from "tailwindcss-react-native";
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  footerLogo: {
    width: 100,
    backgroundColor: "red",
    margin: 10,
    height: 100,
  },
});
const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TailwindProvider>
        <ScrollView
          style={{
            backgroundColor: "#E5E5E5",
            fontSize: 14,
          }}
        >
          <View style={{ fontFamily: "Poppins" }}>
            <NavigationContainer>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
              </Stack.Navigator>
            </NavigationContainer>
          </View>
        </ScrollView>
        <Footer style={{ innerWidth: "100%" }} navigation={navigation} />
      </TailwindProvider>
    </SafeAreaView>
  );
};
export default App;

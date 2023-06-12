const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LANDINGPAGE from "./screens/LANDINGPAGE";
import UniversityExtraInfo from "./screens/UniversityExtraInfo";
import InstructerExtraInfo from "./screens/InstructerExtraInfo";
import StudentExtraInfo from "./screens/StudentExtraInfo";
import StudentInfo from "./screens/StudentInfo";
import InstructerInfo from "./screens/InstructerInfo";
import UniversityInfo from "./screens/UniversityInfo";
import RgistrationComman from "./screens/RgistrationComman";
import InstructorLogin from "./screens/InstructorLogin";
import UniversityLogin from "./screens/UniversityLogin";
import StudentLogin from "./screens/StudentLogin";
import UniversityDetails from "./screens/UniversityDetails";
import UniversityEdit from "./screens/UniversityEdit";
import UniversityHome from "./screens/UniversityHome";
import InsructerEdit from "./screens/InsructerEdit";
import InsructerDetails from "./screens/InsructerDetails";
import InsructerChat from "./screens/InsructerChat";
import InsructerHome from "./screens/InsructerHome";
import StLdCollege from "./screens/StLdCollege";
import StGanpatUniversity from "./screens/StGanpatUniversity";
import StudentSearchResult from "./screens/StudentSearchResult";
import StudentProfile from "./screens/StudentProfile";
import StudentChat from "./screens/StudentChat";
import StudentSearch from "./screens/StudentSearch";
import StudentHome from "./screens/StudentHome";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import {
  GestureHandlerRootView,
  RectButton,
} from "react-native-gesture-handler";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    Inter_light: require("./assets/fonts/Inter_light.ttf"),
    Inter_regular: require("./assets/fonts/Inter_regular.ttf"),
    Inter_medium: require("./assets/fonts/Inter_medium.ttf"),
    Inter_semibold: require("./assets/fonts/Inter_semibold.ttf"),
    Inter_bold: require("./assets/fonts/Inter_bold.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <NavigationContainer>
            {hideSplashScreen ? (
              <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                  name="LANDINGPAGE"
                  component={LANDINGPAGE}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="UniversityExtraInfo"
                  component={UniversityExtraInfo}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="InstructerExtraInfo"
                  component={InstructerExtraInfo}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="StudentExtraInfo"
                  component={StudentExtraInfo}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="StudentInfo"
                  component={StudentInfo}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="InstructerInfo"
                  component={InstructerInfo}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="UniversityInfo"
                  component={UniversityInfo}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="RgistrationComman"
                  component={RgistrationComman}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="InstructorLogin"
                  component={InstructorLogin}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="UniversityLogin"
                  component={UniversityLogin}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="StudentLogin"
                  component={StudentLogin}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="UniversityDetails"
                  component={UniversityDetails}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="UniversityEdit"
                  component={UniversityEdit}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="UniversityHome"
                  component={UniversityHome}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="InsructerEdit"
                  component={InsructerEdit}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="InsructerDetails"
                  component={InsructerDetails}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="InsructerChat"
                  component={InsructerChat}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="InsructerHome"
                  component={InsructerHome}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="StLdCollege"
                  component={StLdCollege}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="StGanpatUniversity"
                  component={StGanpatUniversity}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="StudentSearchResult"
                  component={StudentSearchResult}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="StudentProfile"
                  component={StudentProfile}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="StudentChat"
                  component={StudentChat}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="StudentSearch"
                  component={StudentSearch}
                  options={{ headerShown: false }}
                />
                <Stack.Screen
                  name="StudentHome"
                  component={StudentHome}
                  options={{ headerShown: false }}
                />
              </Stack.Navigator>
            ) : null}
          </NavigationContainer>
        </GestureHandlerRootView>
      </ApplicationProvider>
    </>
  );
};
export default App;

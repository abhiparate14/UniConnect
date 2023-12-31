const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import LANDINGPAGE from "./screens/LANDINGPAGE";
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
import StudentProfile from "./screens/StudentProfile";
import StudentProfileEdit from "./screens/StudentProfileEdit";
import StudentChat from "./screens/StudentChat";
import StudentSearch from "./screens/StudentSearch";
import StudentHome from "./screens/StudentHome";
import StudentChatScreen from './screens/StudentChatScreen'
import StudentProfileSettings from "./screens/StudentProfileSettings";
import UniversityProfileSettings from './screens/UniversityProfileSettings';
import InstructorViewUni from './screens/InstructorViewUni';
import InstructorProfileSettings from './screens/InstructorProfileSettings';
import InstructerRating from "./screens/InstructerRating";
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
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="StudentInfo"
                  component={StudentInfo}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="InstructerInfo"
                  component={InstructerInfo}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="UniversityInfo"
                  component={UniversityInfo}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="RgistrationComman"
                  component={RgistrationComman}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="InstructorLogin"
                  component={InstructorLogin}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="UniversityLogin"
                  component={UniversityLogin}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="StudentLogin"
                  component={StudentLogin}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="UniversityDetails"
                  component={UniversityDetails}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="UniversityEdit"
                  component={UniversityEdit}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="UniversityHome"
                  component={UniversityHome}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="InsructerEdit"
                  component={InsructerEdit}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="InsructerDetails"
                  component={InsructerDetails}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="InsructerChat"
                  component={InsructerChat}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="InsructerHome"
                  component={InsructerHome}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="StLdCollege"
                  component={StLdCollege}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="StGanpatUniversity"
                  component={StGanpatUniversity}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="StudentProfile"
                  component={StudentProfile}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="StudentChat"
                  component={StudentChat}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="StudentSearch"
                  component={StudentSearch}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="StudentHome"
                  component={StudentHome}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="StudentProfileEdit"
                  component={StudentProfileEdit}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="StudentChatScreen"
                  component={StudentChatScreen}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="StudentProfileSettings"
                  component={StudentProfileSettings}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="UniversityProfileSettings"
                  component={UniversityProfileSettings}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="InstructorViewUni"
                  component={InstructorViewUni}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="InstructorProfileSettings"
                  component={InstructorProfileSettings}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
                />
                <Stack.Screen
                  name="InstructerRating"
                  component={InstructerRating}
                  options={{ headerShown: false, animation: 'slide_from_right'}}
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

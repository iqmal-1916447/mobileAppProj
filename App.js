import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AddSchedule from "./screens/AddSchedule";
import About from "./screens/About";
import ShowSchedule from "./screens/ShowSchedule";
import DetailSchedule from "./modals/DetailSchedule";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen
            name="showSchedule"
            component={ShowSchedule}
            options={{
              title: "Schedule",
              drawerIcon: ({ size }) => {
                return (
                  <MaterialCommunityIcons
                    name="timetable"
                    size={size}
                    color="black"
                  />
                );
              },
            }}
          />
          <Drawer.Screen
            name="addSchedule"
            component={AddSchedule}
            options={{
              title: "Add new schedule",
              drawerIcon: ({ size }) => {
                return <AntDesign name="addfile" size={size} color="black" />;
              },
            }}
          />
          <Drawer.Screen
            name="about"
            component={About}
            options={{
              title: "About Us",
              drawerIcon: ({ size }) => {
                return <Entypo name="code" size={size} color="black" />;
              },
            }}
          />
          <Drawer.Screen
            name="courseDetails"
            component={DetailSchedule}
            options={{
              title: "Course details",
              drawerItemStyle: { display: "none" },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

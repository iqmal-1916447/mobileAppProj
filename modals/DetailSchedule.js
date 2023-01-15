import { View, Text, Pressable, StyleSheet } from "react-native";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const DeleteSchedule = ({ style, id, navigation }) => {
  const [forText, forPressable] = style;
  const deleteCourseHandler = () => {
    const course = doc(db, "courses", id);
    deleteDoc(course);

    //after delete must return to mainpage
    navigation.navigate("showSchedule");
  };
  return (
    <Pressable style={forPressable} onPress={deleteCourseHandler}>
      <Text style={forText}>Delete Course</Text>
    </Pressable>
  );
};

const DetailSchedule = ({ navigation, route }) => {
  const { dataFirebase } = route.params;
  console.log(dataFirebase);

  return (
    <View style={styles.container}>
      <View style={styles.courseContainer}>
        <View>
          <Text></Text>
        </View>
        <View>
          <Text>Day: {dataFirebase.day}</Text>
          <Text>Time: {dataFirebase.time}</Text>
          <Text>Code: {dataFirebase.code}</Text>
          <Text>Sect: {dataFirebase.sect}</Text>
          <Text>Venue: {dataFirebase.venue}</Text>
          <Text>Lecturer: {dataFirebase.lecturer}</Text>
          <Text>Chr: {dataFirebase.chr}</Text>
        </View>
        <Pressable
          style={styles.btnExit}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.btnTxt}>Exit</Text>
        </Pressable>
        <DeleteSchedule
          style={[styles.btnTxt, styles.btnDelete]}
          id={dataFirebase.id}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default DetailSchedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4caed",
    alignItems: "center",
    justifyContent: "center",
  },

  courseContainer: {
    borderRadius: 3,
    backgroundColor: "#9dbf86",
    padding: 10,
    margin: 10,
    width: "90%",
  },

  btnExit: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 5,
    backgroundColor: "black",
    margin: 5,
  },

  btnDelete: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 5,
    backgroundColor: "red",
    margin: 5,
  },

  btnTxt: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

import { Button, StyleSheet, TextInput, View, Text } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const CourseCode = () => {
  return (
    <TextInput style={[styles.input, { flex: 3 }]} placeholder="Course Code" />
  );
};

const CourseSection = () => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Section"
      keyboardType="number-pad"
    />
  );
};

const CourseTitle = () => {
  return <TextInput style={styles.input} placeholder="Course Title" />;
};

const CourseChr = () => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Credit Hour"
      keyboardType="number-pad"
    />
  );
};

const Day = () => {
  return <TextInput style={[styles.input, { flex: 2 }]} placeholder="Day" />;
};

const CourseTime = () => {
  return <TextInput style={[styles.input, { flex: 2 }]} placeholder="Time" />;
};

const CourseVenue = () => {
  return <TextInput style={styles.input} placeholder="Venue" />;
};

const CourseLecturer = () => {
  return <TextInput style={styles.input} placeholder="Lecturer" />;
};

const AddSchedule = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-evenly",
        }}
      >
        <Day />
        <CourseTime />
        <CourseCode />
      </View>

      <View style={{ flexDirecton: "row", width: "90%" }}>
        <CourseTitle />
      </View>

      <View style={{ flexDirection: "row", width: "90%" }}>
        <CourseVenue />
      </View>

      <View style={{ flexDirection: "row", width: "90%" }}>
        <CourseLecturer />
      </View>

      <Pressable style={styles.btn}>
        <Text style={styles.btnTxt}>Done</Text>
      </Pressable>
    </View>
  );
};

export default AddSchedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d4caed",
  },

  input: {
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
    padding: 5,
    fontSize: 20,
    height: 30,
    width: "90%",
    backgroundColor: "white",
  },

  btnTxt: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
});

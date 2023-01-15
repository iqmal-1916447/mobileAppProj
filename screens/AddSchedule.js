import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  ToastAndroid,
} from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import SemesterCourse from "../models/SemesterCourse";

const CourseCode = ({ editState }) => {
  const [courseCode, setCourseCode] = editState;
  return (
    <TextInput
      style={[styles.input, { flex: 3 }]}
      placeholder="Course Code"
      value={courseCode}
      onChangeText={(txt) => {
        setCourseCode(txt);
      }}
    />
  );
};

const CourseSection = ({ editState }) => {
  const [courseSection, setCourseSection] = editState;
  return (
    <TextInput
      style={styles.input}
      placeholder="Section"
      keyboardType="number-pad"
      value={courseSection}
      onChangeText={(txt) => {
        setCourseSection(parseInt(txt));
      }}
    />
  );
};

const CourseTitle = ({ editState }) => {
  const [courseTitle, setCourseTitle] = editState;
  return (
    <TextInput
      style={styles.input}
      placeholder="Course Title"
      value={courseTitle}
      onChangeText={(txt) => {
        setCourseTitle(txt);
      }}
    />
  );
};

const CourseChr = ({ editState }) => {
  const [courseChr, setCourseChr] = editState;
  return (
    <TextInput
      style={styles.input}
      placeholder="Credit Hour"
      keyboardType="number-pad"
      value={courseChr}
      onChangeText={(txt) => {
        setCourseChr(parseInt(txt));
      }}
    />
  );
};

const Day = ({ editState }) => {
  const [courseDay, setCourseDay] = editState;
  return (
    <TextInput
      style={[styles.input, { flex: 2 }]}
      placeholder="Day"
      value={courseDay}
      onChangeText={(txt) => {
        setCourseDay(txt);
      }}
    />
  );
};

const CourseTime = ({ editState }) => {
  const [courseTime, setCourseTime] = editState;
  return (
    <TextInput
      style={[styles.input, { flex: 2 }]}
      placeholder="Time"
      value={courseTime}
      onChangeText={(txt) => {
        setCourseTime(txt);
      }}
    />
  );
};

const CourseVenue = ({ editState }) => {
  const [courseVenue, setCourseVenue] = editState;
  return (
    <TextInput
      style={styles.input}
      placeholder="Venue"
      value={courseVenue}
      onChangeText={(txt) => {
        setCourseVenue(txt);
      }}
    />
  );
};

const CourseLecturer = ({ editState }) => {
  const [courseLecturer, setCourseLecturer] = editState;
  return (
    <TextInput
      style={styles.input}
      placeholder="Lecturer"
      value={courseLecturer}
      onChangeText={(txt) => {
        setCourseLecturer(txt);
      }}
    />
  );
};

const AddSchedule = ({ navigation }) => {
  // const [course, setCourse] = useState([new SemesterCourse()]);
  const [courseCode, setCourseCode] = useState("");
  const [courseSection, setCourseSection] = useState(0);
  const [courseTitle, setCourseTitle] = useState("");
  const [courseChr, setCourseChr] = useState(0);
  const [courseDay, setCourseDay] = useState("");
  const [courseTime, setCourseTime] = useState("");
  const [courseVenue, setCourseVenue] = useState("");
  const [courseLecturer, setCourseLecturer] = useState("");

  const addCourse = () => {
    const courseDb = collection(db, "courses");
    addDoc(courseDb, {
      chr: courseChr,
      code: courseCode,
      day: courseDay,
      lecturer: courseLecturer,
      sect: courseSection,
      time: courseTime,
      title: courseTitle,
      venue: courseVenue,
    });

    // after add must return to mainpage
    navigation.navigate("showSchedule");

    // ToastAndroid.showWithGravity(
    //   "Course successfully saved!",
    //   ToastAndroid.SHORT
    // );

    // setCourseCode()
    // setCourseSection()
    // setCourseTime()
    // setCourseChr()
    // setCourseDay()
    // setCourseTime()
    // setCourseVenue()
    // setCourseLecturer()
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "90%",
          justifyContent: "space-evenly",
        }}
      >
        <Day editState={[courseDay, setCourseDay]} />
        <CourseTime editState={[courseTime, setCourseTime]} />
        <CourseCode editState={[courseCode, setCourseCode]} />
      </View>

      <View style={{ flexDirecton: "row", width: "90%" }}>
        <CourseTitle editState={[courseTitle, setCourseTitle]} />
      </View>

      <View style={{ flexDirection: "row", width: "90%" }}>
        <CourseVenue editState={[courseVenue, setCourseVenue]} />
      </View>

      <View style={{ flexDirection: "row", width: "90%" }}>
        <CourseLecturer editState={[courseLecturer, setCourseLecturer]} />
      </View>

      <View>
        <CourseSection editState={[courseSection, setCourseSection]} />
      </View>

      <View>
        <CourseChr editState={[courseChr, setCourseChr]} />
      </View>

      <Pressable style={styles.btn} onPress={addCourse}>
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

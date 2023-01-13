import { StyleSheet, View, FlatList, Text, Pressable } from "react-native";
import { SEMESTERCOURSES } from "../data/dummy-data";
import DetailSchedule from "../modals/DetailSchedule";
import { useState } from "react";

const RenderSchedule = ({ day, style, onPressBtn }) => {
  let chosenDay = SEMESTERCOURSES.filter((passedObj) => {
    if (passedObj.day == day) {
      return passedObj;
    }
  });
  return (
    <FlatList
      data={chosenDay}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <Pressable style={style[0]} onPress={onPressBtn}>
            <Text style={style[1]}>{item.title}</Text>
            <Text style={style[1]}>{item.venue}</Text>
          </Pressable>
        );
      }}
    />
  );
};

const ShowSchedule = ({ navigation }) => {
  // const [modalIsVisible, setModalIsVisible] = useState(false);

  const DetailScheduleHandler = () => {
    //   setModalIsVisible(true);
    //   console.log(modalIsVisible);
    //   if (modalIsVisible) {
    // console.log("Im rendering");
    navigation.navigate("courseDetails");
    //   }
  };

  return (
    <View style={styles.container}>
      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>Monday</Text>
        <RenderSchedule
          day="Monday"
          style={[styles.scheduleItemPress, styles.scheduleItemText]}
          onPressBtn={DetailScheduleHandler}
        />
      </View>

      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>Tuesday</Text>
        <RenderSchedule
          day="Tuesday"
          style={[styles.scheduleItemPress, styles.scheduleItemText]}
          onPressBtn={DetailScheduleHandler}
        />
      </View>

      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>Wednesday</Text>
        <RenderSchedule
          day="Wednesday"
          style={[styles.scheduleItemPress, styles.scheduleItemText]}
          onPressBtn={DetailScheduleHandler}
        />
      </View>

      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>Thursday</Text>
        <RenderSchedule
          day="Thursday"
          style={[styles.scheduleItemPress, styles.scheduleItemText]}
          onPressBtn={DetailScheduleHandler}
        />
      </View>

      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>Friday</Text>
        <RenderSchedule
          day="Friday"
          style={[styles.scheduleItemPress, styles.scheduleItemText]}
          onPressBtn={DetailScheduleHandler}
        />
      </View>

      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>Saturday</Text>
        <RenderSchedule
          day="Saturday"
          style={[styles.scheduleItemPress, styles.scheduleItemText]}
          onPressBtn={DetailScheduleHandler}
        />
      </View>

      <View style={styles.dayContainer}>
        <Text style={styles.dayText}>Sunday</Text>
        <RenderSchedule
          day="Sunday"
          style={[styles.scheduleItemPress, styles.scheduleItemText]}
          onPressBtn={DetailScheduleHandler}
        />
      </View>
    </View>
  );
};

export default ShowSchedule;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4caed",
  },

  scheduleItemPress: {
    backgroundColor: "#5e0acc",
    padding: 8,
    margin: 8,
    borderRadius: 6,
    elevation: 4,
  },

  scheduleItemText: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },

  dayText: {
    fontSize: 16,
    fontWeight: "900",
  },

  dayContainer: {
    borderRadius: 3,
    backgroundColor: "#9dbf86",
    padding: 10,
    margin: 10,
  },
});

import { StyleSheet, View, FlatList, Text } from "react-native";
import { SEMESTERCOURSES } from "../data/dummy-data";

const RenderSchedule = ({ day }) => {
  let chosenDay = SEMESTERCOURSES.filter((passedObj) => {
    if (passedObj.day == day) {
      return passedObj;
    }
    console.log(passedObj.day);
  });
  return (
    <FlatList
      data={chosenDay}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.venue}</Text>
          </View>
        );
      }}
    />
  );
};

const ShowSchedule = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Monday</Text>
        <RenderSchedule day="Monday" />
      </View>

      <View>
        <Text>Tuesday</Text>
        <RenderSchedule day="Tuesday" />
      </View>

      <View>
        <Text>Wednesday</Text>
        <RenderSchedule day="Wednesday" />
      </View>

      <View>
        <Text>Thursday</Text>
        <RenderSchedule day="Thursday" />
      </View>

      <View>
        <Text>Friday</Text>
        <RenderSchedule day="Friday" />
      </View>

      <View>
        <Text>Saturday</Text>
        <RenderSchedule day="Saturday" />
      </View>

      <View>
        <Text>Sunday</Text>
        <RenderSchedule day="Sunday" />
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

  scheduleItemText: {
    backgroundColor: "#5e0acc",
    color: "white",
    padding: 8,
    margin: 8,
    borderRadius: 6,
  },
});

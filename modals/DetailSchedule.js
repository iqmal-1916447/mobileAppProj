import { View, Text, Pressable, StyleSheet } from "react-native";

const DetailSchedule = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.courseContainer}>
        <View>
          <Text></Text>
        </View>
        <View>
          <Text>Day</Text>
          <Text>Time</Text>
          <Text>Code</Text>
          <Text>Sect</Text>
          <Text>Venue</Text>
          <Text>Lecturer</Text>
          <Text>Chr</Text>
        </View>
        <Pressable
          style={styles.btn}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Text style={styles.btnTxt}>Exit</Text>
        </Pressable>
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

  btn: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 5,
    backgroundColor: "red",
  },

  btnTxt: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

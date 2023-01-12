import { View, Text, StyleSheet } from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text>Scheduler v1.0.0</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#d4caed",
  },
});

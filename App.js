import { StatusBar, StyleSheet, View } from "react-native";
import ApplicationNavigator from "./src/navigations/ApplicationNavigator";

const App = () => {
  return (
    <View style={styles.container}>
      {/* Hide the status bar */}
      <StatusBar hidden={true} />
      <ApplicationNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
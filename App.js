import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// div =view
//h1, p. etc. = Text
export default function App() {
  return (
    <View style={styles.container}>
      <Text>My First React Native App!!!</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { View, Text, Button, TouchableOpacity } from "react-native";

const App = () => {
  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "gray", padding: 20 }}>
      <Text style={{ padding: 20 }}>Hi, I am alok kumar</Text>

      <Button title="press me" />
      <Button title="press me" />
      <Button title="press here" />

      <TouchableOpacity style={{ padding: 20, backgroundColor: "green" }}>
        <Text>Button</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 20, backgroundColor: "green" }}>
        <Text>Button</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ padding: 20, backgroundColor: "green" }}>
        <Text>Button</Text>
      </TouchableOpacity>

      


    </View>
  );
};

export default App;

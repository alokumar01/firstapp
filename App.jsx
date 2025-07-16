import { View, Text } from "react-native";
import { useState, useEffect } from "react";

export default function App () {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <View style={{ width: "100%", height: "100%", backgroundColor: "gray", padding: 20}}>
      <Text style={{ padding: 20 }}>Hi, I am alok kumar</Text>
      <Text style={{ padding: 20 }}>Count: {count}</Text>
      {/* 
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
      </TouchableOpacity> */}
    </View>
  );
};

import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

const InnerText = (props: {
  index: number,
}) => (
  <Text style={{
    "color": "blue",
    "fontWeight": "bold"
  }}>
    {Array(props.index % 3).fill("X").join("")}
  </Text>
);

export default function App() {
  const { width } = useWindowDimensions();
  const fontFamily = 'Roboto';

  return (
    <View>
      <Text style={{
        "fontFamily": "Roboto",
        "color": "red",
      }}>
        {[...Array(86).keys()].map((index) => <InnerText key={index} index={index} />)}
      </Text>
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

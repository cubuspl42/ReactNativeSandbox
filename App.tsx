import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { RenderHTML, RenderHTMLSource } from 'react-native-render-html';

const html1 = '<strong>X</strong><strong>x</strong><strong>x</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong><strong>b</strong>';

export default function App() {
  const { width } = useWindowDimensions();
  const fontFamily = 'Roboto';

  return (
    <View>
      <RenderHTML
        baseStyle={{
          color: 'black',
          fontFamily: fontFamily,
        }}
        contentWidth={width * 0.8}
        source={{ html: html1 }}
      />
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

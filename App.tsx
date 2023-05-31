import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

let logBuffer: Array<string> = [];

const log = (message: string) => {
  logBuffer.push(message);
};

const handleClearLog = () => {
  logBuffer = [];
};

function fibonacci(n: number): number {
  if (n <= 0) {
    throw new Error('Invalid input. n must be a positive integer.');
  }

  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

const N = 30;

const App: React.FC = () => {
  const [text, setText] = useState('');
  const [shouldSlowDown, setShouldSlowDown] = useState(false);

  const handleClearInput = () => {
    log(`Clearing! Text: '${text}'. New text: ''.`);

    setText('');

    if (shouldSlowDown) {
      log(`fib(N): ${fibonacci(N)}`);
    }
  };

  log(`Rendering TextInput with value = '${text}'`);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={text}
        onChangeText={newText => {
          log(`Text changed! Text: '${text}'. New text: '${newText}'`);
          setText(newText);
        }}
        placeholder="Type something..."
      />

      <View style={styles.wrapper}>
        <Text>Text: '{text}'</Text>
      </View>

      <View style={styles.wrapper}>
        <Button title="Clear input" onPress={handleClearInput} />
      </View>

      <View style={styles.wrapper}>
        <Button title="Clear log" onPress={handleClearLog} />
      </View>

      <View style={styles.row}>
        <Text>Degrade performance:</Text>
        <Switch
          value={shouldSlowDown}
          onValueChange={setShouldSlowDown}
        />
      </View>

      <ScrollView style={styles.logContainer}>
        {logBuffer
          .slice()
          .reverse()
          .map((message, index) => (
            <Text key={index} style={styles.logText}>
              {message}
            </Text>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    margin: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  wrapper: {
    marginBottom: 8,
  },
  logContainer: {
    flex: 1,
    width: '100%',
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
  },
  logText: {
    marginBottom: 4,
  },
});

export default App;

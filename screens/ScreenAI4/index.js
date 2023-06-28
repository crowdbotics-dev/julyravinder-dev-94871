import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GreenForestScreen = () => {
  return <View style={styles.container}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.image} />
      <View style={styles.overlay} />
      <Text style={styles.text}>Green Forest</Text>
      <Text style={styles.text}>Under Blue Sky</Text>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    position: 'absolute'
  },
  overlay: { ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 128, 0, 0.5)'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16
  }
});
export default GreenForestScreen;
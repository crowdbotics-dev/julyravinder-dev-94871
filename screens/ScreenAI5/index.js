import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Email" placeholderTextColor="#003f5c" />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.inputText} placeholder="Password" placeholderTextColor="#003f5c" secureTextEntry />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#003f5c',
    marginBottom: 40
  },
  inputView: {
    width: '80%',
    backgroundColor: '#e6e6e6',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20
  },
  inputText: {
    height: 50,
    color: 'black'
  },
  forgotPassword: {
    color: '#003f5c',
    fontSize: 16
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#003f5c',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: 'white'
  }
});
export default LoginScreen;
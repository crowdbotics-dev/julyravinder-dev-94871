import { api_v1_login_create } from "../../store/julyravinderdevAPI/authTokens.slice.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled6 = ({}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(api_v1_login_create({
      email: "ravi@gmail.com",
      pass: "testing"
    }));
  }, []);
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%",
    backgroundColor: "#d62020"
  }
});
export default Untitled6;
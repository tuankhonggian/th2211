import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";

import React from "react";
import { useNavigation } from "@react-navigation/native";

const SuccessScreen = () => {
  const navigate = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageCenter}>
        <Image source={require("../img/tron.jpg")} style={styles.image1} />
        <Image source={require("../img/phone.jpg")} style={styles.image2} />
      </View>
      <View style={styles.textCenter}>
        <Text style={styles.firstTitle}>Payment Success, Yayy!</Text>
        <View style={styles.secondTitle}>
          <Text>We will send order details and invoice in</Text>
          <Text style={styles.setext}>
            your contact no and registered email
          </Text>
        </View>
      </View>
      <View style={styles.checkDetail}>
        <TouchableOpacity>
          <Text style={styles.checkText}>Check details</Text>
          <Image
            source={require("../img/ArrowRight.jpg")}
            style={styles.imageIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => navigate.navigate("")}
        >
          <Text style={styles.btnDow}>Download Invoice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  firstTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  secondTitle: {
    color: "#7a7a7a",
  },
  setext: {
    marginLeft: 10,
  },
  image1: {
    resizeMode: "cover",
    width: 200,
    height: 200,
    marginBottom: 100,
  },
  image2: {
    resizeMode: "cover",
    position: "absolute",
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  imageIcon: {
    color: "#0989ff",
    position: "absolute",
    marginTop: 5,
    marginLeft: 120,
  },
  checkText: {
    fontSize: 18,
    color: "#0989ff",
  },
  checkDetail: {
    marginTop: 50,
  },
  getStartedButton: {
    backgroundColor: "#5A6CF3",
    padding: 20,
    borderRadius: 10,
  },
  footer: {
    position: "absolute",
    bottom: 40,
    left: 0,
    right: 0,
    padding: 50,
  },
  btnDow: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default SuccessScreen;

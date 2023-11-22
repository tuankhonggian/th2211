import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CheckOut = ({ navigation }) => {
  const navigate = useNavigation();
  const handleClick = () => {
    navigate.navigate("successcreen");
  };
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View style={styles.headerContainer}>
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-around",
            alignItems: "center",
            marginTop: 60,
          }}
        >
          <Text
            style={{
              color: "#363636",
              fontSize: 22,
              fontWeight: 700,
              marginRight: 100,
            }}
          >
            Checkout 💳
          </Text>
          <View>
            <Text style={{ color: "#25D482", fontSize: 20, fontWeight: 700 }}>
              ₹ 1,527
            </Text>
            <Text style={{ color: "#B1B1B1", fontSize: 14, fontWeight: 400 }}>
              Including GST (18%)
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.labelContainer}>
        <View
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "#25D482",
            borderRadius: 16,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../img/cardicon.png")}
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: 700 }}>
            Credit card
          </Text>
        </View>

        <View
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "#fff",
            borderRadius: 16,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../img/appleicon.png")}
            style={{ marginRight: 10 }}
          />
          <Text style={{ color: "#363636", fontSize: 18, fontWeight: 700 }}>
            Apple Pay
          </Text>
        </View>
      </View>

      <View
        style={{
          marginTop: 60,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View>
          <Text
            style={{
              marginBottom: 10,
              color: "#3A3C3F",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            Card number
          </Text>
          <View
            style={{
              width: 335,
              height: 56,
              borderRadius: 16,
              backgroundColor: "#F8F8FB",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#424D59", fontSize: 16, fontWeight: 400 }}>
              5261 4141 0151 8472
            </Text>
            <Image source={require("../img/cardlogo.png")} />
            <Image source={require("../img/cardnumber.png")} />
          </View>
        </View>

        <View style={{ marginVertical: 30 }}>
          <Text
            style={{
              marginBottom: 10,
              color: "#3A3C3F",
              fontSize: 16,
              fontWeight: 700,
            }}
          >
            Cardholder name
          </Text>
          <View
            style={{
              width: 335,
              height: 56,
              borderRadius: 16,
              backgroundColor: "#F8F8FB",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#424D59",
                fontSize: 16,
                fontWeight: 400,
                marginLeft: 25,
              }}
            >
              Christie Doe
            </Text>
          </View>
        </View>

        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                marginBottom: 10,
                color: "#3A3C3F",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              Card number
            </Text>

            <Text
              style={{
                marginBottom: 10,
                color: "#3A3C3F",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              CVV / CVC
            </Text>

            <View>
              <Text>?</Text>
            </View>
          </View>
          <View
            style={{
              width: 335,
              height: 56,
              borderRadius: 16,
              backgroundColor: "#F8F8FB",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#424D59", fontSize: 16, fontWeight: 400 }}>
              5261 4141 0151 8472
            </Text>
            <Image source={require("../img/cardlogo.png")} />
            <Image source={require("../img/cardnumber.png")} />
          </View>
        </View>
      </View>

      <Text
        style={{
          alignSelf: "center",
          marginTop: 50,
          color: "#B1B1B1",
          fontSize: 14,
          fontWeight: 400,
        }}
      >
        We will send you an order details to your email after the successfull
        payment
      </Text>

      <TouchableOpacity style={styles.button} onPress={() => handleClick()}>
        <Text style={{ alignSelf: "center" }}>Pay for the order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: 253,
    backgroundColor: "#fff",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: 100,
    shadowColor: "black",
    borderWidth: 1,
  },

  labelContainer: {
    width: 331,
    height: 69,
    backgroundColor: "#F8F8FB",
    alignSelf: "center",
    borderRadius: 16,
    position: "absolute",
    marginTop: 215,
    flexDirection: "row",
  },
  button: {
    width: 335,
    paddingHorizontal: 18,
    paddingVertical: 22,
    borderRadius: 16,
    backgroundColor: "#25D482",
    marginTop: 50,
    justifyContent: "center",
    marginLeft: 40,
    color: "#fff",
  },
});

export default CheckOut;

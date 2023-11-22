import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { product } from "../img/products/products";

export default function Scan({ navigation, route }) {
  const { product: scannedProduct } = route.params;
  let PRODUCT = {};

  // Find the product with the same id as the scanned product
  const foundProduct = product.find((p) => p.id === scannedProduct.id);

  if (foundProduct) {
    PRODUCT = foundProduct;
  }
  console.log(product);
  const addToCart = async () => {
    try {
      const existingCart = await AsyncStorage.getItem("cart");
      const cart = existingCart ? JSON.parse(existingCart) : [];

      const existingProductIndex = cart.findIndex(
        (item) => item.productName === scannedProduct.name
      );

      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;
      } else {
        const newProduct = {
          productName: scannedProduct.name,
          quantity: 1,
          price: scannedProduct.price,
          image: scannedProduct.img,
        };
        cart.push(newProduct);
      }

      await AsyncStorage.setItem("cart", JSON.stringify(cart));
      navigation.navigate("Cart");
    } catch (error) {
      console.error("Lỗi khi cập nhật giỏ hàng:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={PRODUCT.img}
        resizeMode="contain"
        style={styles.image}
      >
        <View style={{}}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Home")}
              style={{
                backgroundColor: "white",
                width: 50,
                height: 50,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                marginLeft: 30,
                marginTop: 120,
              }}
            >
              <Image style={{}} source={require("../img/ArrowBack.png")} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 50,
          }}
        >
          <Image
            style={{
              marginTop: 30,
            }}
            source={require("../img/border.png")}
          />
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              width: "80%",
              borderRadius: 10,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 2,
              elevation: 50,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
              }}
            >
              <Image style={styles.tinyLogo} source={PRODUCT.img} />
              <View>
                <Text
                  style={{
                    color: "#C2C2C2",
                    fontWeight: "300",
                  }}
                >
                  Lauren’s
                </Text>
                <Text
                  style={{
                    fontWeight: "500",
                  }}
                >
                  {PRODUCT.name}
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: "#5A6CF3",
                padding: 10,
                borderRadius: 10,
              }}
            >
              <TouchableOpacity onPress={addToCart}>
                <Image style={styles.icon} source={require("../img/Add.png")} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEE1D1",
  },
  image: {
    flex: 1,
    //justifyContent: 'center',
    marginTop: -20,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  tinyLogo: {
    width: 60,
    height: 60,
  },
});

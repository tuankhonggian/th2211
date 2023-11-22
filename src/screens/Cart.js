import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { product } from "../img/products/products";
import { useNavigation } from "@react-navigation/native";
export default function Cart({ navigation }) {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      try {
        const existingCart = await AsyncStorage.getItem("cart");
        const parsedCart = existingCart ? JSON.parse(existingCart) : [];
        setCart(parsedCart);
      } catch (error) {
        console.error("Lỗi khi lấy giỏ hàng:", error);
      }
    };
    getCart();
  }, []);

  const clearCart = async () => {
    try {
      await AsyncStorage.removeItem("cart");
      setCart([]);
    } catch (error) {
      console.error("Lỗi khi xóa giỏ hàng:", error);
    }
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity += 1;
    setCart(updatedCart);
    AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity -= 1;
    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
    AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.quantity * item.price, 0);
  };
  const navigate = useNavigation();

  const handleClick = () => {
    navigate.navigate("checkout");
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          backgroundColor: "#F8F8FB",
          margin: 20,
          width: 50,
          height: 50,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
        }}
      >
        <TouchableOpacity
          onPress={(item) => navigation.navigate("Scan", { product: item })}
        >
          <Image style={{}} source={require("../img/Arr.png")} />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          margin: 20,
          fontSize: 20,
          fontWeight: "600",
        }}
      >
        Giỏ hàng của bạn 👍🏻
      </Text>

      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "#F8F8FB",
            width: "80%",
            borderRadius: 10,
            padding: 20,
          }}
        >
          {cart.map((item, index) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
              key={index}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <Image source={item.image} style={{ width: 50, height: 50 }} />
                <View>
                  <Text>{item.productName}</Text>
                  <Text
                    style={{
                      color: "#F08F5F",
                      fontWeight: "500",
                    }}
                  >
                    ₹ {item.price}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={() => decreaseQuantity(index)}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#F08F5F",
                    }}
                  >
                    -
                  </Text>
                </TouchableOpacity>

                <Text
                  style={{
                    fontSize: 18,
                    marginLeft: 5,
                    marginRight: 5,
                  }}
                >
                  {item.quantity}
                </Text>

                <TouchableOpacity onPress={() => increaseQuantity(index)}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#F08F5F",
                    }}
                  >
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity onPress={clearCart}>
        <Text
          style={{
            margin: 30,
            color: "#F08F5F",
            fontWeight: "500",
            fontSize: 16,
          }}
        >
          Xóa giỏ hàng
        </Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 20,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "500",
          }}
        >
          Tổng cộng
        </Text>
        <Text
          style={{
            color: "#F08F5F",
            fontWeight: "700",
            fontSize: 20,
          }}
        >
          ₹ {getTotalPrice().toFixed(2)}
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#F08F5F",
            padding: 20,
            width: "80%",
            borderRadius: 15,
          }}
          onPress={() => handleClick()}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              fontWeight: "500",
              fontSize: 20,
            }}
          >
            Tiến hành thanh toán
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

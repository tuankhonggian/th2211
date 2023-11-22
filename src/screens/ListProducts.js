import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { product } from "../img/products/products";
import { useNavigation } from "@react-navigation/native";

export default function ListProducts() {
  const navigate = useNavigation();
  const handleImageClick = (item) => {
    navigate.navigate("Scan", { product: item });
  };
  return (
    <View style={{}}>
      <View style={{}}>
        <View>
          <TouchableOpacity
            onPress={() => navigate.navigate("Home")}
            style={{
              backgroundColor: "white",
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              marginLeft: 30,
              marginTop: 30,
            }}
          >
            <Image style={{}} source={require("../img/ArrowBack.png")} />
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          marginLeft: 20,
        }}
      >
        <Text>quantity:{product.length}</Text>
      </View>
      <ScrollView
        style={{
          padding: 20,
          display: "flex",
          flexDirection: "column",
        }}
      >
        {product &&
          product.map((item, index) => (
            <View
              key={item.id}
              style={{
                width: "100%",
                height: 140,
                padding: 5,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: "#ccc",
                borderStyle: "solid",
                display: "flex",
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => handleImageClick(item)}
                style={{
                  marginRight: 20,
                }}
              >
                <Image source={item.img} />
              </TouchableOpacity>
              <View
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Sản phẩm {index + 1}
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontSize: 16,
                  }}
                >
                  Price: {item.price}$
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                  }}
                >
                  quantity: {item.quantity}
                </Text>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});

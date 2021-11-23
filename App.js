import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
// icons
import { Ionicons } from "@expo/vector-icons";

// svg
import Svg, { Path } from "react-native-svg";
import Item from "./Item";

export default function App() {
  const list = [
    {
      name: "Bike Jacket Softshell Warm",
      stars: "⭐⭐⭐⭐★",
      price: "$99",

      Img: require("./assets/blue.png"),
    },
    {
      name: "Pink Hoody Marino",
      stars: "⭐⭐⭐★★",
      price: "$80",
      Img: require("./assets/pink.png"),
    },
    {
      name: "Hooded Jacket Classic",
      stars: "⭐⭐⭐⭐⭐",
      price: "$140",
      Img: require("./assets/green.png"),
    },
    {
      name: "Red Woman Jacket",
      stars: "⭐⭐⭐⭐★",
      price: "$114",
      Img: require("./assets/red.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Item/>
      {/* Top Content */}
      {/* <View style={styles.top}>
        <View style={styles.arr_cart}>
          <View style={[styles.arrows, styles.shadowProp]}>
            <Ionicons name="arrow-back-sharp" size={30} color="black" />
          </View>
          <View style={[styles.arrows, styles.shadowProp]}>
            <Ionicons name="md-cart-outline" size={30} color="blue" />
          </View>
        </View>
        <View style={styles.title_search}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Woman Jacket</Text>
          <View style={[styles.textInput, styles.shadowProps]}>
            <TextInput placeholder="search Jacket" />
            <Text style={{ color: "blue" }}>filter</Text>
          </View>
        </View>
      </View> */}
      {/* Cloth Content */}
      {/* <View style={styles.shopCloth}>
        <FlatList
          data={list}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.item}>
                <View style={styles.images}>
                  <Svg
                    style={styles.svg}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Path
                      fill="white"
                      d="M38.5,-64.4C50.8,-60.5,61.3,-50.9,67.7,-39.3C74.2,-27.6,76.7,-13.8,74.9,-1C73.1,11.7,67.1,23.5,61.1,35.9C55,48.4,49.1,61.5,38.9,67.8C28.7,74,14.4,73.3,0.9,71.8C-12.6,70.2,-25.1,67.7,-38.2,63.2C-51.2,58.6,-64.8,51.9,-71.6,41C-78.4,30.2,-78.4,15.1,-76.3,1.2C-74.1,-12.6,-69.8,-25.2,-62.4,-34.9C-54.9,-44.6,-44.2,-51.4,-33.3,-55.9C-22.4,-60.4,-11.2,-62.7,1.1,-64.7C13.5,-66.6,26.9,-68.3,38.9,-64.4Z"
                      transform="translate(100 100)"
                    />
                    <Image
                      style={[styles.image, { width: 80, height: 80 }]}
                      source={item.Img}
                    />
                  </Svg>
                </View>
                <View style={styles.description}>
                  <Text style={[{ fontSize: 20, fontWeight: "200" }]}>
                    {item.name}
                  </Text>
                  <Text style={[{ color: "grey", fontSize: 10 }]}>
                    {item.stars}
                  </Text>
                  <Text
                    style={[
                      { color: "#837ebe", marginVertical: 10, fontSize: 19},
                    ]}>
                    {item.price}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4fc",
  },
  
  top: {
    flex: 0.5,
    marginHorizontal: 15,
  },
  arr_cart: {
    flex: 0.1,
    marginVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  arrows: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  shadowProp: {
    shadowRadius: 3,
    shadowOpacity: 0.2,
    shadowColor: "#171717",
    shadowOffset: { width: 1, height: 4 },
  },
  shadowProps: {
    shadowRadius: 3,
    shadowOpacity: 0.02,
    shadowColor: "#171717",
    shadowOffset: { width: 2, height: 20 },
  },
  title_search: {
    flex: 1,
    marginVertical: 60,
    marginHorizontal: 10,
  },
  textInput: {
    height: 40,
    borderRadius: 10,
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "white",
    justifyContent: "space-between",
    padding: 10,
  },
  shopCloth: {
    flex: 1,
  },
  image: {
    left: 12,
  },
  item: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 8,
    marginHorizontal: 5,
  },

  description: {
    marginHorizontal: 10,
    marginVertical: 9,
  },

  images: {
    width: 90,
    height: 0,
  },

  svg: {
    width: 100,
    height: 120,
  },
});

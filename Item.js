import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// icons
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// svg
import Svg, { Path } from "react-native-svg";

export default function Item() {
  const list = [
    {
      name: "Red Woman Jacket",
      stars: "⭐⭐⭐⭐★",
      price: "$114",
      Img: require("./assets/red.png"),
    },
  ];
  const price = list.map((x) => x.price);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      {/* Top Content */}
      <View style={styles.top}>
        <View style={styles.arr_cart}>
          <View style={[styles.arrows, styles.shadowProp]}>
            <Ionicons name="arrow-back-sharp" size={30} color="black" />
          </View>
          <View style={[styles.shadowProp, { flexDirection: "column" }]}>
            <View style={styles.arrows}>
              <Ionicons name="md-cart-outline" size={30} color="blue" />
            </View>
            <View style={[{ marginVertical: 20 }, styles.arrows]}>
              <MaterialIcons name="favorite-border" size={24} color="blue" />
            </View>
          </View>
        </View>
      </View>
      {/* Cloth Content */}
      <View style={styles.shopCloth}>
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
                      d="M42.7,-48C53.2,-32.2,58.2,-16.1,58,-0.2C57.8,15.7,52.5,31.4,41.9,39.9C31.4,48.3,15.7,49.5,-3,52.5C-21.7,55.5,-43.4,60.3,-57.8,51.9C-72.1,43.4,-79.1,21.7,-75.3,3.8C-71.4,-14,-56.8,-28.1,-42.4,-43.8C-28.1,-59.6,-14,-77.2,1,-78.2C16.1,-79.3,32.2,-63.8,42.7,-48Z"
                      transform="translate(100 100)"
                    />
                    <Image
                      style={[styles.image, { width: 250, height: 230 }]}
                      source={item.Img}
                    />
                  </Svg>
                </View>
                <View style={styles.description}>
                  <Text style={[{ fontSize: 20, fontWeight: "500" }]}>
                    {item.name}
                  </Text>
                  <Text style={[{ color: "grey", fontSize: 10 }]}>
                    Review: {item.stars}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.line}></View>
        <View>
          <Text style={{marginHorizontal: 20,}}>
            Its a long established fact a reader will be distracted by a
            readable content of page.
          </Text>
        </View>
        <View style={styles.material}>
          <Text style={{marginHorizontal: 20,}}>Material : 92% Polyester, 9% elastane</Text>
        </View>
        <View style={styles.sizes}>
          <View style={styles.size}><Text>XS</Text></View>
          <View style={styles.size}><Text >S</Text></View>
          <View style={[styles.size,{ backgroundColor: '#767def'}]}><Text>M</Text></View>
          <View style={styles.size}><Text>L</Text></View>
          <View style={styles.size}><Text>XL</Text></View>
        </View>
        <View style={styles.price}>
          <View>
          <Text style={{color: "white", fontSize: 10,}}>Total Amount</Text>
          <Text
            style={[
              { color: "white", fontSize: 25, fontWeight: "500", bottom: 0 },
            ]}
          >
            {price}
          </Text>
          </View>
          <TouchableOpacity style={styles.btn}>
             <Text>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4fc",
  },
  top: {
    flex: 0.07,
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
  shopCloth: {
    flex: .9,
    flexDirection: "column",
    alignItems: "center",
  },
  images: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    height: 60, 
  },
  image: {
    left: 60,
    justifyContent: "center",
  },
  item: {
    flex: 0.4,
    flexDirection: "column",
    justifyContent: "center",
    marginVertical: 7,
    marginHorizontal: 5,
  },
  svg: {
    width: 400,
    height: 300,
  },
  description: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 175,
  },
  info: {
    flex: 1,
  },
  line: {
    backgroundColor: "#767def",
    marginHorizontal: 20,
    marginVertical: 10,
    width: 60,
    height: 5,
  },
  material: {
     backgroundColor: "white",
     justifyContent: "center",
     marginVertical: 20,
     width: '90%',
     height: 50,
  },
  sizes: {
     justifyContent: "space-evenly",
     alignItems: "center",
     flexDirection: "row",
     marginHorizontal: 10,
     width: "80%",
     padding: 10,
   },
   size: {
      justifyContent: "center",
      backgroundColor: "white",
      alignItems: "center",
      borderRadius: 5,
      height: 35,
      width: 30,
      marginHorizontal: 5,
  },
  price: {
     backgroundColor: "#767def",
     alignItems: "center",
     marginHorizontal: 20,
     justifyContent: "space-between",
     flexDirection: "row",
     borderRadius: 7,
     padding: 8,
     height: 70,
     marginVertical: 20,
  },
  btn: {
     backgroundColor: "#4e49d9",
     padding: 8,
     borderRadius: 7,
  }
});

// import React from "react";
// import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
// import Carousel from "react-native-new-snap-carousel";

// const HomeScreen = () => {
//   const carouselData = [
//     { image: require("../../assets/sale.jpg") },
//     { image: require("../../assets/sale.jpg") },
//     { image: require("../../assets/sale.jpg") },
//   ];

//   const handleShopNowPress = () => {
//     // handle navigation to shopping page
//   };

//   const renderItem = ({ item }) => (
//     <View style={styles.carouselItem}>
//       <Image source={item.image} style={styles.carouselImage} />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Carousel
//         data={carouselData}
//         renderItem={renderItem}
//         sliderWidth={350}
//         itemWidth={300}
//         loop={true}
//         autoplay={true}
//       />
//       <TouchableOpacity
//         style={styles.shopNowButton}
//         onPress={handleShopNowPress}
//       >
//         <Text style={styles.shopNowButtonText}>Shop Now</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   carouselItem: {
//     width: 300,
//     height: 200,
//     borderRadius: 10,
//     overflow: "hidden",
//   },
//   carouselImage: {
//     width: "100%",
//     height: "100%",
//     resizeMode: "cover",
//   },
//   shopNowButton: {
//     backgroundColor: "#4caf50",
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 5,
//     marginTop: "auto",
//     marginBottom: 20,
//   },
//   shopNowButtonText: {
//     color: "#fff",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
// });

// export default HomeScreen;

import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Slider from "../components/Slider";

const HomeSceen = () => {
  return (
    <SafeAreaView>
      <Slider />
    </SafeAreaView>
  );
};

export default HomeSceen;

const styles = StyleSheet.create({});

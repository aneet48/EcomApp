import React from "react";
import { Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";
var styles = {
  wrapper: {
    // height: 300
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5"
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
  }
};

const Banner = () => {
  return (
    <Swiper
      style={styles.wrapper}
      showsButtons
      //   height={300}
      showsButtons={false}
      autoplay
      paginationStyle={{
        bottom: 2
        // left: null,
        // right: 10
      }}
      loop
      dot={
        <View
          style={{
            backgroundColor: "#fff",
            width: 12,
            height: 4,
            // borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3
          }}
        />
      }
      activeDot={
        <View
          style={{
            backgroundColor: "#000",
            width: 12,
            height: 4,
            // borderRadius: 6,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3
          }}
        />
      }
    >
      <View style={styles.slide2}>
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1515023677547-593d7638cbd6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
      <View style={styles.slide1}>
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1538561690977-f076de7e4fd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <View style={styles.slide3}>
        <Image
          source={{
            uri:
              "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80"
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </Swiper>
  );
};

export default Banner;

import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { APP_HORIZONTAL_MARGIN } from "../../theme/constants";
import Icon from "react-native-vector-icons/dist/Feather";
import { OSWALD_MEDIUM, OSWALD, OSWALD_BOLD } from "../../theme/fonts";
import RangeSlider from "rn-range-slider";
const defaultLow = 500;
const defaultHigh = 10000;

const sizes = ["xl", "xxl", "l", "m", "s", "xs"];

const Filter = props => {
  const [lowrange, setlowrange] = useState(defaultLow);
  const [highrange, sethighrange] = useState(defaultHigh);
  return (
    <View style={styles.wrapper}>
      <View style={styles.filterContainer}>
        <View style={styles.filterHeader}>
          <View style={styles.flex}>
            <TouchableOpacity
              onPress={() => {
                props.closeModal();
              }}
            >
              <Icon name="x" size={30} />
            </TouchableOpacity>
          </View>
          <Text style={[styles.flex, styles.headerTitle]}>FILTER</Text>
          <View style={styles.flex} />
        </View>

        <View style={styles.option}>
          <Text style={styles.menuTitle}>Price Range</Text>

          <RangeSlider
            style={{ width: "100%", height: 80 }}
            gravity={"center"}
            min={defaultLow}
            max={defaultHigh}
            step={100}
            selectionColor="#000"
            blankColor="#f618"
            labelBackgroundColor="#000"
            labelBorderColor="#000"
            textSize={12}
            labelTextColor="#fff"
            onValueChanged={(low, high, fromUser) => {
              setlowrange(low);
              sethighrange(high);
            }}
          />
          <View style={styles.priceWrapper}>
            <Text style={styles.range}>${lowrange}</Text>
            <Text style={styles.range}>${highrange}</Text>
          </View>
        </View>
        <View style={styles.option}>
          <Text style={styles.menuTitle}>Sizes</Text>
          <View style={styles.sizes}>
            {sizes.map((item, index) => (
              <View style={styles.sizeItem} key={`index-${index}`}>
                <Text
                  style={
                    index == 1 || index == 2
                      ? styles.sizeTextSelected
                      : styles.sizeText
                  }
                >
                  {" "}
                  {item}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
  filterContainer: {
    flex: 1,
    marginVertical: APP_HORIZONTAL_MARGIN,
    marginHorizontal: APP_HORIZONTAL_MARGIN
  },
  wrapper: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, .9)"
  },
  filterHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerTitle: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: OSWALD_MEDIUM
  },
  priceWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
    // marginVertical: 15
  },
  range: {
    fontSize: 15,
    fontFamily: OSWALD_MEDIUM
  },
  option: {
    marginVertical: 20
  },
  menuTitle: {
    fontSize: 16,
    fontFamily: OSWALD
  },
  sizes: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  sizeItem: {
    height: 60,
    width: 60,
    // borderRadius: 50,
    justifyContent: "center",
    marginRight: 10
  },
  sizeText: {
    textTransform: "uppercase",
    backgroundColor: "#fff",
    fontFamily: OSWALD_BOLD,
    color: "#999",
    // borderRadius: 50,
    // padding: 10,
    // marginRight: 10,
    textAlign: "center"
  },
  sizeTextSelected: {
    textTransform: "uppercase",
    backgroundColor: "#000",
    fontFamily: OSWALD_BOLD,
    color: "#fff",
    // borderRadius: 50,
    // padding: 10,

    textAlign: "center"
  }
});

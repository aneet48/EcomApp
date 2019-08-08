import React from "react";
import { View, TouchableOpacity ,Text,StyleSheet,ScrollView} from "react-native";
import Icon from "react-native-vector-icons/dist/Feather";
import Banner from "./Banner";
import OfferButton from "./OfferButton";
import BestSeller from "./BestSeller";
import ForWomen from "./ForWomen";
import ForMen from "./ForMen";
import ForKIds from "./ForKIds";
import LocateStore from "./LocateStore";
import Filtered from "./Filtered";
import { OSWALD_MEDIUM } from "../../theme/fonts";
const Home = () => {
  return (
    <ScrollView>
      <View style={{ height: 150 }}>
        <Banner />
      </View>
      <View style={styles.container}>
        <View style={styles.section}>
          <OfferButton />
        </View>
        <View style={styles.section}>
          <BestSeller />
        </View>
        <View style={styles.section}>
          <ForWomen />
        </View>
        <View style={styles.section}>
          <ForMen />
        </View>
        <View style={styles.section}>
          <ForKIds />
        </View>
        <View style={styles.section}>
          <LocateStore />
        </View>
      </View>
    </ScrollView>
  );
};

Home.navigationOptions = ({ navigation }) => {
  return {
    title: "HOME",
    headerTitleStyle: {
      fontSize: 16,
      textAlign: "center",
      alignSelf: "center",
      flex: 1,
      fontFamily: OSWALD_MEDIUM,
      color: "#000"
    },
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Icon name="menu" style={{ paddingLeft: 20 }} size={20} />
      </TouchableOpacity>
    ),
    headerRight: (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity>
          <Icon
            name="shopping-bag"
            style={{ paddingRight: 20, color: "#000" }}
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="search" style={{ paddingRight: 20 }} size={20} />
        </TouchableOpacity>
      </View>
    )
  };
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom:20
  },
  section:{
    marginTop:10
  }
});
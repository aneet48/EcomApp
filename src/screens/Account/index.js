import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/dist/Feather";
import IconFont from "react-native-vector-icons/dist/FontAwesome";
import { OSWALD_MEDIUM, OSWALD_BOLD, OSWALD_LIGHT } from "../../theme/fonts";
import { TextInput } from "react-native-gesture-handler";
const Account = () => {
  const [showLogin, setshowLogin] = useState(true);
  const login = () => {
    return (
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.heading}>LOGO</Text>
          <Text style={styles.subheading}>
            Log in to your account & explore the world of gorgeous fashion.
          </Text>
        </View>

        <View>
          <Text style={styles.infomsg}>- Log in with email</Text>

          <View>
            <TextInput placeholder="Email" />
            <TextInput placeholder="Password" />
            <View style={styles.submitBtn}>
              <Text style={styles.submitBtnText}>log in</Text>
            </View>
          </View>

          <Text style={styles.infomsg}>- or continue with</Text>
          <View style={styles.social}>
            <View style={styles.socialBtn}>
              <IconFont name="facebook" size={25} style={styles.socialicon} />
              <Text style={styles.socialtext}> FACEBOOK</Text>
            </View>
            <View style={styles.socialBtn}>
              <IconFont name="google" size={25} style={styles.socialicon} />
              <Text style={styles.socialtext}> GOOGLE</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => setshowLogin(false)}>
          <View style={styles.footer}>
            <Text style={styles.footerMsg}>
              New here? <Text style={styles.footerLink}>Sign Up </Text> now
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  const register = () => {
    return (
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.heading}>LOGO</Text>
          <Text style={styles.subheading}>
            Create your account & explore the world of gorgeous fashion.
          </Text>
        </View>

        <View>
          <Text style={styles.infomsg}>- Create account quickly with</Text>
          <View style={styles.social}>
            <View style={styles.socialBtn}>
              <IconFont name="facebook" size={25} style={styles.socialicon} />
              <Text style={styles.socialtext}> FACEBOOK</Text>
            </View>
            <View style={styles.socialBtn}>
              <IconFont name="google" size={25} style={styles.socialicon} />
              <Text style={styles.socialtext}> GOOGLE</Text>
            </View>
          </View>
        </View>
        <Text style={styles.infomsg}>- or with email</Text>

        <View>
          <TextInput placeholder="Email" />
          <TextInput placeholder="Password**" />
          <TextInput placeholder="Mobile No(for message updates)" />
          <TextInput placeholder="Full Name" />
          <View style={styles.submitBtn}>
            <Text style={styles.submitBtnText}>Sign up</Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => setshowLogin(true)}>
          <View style={styles.footer}>
            <Text style={styles.footerMsg}>
              Already have an account?{" "}
              <Text style={styles.footerLink}>Log in</Text> now
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  return (
    <View style={styles.container}>{showLogin ? login() : register()}</View>
  );
};

Account.navigationOptions = ({ navigation }) => {
  return {
    title: "ACCOUNT",
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
          flex: 1
        }}
      />
    )
  };
};
export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    justifyContent: "center",
    alignItems: "center"
  },
  heading: {
    fontSize: 35,
    fontFamily: OSWALD_BOLD,
    textTransform: "uppercase",
    marginBottom: 20
  },
  subheading: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: OSWALD_LIGHT
    //   textTransform:''
  },
  infomsg: {
    textAlign: "center",
    fontSize: 14,
    color: "gray",
    marginVertical: 15
    // fontFamily: OSWALD_LIGHT
    //   textTransform:''
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  socialBtn: {
    marginHorizontal: 5,
    marginVertical: 20,
    borderWidth: 2,
    borderColor: "#000",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  socialtext: {
    fontSize: 14,
    fontWeight: "bold"
  },
  socialicon: {
    marginRight: 10
  },
  footer: {
    alignItems: "center"
  },
  footerMsg: {
    fontSize: 12,

    color: "gray"
  },
  submitBtn: {
    marginVertical: 10,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  submitBtnText: {
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 20,
    fontFamily: OSWALD_MEDIUM,
    paddingVertical: 5
  },
  footerLink: {
    color: "blue",
    //   fontSize:16,
    fontWeight: "bold",
    textDecorationLine: "underline"
  }
});

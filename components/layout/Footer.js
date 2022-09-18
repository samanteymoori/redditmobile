import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "white",
    height: 56,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: "auto",
    shadowColor: "#000000",
    shadowOffset: { width: -8, height: 12 },
    shadowOpacity: 0.5,
    shadowRadius: 12,
  },
  footerItemBox: {
    flex: 1,
    alignItems: "center",
    minWidth: 90,
    justifyContent: "center",
    alignItems: "center",
  },
  footerLogo: {
    height: 24,
    width: 24,
    alignItems: "center",
  },
});
function FooterItem(item) {
  return (
    <View style={styles.footerItemBox}>
      <Image style={styles.footerLogo} source={item.icon} />
    </View>
  );
}
const Footer = ({ navigation }) => {
  const menus = [
    {
      name: "home",
      icon: require("../../assets/icons/home.png"),
      route: "Detail",
    },
    {
      name: "explore",
      icon: require("../../assets/icons/globe.png"),
      route: "Home",
    },
    {
      name: "messages",
      icon: require("../../assets/icons/message-circle.png"),
      route: "Home",
    },

    {
      name: "inbox",
      icon: require("../../assets/icons/inbox.png"),
      route: "Home",
    },
  ];

  return (
    <>
      <View style={styles.container}>
        {menus.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate("Home")}
          >
            <View key={item.name}>{FooterItem(item, navigation)}</View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};
export default Footer;

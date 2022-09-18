import { View, Image, Text, StyleSheet } from "react-native";

import tw from "tailwind-react-native-classnames";

const ProfileAvatar = ({ size, img_name, style }) => {
  return (
    <>
      <Image
        style={tw`w-${size} h-${size} ${style} `}
        source={{
          uri: img_name ? img_name : require(`../../assets/icons/reddit.png`),
        }}
      />
    </>
  );
};
export default ProfileAvatar;

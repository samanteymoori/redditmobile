import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";

import tw from "tailwind-react-native-classnames";

const CommentHeader = () => {
  return (
    <>
      <View style={tw`flex flex-row w-full`}>
        <Text style={tw`font-bold text-xl self-center`}>Best Comments</Text>
        <TouchableOpacity style={tw`w-4 ml-8 bg-transparent self-center`}>
          <Image
            source={{
              uri: require("../../assets/icons/arrow-rect.png"),
            }}
            style={tw`w-5 h-5 `}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default CommentHeader;

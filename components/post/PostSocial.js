import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

import tw from "tailwind-react-native-classnames";

const PostSocial = ({ navigation, route, postData }) => {
  return (
    <>
      <View style={tw`flex flex-row w-full mt-4`}>
        <Image
          style={tw`w-4  ml-auto mr-2`}
          source={{
            uri: require("../../assets/icons/arrow-up.png"),
          }}
        />
        <Text style={{ fontFamily: "Poppins", ...tw`text-xs` }}>
          {postData?.data?.score < 1000
            ? postData?.data?.score
            : `${(postData?.data?.score / 1000).toFixed(1).replace(".0", "")}K`}
        </Text>
        <Image
          style={tw`w-4  ml-2 mr-auto`}
          source={{
            uri: require("../../assets/icons/arrow-down.png"),
          }}
        />

        <TouchableOpacity
          style={tw`w-4 mr-2`}
          onPress={() =>
            navigation.navigate(`Detail`, {
              permalink: postData?.data?.permalink,
            })
          }
        >
          <Image
            source={{
              uri: require("../../assets/icons/comment.png"),
            }}
            style={tw`w-5 h-5 `}
          />
        </TouchableOpacity>

        <Text
          testID="post-ups"
          style={{ fontFamily: "Poppins", ...tw`text-xs` }}
        >
          {postData?.data?.num_comments < 1000
            ? postData?.data?.num_comments
            : `${(postData?.data?.num_comments / 1000)
                .toFixed(1)
                .replace(".0", "")}K`}
        </Text>
        <Image
          style={tw`w-4 mr-2 ml-auto`}
          source={{
            uri: require("../../assets/icons/share.png"),
          }}
        />
        <Text style={{ fontFamily: "Poppins", ...tw`mr-auto text-xs` }}>
          Share
        </Text>
      </View>
    </>
  );
};
export default PostSocial;

import { View, Image, Text, StyleSheet } from "react-native";

import tw from "tailwind-react-native-classnames";
import ProfileAvatar from "../profile/ProfileAvatar";
const PostHeader = ({ postData }) => {
  return (
    <>
      <View style={tw`flex flex-row w-full`}>
        <ProfileAvatar size={8} />
        {postData?.data?.subreddit_name_prefixed && (
          <Text
            testID="post-subreddit-name-prefixed"
            style={tw`flex-1 self-center ml-2 flex-auto w-full `}
          >
            {postData?.data?.subreddit_name_prefixed}
          </Text>
        )}
        <Image
          style={tw`w-6 h-6  self-center`}
          source={{
            uri: require("../../assets/icons/three-dot.png"),
          }}
        />
      </View>
    </>
  );
};
export default PostHeader;

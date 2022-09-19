import { View, Image, Text, StyleSheet, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import PostHeader from "./PostHeader";
import PostSocial from "./PostSocial";
import PostBody from "./PostBody";

const Post = ({ navigation, route, postData }) => {
  return (
    <>
      <View style={tw`bg-white  rounded-2xl m-2 p-4`}>
        <View>
          <PostHeader postData={postData} />
          <PostBody postData={postData} />
          <PostSocial navigation={navigation} postData={postData} />
        </View>
      </View>
    </>
  );
};
export default Post;

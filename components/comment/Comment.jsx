import { View, Image, Text, StyleSheet, Button } from "react-native";
import tw from "tailwind-react-native-classnames";
import CommentHeader from "./CommentHeader";
import CommentBody from "./CommentBody";

const Comment = ({ postData, navigation, route }) => {
  return (
    <>
      <View style={tw`bg-white  rounded-2xl m-2 p-4`}>
        <View>
          <CommentHeader />
          <CommentBody commentsData={postData?.data?.replies || []} />
        </View>
      </View>
    </>
  );
};
export default Comment;

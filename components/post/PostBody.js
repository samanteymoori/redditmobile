import { View, Image, Text, StyleSheet } from "react-native";
import tw from "tailwind-react-native-classnames";
const PostBody = ({ postData }) => {
  return (
    <>
      {postData?.data?.title && (
        <Text style={tw`mt-2`} testID="post-title">
          {postData?.data?.title}
        </Text>
      )}
      {postData?.data?.preview?.images?.[0].resolutions?.[2]?.url && (
        <Image
          testID="post-image"
          style={tw`h-40 rounded-lg  mt-2`}
          source={{
            uri: postData?.data?.preview?.images?.[0].resolutions?.[2]?.url?.replace(
              /&amp;/g,
              "&"
            ),
          }}
        />
      )}
      <View>
        <Text style={tw`mt-2 text-gray-400  `}>
          by {postData?.data?.author} . 16h
        </Text>
      </View>
    </>
  );
};
export default PostBody;
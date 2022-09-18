import { View, Image, Text, StyleSheet } from "react-native";

import tw from "tailwind-react-native-classnames";
import ProfileAvatar from "../profile/ProfileAvatar";

const CommentItem = ({ commentItemData, style }) => {
  return (
    <>
      <View style={tw`flex flex-row w-full  ${style}`}>
        <View style={tw` flex  mr-4 `}>
          <ProfileAvatar size={8} style={``} />
        </View>
        <View style={tw`flex-auto self-center`}>
          <Text style={tw`text-gray-400 `}>
            {commentItemData?.data?.author_fullname}
          </Text>
          <Text style={tw`text-black `}>{commentItemData?.data?.body}</Text>
        </View>
        {commentItemData?.data?.replies && (
          <Image
            style={tw`w-6 h-6 self-center `}
            source={{
              uri: require("../../assets/icons/three-dot.png"),
            }}
          />
        )}
      </View>
      <View style={tw`border-l-2  border-gray-200 pl-4 ml-4 mt-4`}>
        {commentItemData?.data?.replies &&
          commentItemData?.data?.replies?.data?.children?.map((item, index) => (
            <CommentItem
              key={index}
              style={`mt-2`}
              commentItemData={item}
            ></CommentItem>
          ))}
      </View>
      {
        <View style={tw`mt-2`}>
          <Text style={{ color: "#FF4500" }}>Reply</Text>
        </View>
      }
    </>
  );
};
export default CommentItem;

import { View, Image, Text, StyleSheet } from "react-native";

import tw from "tailwind-react-native-classnames";
import ProfileAvatar from "../profile/ProfileAvatar";
import CommentItem from "./CommentItem";
const CommentBody = ({ commentsData }) => {
  return (
    <>
      {commentsData.map((item) => (
        <CommentItem commentItemData={item} style={`mt-4`} />
      ))}
    </>
  );
};
export default CommentBody;

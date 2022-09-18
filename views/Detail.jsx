import { StyleSheet, Text, View, Image, Button } from "react-native";
import Post from "../components/post/Post";
import Comment from "../components/comment/Comment";
import tw from "tailwind-react-native-classnames";
import { getPostByPermalink } from "../reddit";
import React, { useState, useEffect } from "react";
const Detail = ({ navigation, route }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    getPostByPermalink(route?.params?.permalink).then((res) => {
      const post = res.data[0].data.children[0];
      post.data.replies = res.data[1].data.children;
      setPost(post);
    });
  }, {});

  return (
    <>
      {post?.data && (
        <View>
          <Post navigation={navigation} postData={post} />
          {post?.data?.replies && (
            <Comment navigation={navigation} postData={post} />
          )}
        </View>
      )}
    </>
  );
};
export default Detail;

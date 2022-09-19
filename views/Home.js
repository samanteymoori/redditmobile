import { StyleSheet, Text, View, Image, Button } from "react-native";
import Post from "../components/post/Post";
import { getAll } from "../reddit";
import React, { useState, useEffect } from "react";
const Home = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);
  // getSnoowrap();
  useEffect(() => {
    getAll().then((res) => {
      setPosts(res?.data?.data?.children.slice(0, 10));
    });
  }, []);

  return (
    <>
      {posts &&
        posts.map((item, index) => (
          <Post key={index} navigation={navigation} postData={item} />
        ))}
    </>
  );
};
export default Home;

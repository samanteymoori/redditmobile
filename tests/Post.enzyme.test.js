import React from "react";
import { shallow } from "enzyme";
import Post from "../components/Post/Post";
import PostBody from "../components/Post/PostBody";
import { postData } from "./fixtures/post-data";

import PostHeader from "../components/post/PostHeader";
import PostSocial from "../components/post/PostSocial";
describe("Testing post component", () => {
  test("Post component structure", () => {
    const wrapper = shallow(<Post />);
    expect(wrapper.find("PostHeader")).toHaveLength(1);
    expect(wrapper.find("PostBody")).toHaveLength(1);
    expect(wrapper.find("PostSocial")).toHaveLength(1);
  });
  test("PostBody Test title & image", () => {
    const wrapper = shallow(<PostBody postData={postData} />);
    expect(wrapper.find("[testID='post-title']")).toHaveLength(1);
    expect(wrapper.find("[testID='post-image']")).toHaveLength(1);
  });
  test("PostHeader Test title & image", () => {
    const wrapper = shallow(<PostHeader postData={postData} />);
    expect(
      wrapper.find("[testID='post-subreddit-name-prefixed']")
    ).toHaveLength(1);
  });
  test("PostSocial Test number of ups", () => {
    const wrapper = shallow(<PostSocial postData={postData} />);
    expect(wrapper.find("[testID='post-ups']")).toHaveLength(1);
  });
});

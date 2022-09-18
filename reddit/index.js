import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.reddit.com/",
  timeout: 20000,
});
export const getAll = () => {
  return instance.get(`/r/all.json`);
};
export const getPostByPermalink = (permalink) => {
  return instance.get(`${permalink}.json`);
};

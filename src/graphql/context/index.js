import { api } from "../../services/api";
import { makeDataLoader } from "../../utils/makeDataLoader";

export const context = () => {
  return {
    api,
    userDataLoader: makeDataLoader.users(api),
    postsDataLoader: makeDataLoader.posts(api)
  };
};

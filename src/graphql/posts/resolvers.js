import { post } from "./queries/postResolvers";
import { posts } from "./queries/postsResolvers";

import { created_at } from "./fields/createdAtResolvers";
import { user } from "./fields/userResolvers";

import { createPost } from "./mutations/createPost";

export const postResolvers = {
  Query: { post, posts },

  Mutation: { createPost },

  Post: { created_at, user },

  PostResult: {
    __resolveType: (post) => {
      if (typeof post.status !== "undefined") return "PostNotFound";
      if (typeof post.id !== "undefined") return "Post";

      return null;
    }
  }
};

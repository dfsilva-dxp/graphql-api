const post = async (_, { id }, { dataSources }) => {
  const response = dataSources.postAPI.getPost(id);

  return response;
};

const posts = async (_, { filter }, { dataSources }) => {
  const response = dataSources.postAPI.getPosts(filter);

  return response;
};

export const postResolvers = {
  Query: { post, posts },

  Post: {
    created_at: (post) => {
      return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
      }).format(new Date(post.createdAt));
    },

    user: async ({ userId }, _, { dataSources }) => {
      const response = await dataSources.userAPI.dataLoader.load(userId);
      return response;
    }
  },

  PostResult: {
    __resolveType: (post) => {
      if (typeof post.status !== "undefined") return "PostNotFound";
      if (typeof post.id !== "undefined") return "Post";

      return null;
    }
  }
};

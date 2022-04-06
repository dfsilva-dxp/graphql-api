export const postResolvers = {
  Query: {
    post: async (_, { id }, { api }) => {
      const data = await api.get(`posts/${id}`).then(({ data }) => data);

      return data;
    },

    posts: async (_, __, { api }) => {
      const data = await api.get("posts").then(({ data }) => data);

      return data;
    }
  }
};

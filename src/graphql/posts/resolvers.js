export const postResolvers = {
  Query: {
    post: async (_, { id }, { api }) => {
      const data = await api.get(`posts/${id}`).then(({ data }) => data);

      return data;
    },
    posts: async (_, { filter }, { api }) => {
      const queryParams = new URLSearchParams(filter);

      const url = queryParams.toString()
        ? `posts/?${queryParams.toString()}`
        : "posts";

      const data = await api.get(url).then(({ data }) => data);

      return data;
    }
  },
  Post: {
    created_at: (post) => {
      return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
      }).format(new Date(post.createdAt));
    }
  }
};

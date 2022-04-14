const post = async (_, { id }, { api }) => {
  const data = await api
    .get(`posts/${id}`)
    .then(({ data }) => data)
    .catch(({ response }) => ({
      status: response.status,
      message: `Post ${response.statusText}`
    }));

  return data;
};

const posts = async (_, { filter }, { api }) => {
  const queryParams = new URLSearchParams(filter);

  const url = queryParams.toString()
    ? `posts/?${queryParams.toString()}`
    : "posts";

  const data = await api.get(url).then(({ data }) => data);

  return data;
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

    user: async ({ userId }, _, { api }) => {
      const data = await api.get(`users/${userId}`).then(({ data }) => data);

      return data;
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

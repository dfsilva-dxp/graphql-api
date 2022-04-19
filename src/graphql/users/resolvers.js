const user = async (_, { id }, { api }) => {
  const data = await api
    .get(`users/${id}`)
    .then(({ data }) => data)
    .catch(({ response }) => ({
      status: response.status,
      message: `User ${response.statusText}`
    }));

  return data;
};

const users = async (_, { filter }, { api }) => {
  const queryParams = new URLSearchParams(filter);

  const url = queryParams.toString()
    ? `users/?${queryParams.toString()}`
    : "users";

  const data = await api.get(url).then(({ data }) => data);

  return data;
};

export const userResolvers = {
  Query: { user, users },

  User: {
    created_at: (user) => {
      return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
      }).format(new Date(user.createdAt));
    },

    posts: async ({ id }, _, { postsDataLoader }) => {
      return postsDataLoader.load(id);
    }
  },

  UserResult: {
    __resolveType: (user) => {
      if (typeof user.status !== "undefined") return "UserNotFound";
      if (typeof user.id !== "undefined") return "User";

      return null;
    }
  },

  UserError: {
    __resolveType: (user) => {
      if (typeof user.status !== "undefined") return "UserNotFound";

      return null;
    }
  }
};

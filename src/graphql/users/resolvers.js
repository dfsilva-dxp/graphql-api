const user = async (_, { id }, { dataSources }) => {
  const response = dataSources.userAPI.getUser(id);

  return response;
};

const users = async (_, { filter }, { dataSources }) => {
  const response = dataSources.userAPI.getUsers(filter);

  return response;
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

    posts: async ({ id }, _, { dataSources }) => {
      const response = await dataSources.postAPI.dataLoader.load(id);
      return response;
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

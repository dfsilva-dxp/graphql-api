export const userResolvers = {
  Query: {
    user: async (_, __, { api }) => {
      const data = await api.get("users/602").then((response) => response.data);

      return data;
    },
    users: async (_, __, { api }) => {
      const data = await api.get("users").then((response) => response.data);

      return data;
    }
  }
};

export const userResolvers = {
  Query: {
    user: async (_, { id }, { api }) => {
      const data = await api
        .get(`users/${id}`)
        .then((response) => response.data);

      return data;
    },
    users: async (_, __, { api }) => {
      const data = await api.get("users").then((response) => response.data);

      return data;
    }
  }
};

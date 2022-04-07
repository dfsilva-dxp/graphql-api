export const userResolvers = {
  Query: {
    user: async (_, { id }, { api }) => {
      const data = await api.get(`users/${id}`).then(({ data }) => data);

      return data;
    },
    users: async (_, { filter }, { api }) => {
      const queryParams = new URLSearchParams(filter);

      const url = queryParams.toString()
        ? `users/?${queryParams.toString()}`
        : "users";

      console.log(url);

      const data = await api.get(url).then(({ data }) => data);

      return data;
    }
  },
  User: {
    created_at: (user) => {
      return new Intl.DateTimeFormat("pt-BR", {
        dateStyle: "short",
        timeStyle: "short"
      }).format(new Date(user.createdAt));
    }
  }
};

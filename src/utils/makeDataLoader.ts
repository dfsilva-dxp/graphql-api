import DataLoader from "dataloader";

// export function makeDataLoader(api, type) {
//   return new DataLoader(async (ids) => {
//     const query = ids.join("&id=");
//     const data = await api.get(`${type}/?id=${query}`).then(({ data }) => data);

//     const users = ids.map((id) => data.find((user) => user.id === id));

//     return users;
//   });
// }

export const makeDataLoader = {
  users: (api) => {
    return new DataLoader(async (ids) => {
      const query = ids.join("&id=");
      const data = await api.get(`users/?id=${query}`).then(({ data }) => data);

      const users = ids.map((id) => data.find((user) => user.id === id));

      return users;
    });
  },
  posts: (api) => {
    return new DataLoader(async (ids) => {
      const query = ids.join("&userId=");
      const data = await api
        .get(`posts/?userId=${query}`)
        .then(({ data }) => data);

      const posts = ids.map((id) => data.filter((post) => post.userId === id));

      return posts;
    });
  }
};

import DataLoader from "dataloader";

export const makeDataLoader = {
  users: (getUsers) => {
    return new DataLoader(async (ids) => {
      const query = ids.join("&id=");
      const data = await getUsers(`users/?id=${query}`);

      const users = ids.map((id) => data.find((user) => user.id === id));

      return users;
    });
  },
  posts: (getPosts) => {
    return new DataLoader(async (ids) => {
      const query = ids.join("&userId=");
      const data = await getPosts(`?userId=${query}`);

      const posts = ids.map((id) => data.filter((post) => post.userId === id));

      return posts;
    });
  }
};

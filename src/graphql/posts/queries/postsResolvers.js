export const posts = async (_, { filter }, { dataSources }) => {
  const response = dataSources.postAPI.getPosts(filter);

  return response;
};

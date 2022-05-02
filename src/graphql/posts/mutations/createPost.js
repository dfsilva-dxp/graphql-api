export const createPost = async (_, { data }, { dataSources }) => {
  return dataSources.postAPI.createPost(data);
};

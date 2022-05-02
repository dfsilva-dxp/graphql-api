export const post = async (_, { id }, { dataSources }) => {
  const response = dataSources.postAPI.getPost(id);

  return response;
};

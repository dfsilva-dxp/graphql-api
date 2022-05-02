export const user = async ({ userId }, _, { dataSources }) => {
  const response = await dataSources.userAPI.dataLoader.load(userId);
  return response;
};

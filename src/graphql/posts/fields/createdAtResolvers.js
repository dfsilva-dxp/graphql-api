export const created_at = (post) => {
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "short",
    timeStyle: "short"
  }).format(new Date(post.createdAt));
};

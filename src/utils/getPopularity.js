export const getPopularity = (comment = {}) => {
  return !comment.reactions ? 0 : Object.values(comment.reactions).reduce((sum, n) => sum + n, 0);
}
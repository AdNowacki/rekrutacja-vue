export const getPopularity = (comment = {}) => {
  if (!comment.reactions) {
    return 0;
  }
  
  return Object.values(comment.reactions).reduce((sum, n) => sum + n, 0);
}
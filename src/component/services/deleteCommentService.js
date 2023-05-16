import http from "./httpServices";
export function deleteComment(commentId) {
  return http.delete("/", { commentId });
}

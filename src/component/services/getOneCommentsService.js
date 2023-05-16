import http from "./httpServices";

export function getOneComment(commentId){
 return http.get("/comments" , {commentId})
}
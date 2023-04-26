// import http from "../component/services/httpServices";
import instance from "../component/services/axiosInstance";
export function deleteComment(commentId){
 return instance.delete(`/${commentId}`)
}

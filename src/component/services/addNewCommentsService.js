import http from "./httpServices";

export function addNewComments(data){
    const token ="SECURE TOKEN !";
    const header= {
        headers:{
            Authorization:`Bearer ${token}`,
        }
    }
    return http.post("",data,header)
}
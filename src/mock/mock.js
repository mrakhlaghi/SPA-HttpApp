import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import commentsDB from "../dataBase/commentsDB.js";
var mock = new MockAdapter(axios);

let dataBase = commentsDB;

mock.onGet("/").reply((config) => {
  if (true && config.commentId) {
    let id = config.commentId;
    let selectedComment = dataBase.find((c) => +c.id === +id);
    return [200, { ...selectedComment }];
  } else {
    return [200, dataBase];
  }
});
mock.onPost("/").reply((config) => {
  let data = JSON.parse(config.data);
  let updatedDatabase = [...dataBase, { ...data }];
  dataBase = updatedDatabase;
  return [200, dataBase];
});

mock.onDelete("/").reply((config) => {
  let id = config.commentId;
  let filteredComments = dataBase.filter((c) => +c.id !== +id);
  dataBase = filteredComments;
  return [200, dataBase];
});
export default mock;

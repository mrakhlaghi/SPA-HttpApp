import { useState } from "react";
import "./NewComment.css";
import { getAllComments } from "../../component/services/getAllCommentsService";
import { addNewComments } from "../../component/services/addNewCommentsService";
import { useNavigate } from "react-router-dom";

const NewComment = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = async () => {
    try {
      await addNewComments({ ...comment, postId: 10 });
      // const { data } = await getAllComments();
      // setComments(data);
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="newComment">
      <h2>Add new comment</h2>
      <div className="newComment_section">
        <label>name</label>
        <input name="name" type="text" onChange={changeHandler} />
      </div>
      <div className="newComment_section">
        <label>email</label>
        <input name="email" type="email" onChange={changeHandler} />
      </div>
      <div className="newComment_section">
        <label>body</label>
        <input name="body" type="text" onChange={changeHandler} />
      </div>
      <button className="btn primary" onClick={postCommentHandler}>
        Add new comment{" "}
      </button>
    </div>
  );
};

export default NewComment;

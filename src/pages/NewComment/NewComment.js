import { createRef, useEffect, useState } from "react";
import "./NewComment.css";
import { addNewComments } from "../../component/services/addNewCommentsService";
import { useNavigate } from "react-router-dom";

const NewComment = () => {
  const [comment, setComment] = useState({
    id: null,
    name: "",
    email: "",
    body: "",
  });
  const navigate = useNavigate();
  const inputRef=createRef()

  useEffect(()=>{
  inputRef.current.focus()

  },[inputRef])
  const changeHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };

  const postCommentHandler = async () => {
    let newComment={ ...comment, id: Date.now() }
    try {
      await addNewComments(newComment);
      navigate("/");
    } catch (error) {}
  };

  return (
    <div className="newComment">
      <h2>Add new comment</h2>
      <div className="newComment_section">
        <label>name</label>
        <input ref={inputRef} name="name" type="text" onChange={changeHandler} />
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

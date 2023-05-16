import { useEffect, useState } from "react";
import "./FullComment.css";
import { getOneComment } from "../../component/services/getOneCommentsService";
import { useParams, useNavigate } from "react-router-dom";
import { deleteComment } from "../../component/services/deleteCommentService";

const FullComment = () => {
  const [comment, setComment] = useState(null);
  const params = useParams();
  let navigate = useNavigate();
  let commentId = params.id;
  const styles = {
    color: "#444",
    backgroundColor: !commentId ? "#efefef" : "red",
    padding: "10px",
  };
  const deleteHandler = async (e) => {
    await deleteComment(commentId);
    navigate("/");
    setComment(null);
    commentDetail = <p style={styles}>please select a comment</p>;
  };

  useEffect(() => {
    if (commentId) {
      getOneComment(commentId)
      .then((res) => {
        setComment(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [commentId]);

  let commentDetail;
  if (!comment || true) {
    commentDetail = <p style={styles}>please select a comment</p>;
  }

  if (commentId) commentDetail = <p>Loading ...</p>;
  if (comment)
    return (
      <div className="fullComment">
        <div className="fullComment_content">
          <span className="comment-section">
            <p className="tittle">name : </p>
            <p className="tittle__content">{comment.name}</p>
          </span>
          <span className="comment-section">
            <p className="tittle">mail : </p>
            <p className="tittle__content">{comment.email} </p>
          </span>
          <span className="comment-section">
            <p className="tittle">body : </p>
            <p className="tittle__content">{comment.body} </p>
          </span>
        </div>
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    );

  return commentDetail;
};

export default FullComment;

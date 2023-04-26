import { useEffect, useState } from "react";
import Comment from "./Comment/Comment";
import "./CommentsList.css";
import { toast } from "react-toastify";
import { getAllComments } from "../services/getAllCommentsService";
import { Link } from "react-router-dom";

const CommentsList = () => {
  const [comments, setComments] = useState(null);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    async function getComments() {
      try {
        const { data } = await getAllComments();
        // console.log(data.slice(0, 7));
        setComments(data);
      } catch (error) {
        setError(true);
      }
    }
    getComments();
  }, []);

  const renderComments = () => {
    let renderedValue = <p className="align-center">Loading ... </p>;
    if (error) {
      renderedValue = <p>Fetching data failed ! </p>;
      toast.error("there is an error !");
    }
    if (comments && !error) {
      renderedValue = comments.map((c) => (
        <Link to={`/comment/${c.id}`} key={c.id}>
          <Comment comment={c} />
        </Link>
      ));
    }

    return renderedValue;
  };

  return <section className="comment-list">{renderComments()}</section>;
};

export default CommentsList;

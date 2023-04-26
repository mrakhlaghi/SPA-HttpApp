import "./Comment.css";
const Comment = ({comment}) => {
  
  const { name, email, body }=comment
  return (
    <div className="comment">
      <span className="comment-section">
        <p className="tittle">name : </p>
        <p className="tittle__content">{name}</p>
      </span>
      <span className="comment-section">
        <p className="tittle">mail : </p>
        <p className="tittle__content">{email} </p>
      </span>
      <span className="comment-section">
        <p className="tittle">body : </p>
        <p className="tittle__content">{body} </p>
      </span>

    </div>
  );
};

export default Comment;

import CommentsList from "../component/Comments/CommentsList";

const HomePage = () => {
  return (
    <section>
      <h2 className="home-page_tittle"> Select a comment</h2>
      <CommentsList />
    </section>
  );
};

export default HomePage;

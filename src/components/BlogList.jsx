import BlogPost from "./BlogPost";

const BlogList = () => {
  const ids = [1, 24, 4, 8, 65, 47, 5, 2];

  return (
    <div className="postContainer">
      {ids.map((id) => {
        return <BlogPost id={id} />;
      })}
    </div>
  );
};

export default BlogList;

const BlogPost = ({ params: { article } }: any) => {
  return (
    <p className="text-2xl">
      Showing the blog post for the slug <strong>{article}</strong>
    </p>
  );
};

export default BlogPost;


const BlogPost = ({params: {article}}) => {
    return(
      <p className="text-2xl">
        Showing the blog post for the 
        slug <strong>{article}</strong>
      </p>
    )
  }
  
  export default BlogPost;
  
import { useEffect, useState } from "react";

function Fetch() {
  const [posts, setPosts] = useState([{ title: "", body: "" }]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        var list = [{ title: "", body: "" }];
        list = data.posts;
        setPosts((prev) =>
          list.map((d) => ({
            ...prev,
            title: d.title,
            body: d.body,
          }))
        );
        setLoading(false);
      });
  }, []);

  return (
    <article>
      {loading ? (
        "Loading....."
      ) : (
        <>
          {posts.map((post) => {
            return (
              <>
                <h1>{post?.title}</h1>
                <p>{post?.body}</p>
              </>
            );
          })}
        </>
      )}
    </article>
  );
}

export default Fetch;

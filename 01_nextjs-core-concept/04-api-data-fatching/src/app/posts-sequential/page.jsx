import { Suspense } from 'react';
import Author from './Author';

export default async function PostsSequential() {
  await new Promise((resolve) => setTimeout(resolve));
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();
  const filteredPosts = posts.filter((post) => post.id % 10 === 1);
  return (
    <div>
      <h1 className="text-3xl text-center pt-6">
        This is the Posts Server Page. <br />
        Total Posts {filteredPosts.length}
      </h1>
      <div className="pt-6 px-20 grid gap-6">
        {filteredPosts.map((post) => {
          return (
            <div key={post.id} className="bg-white text-xl text-black p-4">
              <h2 className="text-2xl">{post.title}</h2>
              <p>Postname: {post.body}</p>
              <Suspense
                fallback={<h2 className="font-bold mt-4">Loading Author...</h2>}
              >
                <Author userId={post.userId} />
              </Suspense>
            </div>
          );
        })}
      </div>
    </div>
  );
}

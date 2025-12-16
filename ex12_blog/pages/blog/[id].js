// pages/blog/[id].js
// This is a dynamic route for each blog post. It uses getStaticPaths and getStaticProps.
// getStaticPaths tells Next.js which blog post pages to generate at build time.
// getStaticProps fetches the data for each post based on the id param.
import fs from 'fs';
import path from 'path';

export async function getStaticPaths() {
  // Read all post IDs from data.json
  const filePath = path.join(process.cwd(), 'ex12_blog', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const posts = JSON.parse(jsonData);
  const paths = posts.map(post => ({
    params: { id: post.id.toString() }
  }));
  return {
    paths,
    fallback: true // fallback true for challenge part
  };
}

export async function getStaticProps({ params }) {
  // Find the post with the matching id
  const filePath = path.join(process.cwd(), 'ex12_blog', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const posts = JSON.parse(jsonData);
  const post = posts.find(p => p.id.toString() === params.id);
  if (!post) {
    return { notFound: true };
  }
  return {
    props: { post }
  };
}

export default function BlogPost({ post }) {
  // If the page is not yet generated, show loading
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

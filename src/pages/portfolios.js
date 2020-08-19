import axios from 'axios';
import BaseLayout from 'components/layouts/BaseLayout';

const RenderPosts = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>{post.title}</li>
    ))}
  </ul>
);

const Portfolios = ({ posts }) => {
  console.log('posts1', posts);

  return (
    <BaseLayout>
      <h1>Portfolios</h1>
      {posts && <RenderPosts posts={posts} />}
    </BaseLayout>
  );
};

Portfolios.getInitialProps = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return { posts: res.data.slice(1, 10) };
  } catch (e) {
    console.error(e);
  }
};

export default Portfolios;

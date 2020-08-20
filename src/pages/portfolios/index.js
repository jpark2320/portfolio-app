import axios from 'axios';
import Link from 'next/link';
import BaseLayout from 'components/layouts/BaseLayout';

const RenderPosts = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>
        <Link as={`/portfolios/${post.id}`} href='/portfolios/[postId]'>
          <a>{post.title}</a>
        </Link>
      </li>
    ))}
  </ul>
);

const Portfolios = ({ posts }) => {
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

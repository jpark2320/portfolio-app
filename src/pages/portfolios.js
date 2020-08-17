import axios from 'axios';
import BaseLayout from 'components/layouts/BaseLayout';

const Portfolios = (props) => {
  const { posts } = props;
  return (
    <BaseLayout>
      <h1>Portfolios</h1>
      <ul>
        {posts &&
          posts.map((post, index) => {
            return <li key={index}>{post.title}</li>;
          })}
      </ul>
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

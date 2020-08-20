import axios from 'axios';
import { useRouter } from 'next/router';

import BaseLayout from 'components/layouts/BaseLayout';

const PortfolioDetail = ({ post }) => {
  const router = useRouter();

  return (
    <BaseLayout>
      <h1>{post.title}</h1>
      <p>Body: {post.body}</p>
      <p>ID: {post.id} </p>
    </BaseLayout>
  );
};

PortfolioDetail.getInitialProps = async ({ query }) => {
  const { postId } = query;
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    return { post: res.data };
  } catch (e) {
    console.error(e);
  }
};

export default PortfolioDetail;

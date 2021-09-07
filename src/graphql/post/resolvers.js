const posts = async (_, { input }, { getPosts }) => {
  const apiFilterInput = new URLSearchParams(input);
  const posts = await getPosts('/?' + apiFilterInput);
  return posts.json();
};

const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();

  if (Math.random() > 0.5) {
    return {
      statusCode: 500,
      message: 'Post timeout!',
      timeOut: 123,
    };
  }

  if (typeof post.id === 'undefined') {
    return {
      statusCode: 404,
      message: 'Post not found',
      postId: id,
    };
  }
  return post;
};

export const postResolvers = {
  Query: {
    posts,
    post,
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== undefined) return 'PostNotFoundError';
      if (typeof obj.timeOut !== undefined) return 'PostTimeOutError';
      if (typeof obj.id !== undefined) return 'Post';
      return null;
    },
  },
  PostError: {
    __resolveType: (obj) => {
      if (typeof obj.postId !== undefined) return 'PostNotFoundError';
      if (typeof obj.timeOut !== undefined) return 'PostTimeOutError';
      return null;
    },
  },
};

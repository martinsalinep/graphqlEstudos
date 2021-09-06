const posts = async () => {
  return [
    {
      id: '1',
      title: 'primeiro',
    },
    {
      id: '2',
      title: 'segundo',
    },
    {
      id: '1',
      title: 'terceiro',
    },
  ];
};

const post = () => {
  return {
    id: '1',
    title: 'first',
  };
};

export const postResolvers = {
  Query: {
    posts,
    post,
  },
};

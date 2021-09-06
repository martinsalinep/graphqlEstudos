const users = () => {
  return [
    {
      id: '1',
      userName: 'Aline',
    },
    {
      id: '2',
      userName: 'Aline',
    },
    {
      id: '3',
      userName: 'Aline',
    },
  ];
};

const user = () => {
  return {
    id: '1',
    userName: 'Bruno',
  };
};

export const userResolvers = {
  Query: {
    user,
    users,
  },
};

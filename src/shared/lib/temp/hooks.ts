export const useAuth = () => {
   return {
      user: {
         name: 'John Lenon',
         email: 'johndoe@gmail.com',
         image: 'https://placehold.co/400',
      },
      isLoading: false,
      isAuthenticated: true,
      login: () => {},
      logout: () => {},
      register: () => {},
   };
};

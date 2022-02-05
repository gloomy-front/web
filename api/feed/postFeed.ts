import { useMutation, postWithToken } from '@/utils/index';

interface IPostFeed {
 category: string,
  title: string,
  content: string
}

const fetchPostFeed = (data: IPostFeed) => {
  return postWithToken('/feed', data);
};

export const usePostFeed = () => {
  return useMutation<IPostFeed>(
    fetchPostFeed,
    {
      onFailure({ error }) {
        return error;
      }
    });
};

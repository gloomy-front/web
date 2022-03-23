import { useMutation, deleteWithToken } from '@/utils/index';

const fetchDeleteFeed = (feedId: number) => {
  return deleteWithToken(`/feed/${feedId}`);
};

export const useDeleteFeed = () => {
  return useMutation(
    fetchDeleteFeed,
    {
      onFailure({ error }) {
        return error;
      }
    });
};

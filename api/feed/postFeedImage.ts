import { useMutation, postWithToken } from '@/utils/index';

const uploadImageAPI = ({ feedId, file }: { feedId: number, file: File }) => {
  const data = new FormData();
  data.append('file', file);

  return postWithToken(`/feed/image/${feedId}`, data, { 'content-type': 'multipart/form-data' });
};

export const usePostFeedImage = () => {
  return useMutation(uploadImageAPI, {
    onFailure({ error }): Promise<void> | void {
      console.log(error);
    }
  });
};

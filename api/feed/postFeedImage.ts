import { useMutation, postWithToken } from '@/utils/index';

const uploadImageAPI = ({ feedId, files }: { feedId: number, files: Array<string> }) => {
  const data = new FormData();
  data.append('file', files[0]);

  return postWithToken(`/feed/image/${feedId}`, { images: data }, { 'content-type': 'multipart/form-data' });
};

export const usePostFeedImage = () => {
  return useMutation(uploadImageAPI, {
    onFailure({ error }): Promise<void> | void {
      console.log(error);
    }
  });
};

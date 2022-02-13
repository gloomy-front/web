import { useMutation, postWithToken } from '@/utils/index';

const uploadImageAPI = ({ feedId, files }: { feedId: number, files: Array<string> }) => {
  const data = new FormData();
  for (let i = 0; i < files.length; i++) {
    data.append('file', files[i]);
  }

  return postWithToken(`/feed/image/${feedId}`, data, { 'content-type': 'multipart/form-data' });
};

export const usePostFeedImage = () => {
  return useMutation(uploadImageAPI, {
    onFailure({ error }): Promise<void> | void {
      console.log(error);
    }
  });
};

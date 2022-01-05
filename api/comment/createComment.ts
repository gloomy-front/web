import { mutateGetComment } from '@/api/comment/getComments';
import { useMutation, postWithToken } from '@/utils/index';

interface ICreateCommunityComment {
  data: { content: string, parentCommentPk: number };
}

const fetchCreateComment = ({ data }: ICreateCommunityComment) => {
  return postWithToken('/feed', data);
};

export const useCreateComment = () => {
  return useMutation<ICreateCommunityComment>(
    fetchCreateComment,
    {
      async onSuccess() {
        await mutateGetComment();
      },
      onFailure({ error }) {
        return error;
      }
    });
};

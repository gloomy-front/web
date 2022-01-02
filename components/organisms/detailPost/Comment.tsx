import styled from 'styled-components';

import { Layout } from '@/styles/theme';
import { CommentItemProps } from '@/types/index';
import { MoreComponent } from '@/components/organisms/detailPost';

const CommentItem = styled.li`
  ${Layout.flexRowBetweenCenter}
  width: 100%;
  height: min-content;
  margin: 0;
  padding: 8px 0;
  border-bottom: 1px solid ${({ theme }) => theme.GRAY02};
`;
const CommentTextContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 16px;
`;
const CommentInfo = styled.p`
  color: ${({ theme }) => theme.GRAY05};
  font-size: 14px;
  line-height: 21px;
  margin: 0;
  padding-bottom: 4px;
`;
const CommentContent = styled.p`
  color: ${({ theme }) => theme.GRAY07};
  font-size: 15px;
  line-height: 22px;
  margin: 0;
`;
const CommentBtnContainer = styled.div`
  width: 40px;
  height: 100%;
  min-height: 47px;
`;

const Comment = ({ id, writer, createdAt, content }: CommentItemProps) => (
  <CommentItem>
    <CommentTextContainer>
      <CommentInfo>{`${writer} · ${createdAt}`}</CommentInfo>
      <CommentContent>{`${content}`}</CommentContent>
    </CommentTextContainer>
    <CommentBtnContainer>
      <MoreComponent />
    </CommentBtnContainer>
  </CommentItem>
);
export default Comment;

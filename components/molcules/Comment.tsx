import { Icon } from '@/components/atoms';
import { Layout } from '@/styles/theme';
import styled from 'styled-components';

export interface CommentItemProps {
  id: string;
  writer: string;
  createdAt: string;
  content: string;
}

const CommentItem = styled.li`
  ${Layout.flexRowBetweenStart}
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

const Comment = (props: CommentItemProps) => (
  <CommentItem>
    <CommentTextContainer>
      <CommentInfo>{`${props.writer} · ${props.createdAt}`}</CommentInfo>
      <CommentContent>{`${props.content}`}</CommentContent>
    </CommentTextContainer>
    <CommentBtnContainer>
      <Icon.More onClick={() => alert('clicked')} style={{ paddingRight: '16px' }} />
    </CommentBtnContainer>
  </CommentItem>
);
export default Comment;

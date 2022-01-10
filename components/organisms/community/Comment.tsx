import React from 'react';
import styled from 'styled-components';
import { COLOR } from '@/styles/color';
import { Icon } from '@/components/atoms';

type CommentProps = {
  optionHandler: (type: string) => void;
  menuOpenHandler: () => void;
};

function Comment({ optionHandler, menuOpenHandler }: CommentProps) {
  return (
    <Wrapper>
      <HeaderBlock>
        <Username>익명 친구</Username>·<RegTime>115:31</RegTime>
        <Icon.More
          onClick={() => {
            menuOpenHandler();
            optionHandler('comment');
          }}
          style={{ position: 'absolute', right: 0, top: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </HeaderBlock>

      <ContentBlock>나도 담주에 노티드 갈건데 하는데 달달한거 먹고 기분 풀렸다니 다행이야. 힘내자</ContentBlock>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  padding: 9px 15px;
  border-bottom: 1px solid #f2f2f2;
`;

const HeaderBlock = styled.div`
  display: flex;
  position: relative;
`;

const ContentBlock = styled.div`
  padding-top: 4px;
  padding-bottom: 15px;
  font-size: 15px;
  color: ${COLOR.GRAY07};
`;

const Username = styled.span`
  font-size: 14px;
  color: ${COLOR.GRAY05};
`;

const RegTime = styled.span`
  font-size: 14px;
  color: ${COLOR.GRAY05};
`;

export default Comment;

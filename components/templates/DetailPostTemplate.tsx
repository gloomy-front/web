import { Icon, Span, Title } from '@/components/atoms';
import useCalcRegisterDate from '@/hooks/useCalcRegisterDate';
import { COLOR } from '@/styles/color';
import { Layout } from '@/styles/theme';
import router from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import Comment from '@/components/organisms/community/Comment';
import OptionsMenu from '@/components/organisms/community/OptionsMenu';
import Portal from '@/components/organisms/common/Portal';
import { DECLARATION_LIST } from '@/constants/index';

const MainContainer = styled.main`
  ${Layout.flexColStartCenter};
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-bottom: 56px;
`;
const HeaderContainer = styled.section`
  width: 100%;
  box-sizing: border-box;
  padding: 24px 16px 8px 11px;
`;
const HeaderNav = styled.section`
  ${Layout.flexRowBetweenCenter};
  width: 100%;
`;
const TitleSection = styled.section`
  ${Layout.flexColStartStart};
  width: 100%;
  padding: 8px 16px 16px 16px;
  box-sizing: border-box;
  border-bottom: ${({ theme }) => `1px solid ${theme.GRAY02}`};
`;
const CategoryBox = styled.section`
  ${Layout.flexRowCenter};
  height: 20px;
  padding: 0 5px;
  border-radius: 2px;
  font-size: 11px;
  color: ${({ theme }) => theme.GRAY05};
  background-color: ${({ theme }) => theme.GRAY02};
  margin-bottom: 8px;
`;
const ImageSection = styled.section`
  ${Layout.flexRowCenter};
  width: 100%;
  height: 306px;
  padding-top: 16px;
`;
const ContentSection = styled.section`
  padding: 16px;
  color: ${({ theme }) => theme.BLACK};
  font-size: 15px;
  word-break: keep-all;
  white-space: pre-line;
  line-height: 22px;
`;
const ButtonArea = styled.section`
  ${Layout.flexRowStartCenter};
  width: 100%;
  box-sizing: border-box;
  padding: 11px 16px 32px 16px;
`;
const LikeButton = styled.button`
  color: ${({ theme }) => theme.WHITE};
  width: 82px;
  height: 32px;
  background-color: ${({ theme }) => theme.PRIMARY};
  border-radius: 10px;
  border: none;
`;
const CommentSection = styled.section`
  width: 100%;
  height: 152px;
  border-top: 6px solid ${({ theme }) => theme.GRAY02};
`;
const CountBlock = styled.div`
  display: flex;
  height: 46px;
  padding-left: 16px;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  gap: 4px;
`;
const NoCommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 26px;
`;
const NoCommentText = styled.p`
  font-size: 16px;
  color: ${COLOR.GRAY04};
  font-weight: bold;
`;
const FooterContainer = styled.section`
  ${Layout.flexRowCenter};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 56px;
  padding: 10px 16px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;
const FooterSection = styled.section`
  ${Layout.flexRowCenter};
  width: 100%;
`;
const CommentInput = styled.input`
  box-sizing: border-box;
  color: ${({ theme }) => theme.GRAY04};
  height: 36px;
  flex-basis: 100%;
  padding: 7px 8px;
  border: 1px solid ${({ theme }) => theme.GRAY10};
`;
const CommentPostButton = styled.button`
  color: ${({ theme }) => theme.GRAY04};
  box-sizing: border-box;
  width: fit-content;
  height: 36px;
  word-break: keep-all;
  padding: 10px 0 10px 8px;
  border: 0;
  background-color: ${({ theme }) => theme.WHITE}; ;
`;

export type OptionsType = {
  type: string;
  items: string[];
};

const DetailPostTemplate = (): JSX.Element => {
  const [registerDate] = useCalcRegisterDate(post.createdAt ?? '');
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [hasAuth, setHasAuth] = useState(false);
  const [options, setOptions] = useState<OptionsType>({
    type: 'post',
    items: ['게시글 수정', '게시글 삭제'],
  });
  // TODO: 본인 인증 API

  const getOptionItem = () => {
    const items = [];
    for (const [key, value] of Object.entries(DECLARATION_LIST)) {
      items.push(value);
    }
    return items;
  };

  // menu handler
  const optionHandler = (type: string) => {
    if (type === 'post' && hasAuth) {
      setOptions({
        type: 'post',
        items: ['게시글 수정', '게시글 삭제'],
      });
    } else {
      setOptions({
        type: 'comment',
        items: getOptionItem(),
      });
    }
    if (type === 'comment') {
      setOptions({
        type: 'comment',
        items: ['댓글 수정', '댓글 삭제'],
      });
    }
  };
  // toggle modal handler
  const menuOpenHandler = () => {
    setIsOpenMenu(() => !isOpenMenu);
  };
  return (
    <>
      {isOpenMenu && (
        <Portal>
          <OptionsMenu menuOpenHandler={menuOpenHandler} options={options} />
        </Portal>
      )}
      <MainContainer>
        <HeaderContainer>
          <HeaderNav>
            <Icon.Back onClick={() => router.back()} style={{ cursor: 'pointer' }} />
            <Icon.More
              onClick={() => {
                menuOpenHandler();
                optionHandler('post');
              }}
              style={{ cursor: 'pointer' }}
            />
          </HeaderNav>
        </HeaderContainer>
        <TitleSection>
          <CategoryBox>{post.category}</CategoryBox>
          <Title style={{ wordBreak: 'keep-all', paddingBottom: '8px' }}>{post.title}</Title>
          <Span style={{ fontSize: '10px', color: COLOR.GRAY05 }}>{registerDate}</Span>
        </TitleSection>
        <ImageSection>
          {post.thumbnail && (
            <img
              src={'https://picsum.photos/360/306'}
              alt={'contentImage'}
              style={{ width: '100%', height: '306px', objectFit: 'cover' }}
            />
          )}
        </ImageSection>
        <ContentSection>{post.content}</ContentSection>
        <ButtonArea>
          <LikeButton>❤️ 공감 {post.likeCount}</LikeButton>
        </ButtonArea>
        <CommentSection>
          <CountBlock>
            <Title style={{ fontSize: '15px' }}>댓글</Title>
            <Span style={{ fontSize: '15px' }}>{post.commentCount}</Span>
          </CountBlock>
          {post && post.commentCount > 0 ? (
            <Comment optionHandler={optionHandler} menuOpenHandler={menuOpenHandler} />
          ) : (
            <NoCommentBlock>
              <Icon.NoComment />
              <NoCommentText>댓글이 없습니다.</NoCommentText>
            </NoCommentBlock>
          )}
        </CommentSection>
        <FooterContainer>
          <FooterSection>
            <CommentInput type="text" placeholder="💬 댓글을 남겨주세요." />
            <CommentPostButton>등록</CommentPostButton>
          </FooterSection>
        </FooterContainer>
      </MainContainer>
    </>
  );
};
export default DetailPostTemplate;

const post = {
  pk: 5,
  title: '나 아까 노티드 도넛먹고 우울한게 좀 나아졌어',
  content: `아까 안국역쪽 들렀는데 거기 웨이팅이 별로 없대?
    그래서 들어가니까 초코 푸딩도넛 품절 아니길래 잽싸게 사먹었다
    휴 역시 달달한게 우울에는 직빵인듯
    힘내자 내자신아
    너네들도 힘내라`,
  likeCount: 4,
  commentCount: 2,
  createdAt: '2021-10-30 17:32',
  thumbnail: 'https://picsum.photos/240/306',
  color: 'purple',
  category: '직장/이직',
};

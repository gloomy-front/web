import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Icon, Span, Title } from '@/components/atoms';
import { Declaration } from '@/components/organisms';
import { COLOR, Layout } from '@/styles/index';
import { useCalcRegisterDate } from '@/hooks/index';
import { stackRouterBack } from '@/utils/index';
import { useGetFeedDetail } from '@/api/index';
import { CATEGORY_LIST } from '@/constants/index';

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
  width: 100%;
  padding: 16px;
  color: ${({ theme }) => theme.BLACK};
  font-size: 15px;
  word-break: keep-all;
  white-space: pre-line;
  line-height: 22px;
  box-sizing: border-box;
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

const FooterContainer = styled.section`
  ${Layout.flexRowCenter};
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 56px;
  padding: 10px 16px;
  box-sizing: border-box;
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
  background-color: ${({ theme }) => theme.WHITE};;
`;

const DetailPostTemplate = (): JSX.Element => {
  const router = useRouter();
  const feedId = parseInt(router.query['postId'] as string ?? '0');
  const [showDeclaration, setShowDeclaration] = useState<boolean>(false);
  const { data: feed } = useGetFeedDetail(feedId);
  const [registerDate] = useCalcRegisterDate(feed.createdAt ?? '');

  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderNav>
          <Icon.Back onClick={() => stackRouterBack(router)} height={'14px'} style={{ cursor: 'pointer' }}/>
          <Icon.More onClick={() => setShowDeclaration(true)} style={{ cursor: 'pointer' }}/>
        </HeaderNav>
      </HeaderContainer>
      <TitleSection>
        <CategoryBox>{CATEGORY_LIST[feed.category]}</CategoryBox>
        <Title style={{ wordBreak: 'keep-all', paddingBottom: '8px' }}>{feed.title}</Title>
        <Span style={{ fontSize: '10px', color: COLOR.GRAY05 }}>{registerDate}</Span>
      </TitleSection>
      {feed.imageURLs.length > 0 &&
      <ImageSection>
        <img
          src={feed.imageURLs[0]}
          alt={'contentImage'}
          style={{ width: '100%', objectFit: 'cover' }}
        />
      </ImageSection>
      }
      <ContentSection>{feed.content}</ContentSection>
      <ButtonArea>
        <LikeButton>❤️
          공감 {feed.likeCount}</LikeButton>
      </ButtonArea>
      <CommentSection></CommentSection>
      <FooterContainer>
        <FooterSection>
          <CommentInput type="text" placeholder="💬 댓글을 남겨주세요."/>
          <CommentPostButton>등록</CommentPostButton>
        </FooterSection>
      </FooterContainer>
      {showDeclaration && <Declaration closeDispatch={() => setShowDeclaration(false)}/>}
    </MainContainer>
  );
};
export default DetailPostTemplate;
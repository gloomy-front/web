import { useCallback } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { COLOR, Layout } from '@/styles/index';
import { COLOR_TYPE } from '@/types/index';
import { Span, Icon, TextArea } from '@/components/atoms';

const MainContainer = styled.main`
  ${Layout.flexColStartCenter};
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.BLACK};
`;

const HeaderSection = styled.section`
  ${Layout.flexRowBetweenCenter};
  width: 100%;
  height: 70px;
  padding: 0 17px;
  box-sizing: border-box;
`;

const CloseButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.BLACK};
  color: ${({ theme }) => theme.WHITE};
  ${({ disabled, theme }: { disabled?: boolean, theme: COLOR_TYPE }) => {
    return disabled ? `color: ${theme.GRAY08}` : null;
  }};
`;

const InputSection = styled.section`
  ${Layout.flexColStartCenter};
  width: 100%;
  padding: 0 10px;
  box-sizing: border-box;
`;

const ImageIconBox = styled.div`
  position: fixed;
  bottom: 19px;
  left: 19px;
`;

export default function NewPostTemplate(): JSX.Element {
  const router = useRouter();

  const methods = useForm({
    defaultValues: {
      content: ''
    }
  });
  const { handleSubmit, register, watch } = methods;
  const watchContent = watch('content');

  const requestNew = useCallback(async ({ content }) => {
    console.log('New!');
  }, []);

  const onError = useCallback(({ content }) => {
    if (content) {}
  }, []);

  return (
    <MainContainer>
      <HeaderSection>
        <div>
          <Icon.Close fill={COLOR.WHITE} height={'30px'} style={{ cursor: 'pointer' }} onClick={() => router.back()}/>
          <Span style={{ fontSize: '14px', marginLeft: '3px' }}>{'나누고 싶은 생각을 적어주세요'}</Span>
        </div>
        <CloseButton disabled={watchContent.length < 1} onClick={handleSubmit(requestNew, onError)}>{'완료'}</CloseButton>
      </HeaderSection>
      <InputSection>
        <TextArea
          spellCheck={false}
          placeholder={'내용을 입력해주세요'}
          style={{ minHeight: 'calc(100vh - 140px)' }}
          {...register('content', {
            required: '내용을 입력해주세요'
          })}
        />
      </InputSection>
      <ImageIconBox><Icon.Picture /></ImageIconBox>
    </MainContainer>
  );
}
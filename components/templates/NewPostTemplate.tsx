import { useCallback, useRef, useState, useContext } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { COLOR, Layout } from '@/styles/index';
import { COLOR_TYPE } from '@/types/index';
import { Span, Icon, TextArea } from '@/components/atoms';
import { AppAuthorContext } from '@/provider/index';
import { checkPermission, requestPermission } from '@/hooks/index';

const MainContainer = styled.main`
  ${Layout.flexColStartCenter};
  width: 100%;
  min-height: 100vh;
  padding-bottom: 50px;
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

const ImageLabel = styled.label`
  position: fixed;
  bottom: 19px;
  left: 19px;
`;

interface Image {
  filePK: string;
  filePath: string;
}

export default function NewPostTemplate(): JSX.Element {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const authData = useContext(AppAuthorContext);

  const methods = useForm<{ content: string; postImages: Array<Image> }>({
    defaultValues: {
      content: '',
      postImages: []
    }
  });
  const { handleSubmit, register, watch, setValue } = methods;
  const [watchImages, watchContent] = watch(['postImages', 'content']);

  const requestNew = useCallback(async ({ content }) => {
    // console.log('New!');
  }, []);

  const onError = useCallback(({ content }) => {
    if (content) {}
  }, []);

  const registerFile = async (e: any) => {
    const file = e.target.files[0] ?? null;
    const reader = new FileReader();

    if (file) {
      setIsLoading(true);

      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        setIsLoading(false);

        if (typeof (e?.target?.result) === 'string') {
          // dispatch({ filePath: e?.target?.result ?? '', filePK: res.data.filePK });
          setValue('postImages', [{ filePath: e?.target?.result ?? '', filePK: '0' }]);

          if (inputRef.current !== null) {
            inputRef.current.value = '';
          }
        }
      };
      setIsLoading(false);
    }
  };

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
        <div>
          <Span style={{ color: 'white' }}>{'현재 권한 상태 ===> ' + JSON.stringify(authData)}</Span>
        </div>
        <div onClick={() => checkPermission({ permissionType: 'CAMERA' })}>
          <Span style={{ color: 'white' }}>{'카메라 권한 상태'}</Span>
        </div>
        <div onClick={() => checkPermission({ permissionType: 'PHOTO' })}>
          <Span style={{ color: 'white' }}>{'storage 권한 상태'}</Span>
        </div>
        <div onClick={() => requestPermission({ permissionType: 'CAMERA' })}>
          <Span style={{ color: 'white' }}>{'카메라 권한 요청'}</Span>
        </div>
        <div onClick={() => requestPermission({ permissionType: 'PHOTO' })}>
          <Span style={{ color: 'white' }}>{'storage 권한 요청'}</Span>
        </div>
        <TextArea
          spellCheck={false}
          placeholder={'내용을 입력해주세요'}
          style={{ minHeight: 'calc(400px)' }}
          {...register('content', {
            required: '내용을 입력해주세요'
          })}
        />
        {watchImages.length > 0 &&
        <img
          src={watchImages[0].filePath}
          alt={'게시글 사진'}
          style={{ width: 'calc(100% - 32px)' }}
        />
        }
      </InputSection>
      <ImageLabel>
        <Icon.Picture />
        <input
          ref={inputRef}
          style={{ display: 'none' }}
          type='file'
          accept='image/*'
          onChange={registerFile}
          disabled={isLoading}
        />
      </ImageLabel>
    </MainContainer>
  );
}
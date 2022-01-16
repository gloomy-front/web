import { useEffect, useCallback, useRef, useState, useContext, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { COLOR, Layout } from '@/styles/index';
import { COLOR_TYPE } from '@/types/index';
import { Span, Icon, Input, TextArea } from '@/components/atoms';
import { SelectCategory, PhotoPermissionRequestPopup } from '@/components/organisms';
import { AppAuthorContext } from '@/provider/index';
import { isApp, stackRouterBack } from '@/utils/index';
import { checkPermission } from '@/hooks/index';
import { CATEGORY_LIST } from '@/constants/index';
import PhotoPermissionBlockedPopup from '../organisms/common/PhotoPermissionBlockedPopup';

const MainContainer = styled.main`
  ${Layout.flexColStartStart};
  width: 100%;
  min-height: 100vh;
  padding-bottom: 50px;
  margin: 0 auto;
`;

const HeaderSection = styled.section`
  ${Layout.flexRowBetweenEnd};
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.WHITE};
  height: 56px;
  padding: 0 17px 9px;
  box-sizing: border-box;
  border-bottom: ${({ theme }) => `1px solid ${theme.GRAY02}`};
`;

const CategorySection = styled.section`
  ${Layout.flexRowStartCenter};
  width: 100%;
  color: ${({ theme }) => theme.GRAY07};
  padding: 6px 0;
  margin-top: 8px;
  cursor: pointer;
`;

const CloseButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.WHITE};
  color: ${({ theme }) => theme.BLACK};
  font-size: 15px;
  ${({ disabled, theme }: { disabled?: boolean, theme: COLOR_TYPE }) => {
    return `color: ${disabled ? theme.GRAY04 : theme.BLACK}`;
  }};
`;

const InputSection = styled.section`
  ${Layout.flexColStartCenter};
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
`;

const ImageLabel = styled.label`
  ${Layout.flexRowStartCenter};
  width: 100%;
  margin-top: 16px;
  margin-bottom: 6px;
`;

interface Image {
  filePK: string;
  filePath: string;
}

const checkPhotoPermission = () => {
  checkPermission({ permissionType: 'CAMERA' });
  checkPermission({ permissionType: 'PHOTO' });
};

export default function NewPostTemplate(): JSX.Element {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showCategory, setShowCategory] = useState<boolean>(false);
  const [showPhotoPermissionRequestPopup, setShowPhotoPermissionRequestPopup] = useState<boolean>(false);
  const [showPhotoPermissionBlockedPopup, setShowPhotoPermissionBlockedPopup] = useState<boolean>(false);
  const authData = useContext(AppAuthorContext);

  const methods = useForm<{ category: string; title: string; content: string; postImages: Array<Image> }>({
    defaultValues: {
      category: '',
      title: '',
      content: '',
      postImages: []
    }
  });
  const { handleSubmit, register, watch, setValue } = methods;
  const [watchImages, watchContent, watchCategory] = watch(['postImages', 'content', 'category']);

  useEffect(() => {
    if (isApp()) {
      document.addEventListener('visibilitychange', checkPhotoPermission);
    }
    return () => {
      isApp() && document.removeEventListener('visibilitychange', checkPhotoPermission);
    };
  }, []);

  useEffect(() => {
    if (isApp()) {
      checkPhotoPermission();
    }
  }, [watchImages]);

  useEffect(() => {
    if (isApp()) {
      const { CAMERA: cameraAuth, PHOTO: photoAuth } = authData;
      if ((showPhotoPermissionRequestPopup || showPhotoPermissionBlockedPopup) && cameraAuth === 'granted' && photoAuth === 'granted') {
        setShowPhotoPermissionRequestPopup(false);
        inputRef.current && inputRef.current.click();
      }
      if (showPhotoPermissionBlockedPopup && cameraAuth === 'granted' && photoAuth === 'granted' ) {
        setShowPhotoPermissionBlockedPopup(false);
      }
    }
  }, [authData, showPhotoPermissionRequestPopup, showPhotoPermissionBlockedPopup]);

  const requestNewPost = useCallback(async ({ content }) => {
    // console.log('New!');
  }, []);

  const onError = useCallback(({ category, title, content }) => {
    if (title) {
      alert('title');
    } else if (category) {
      alert('category');
    } else if (content) {
      alert('content');
    }
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

  const checkAppAuth = (e: MouseEvent<HTMLInputElement>) => {
    if (isApp()) {
      const { CAMERA: cameraAuth, PHOTO: photoAuth } = authData;

      if (cameraAuth === 'blocked' || photoAuth === 'blocked') {
        e.preventDefault();
        return setShowPhotoPermissionBlockedPopup(true);
      }

      if ((cameraAuth === 'empty' || photoAuth === 'empty') || cameraAuth === 'denied' || photoAuth === 'denied') {
        e.preventDefault();
        return setShowPhotoPermissionRequestPopup(true);
      }
    }
  };

  return (
    <MainContainer>
      <HeaderSection>
        <div
          style={{ cursor: 'pointer', marginBottom: '3px', width: '30px', height: '40px', lineHeight: '70px' }}
          onClick={() => stackRouterBack(router)}
        >
          <Icon.Back height={'14px'} />
        </div>
        <CloseButton disabled={watchContent.length < 1}
                     onClick={handleSubmit(requestNewPost, onError)}>{'저장'}</CloseButton>
      </HeaderSection>
      <InputSection>
        <CategorySection
          {...register('category', {
            required: '카테고리를 선택해주세요'
          })}
          onClick={() => setShowCategory(true)}
        >
          <Span style={{ marginRight: '8px' }}>{watchCategory === '' ? '카테고리 선택' : CATEGORY_LIST[watchCategory]}</Span>
          <Icon.ArrowDown height={'6px'}/>
        </CategorySection>
        <Input
          spellCheck={false}
          placeholder={'고민의 제목'}
          autoComplete={'off'}
          style={{ fontSize: '16px', borderBottom: `1px solid ${COLOR.GRAY02}`, padding: '6px 0' }}
          {...register('title', {
            required: '제목을 입력해주세요'
          })}
        />
        <ImageLabel>
          <Icon.Picture height={'13px'}/>
          <Span style={{ color: COLOR.GRAY05, marginLeft: '6px' }}>{'사진 첨부'}</Span>
          <input
            ref={inputRef}
            style={{ display: 'none' }}
            type='file'
            accept='image/*'
            onClick={checkAppAuth}
            onChange={registerFile}
            disabled={isLoading}
          />
        </ImageLabel>
        {watchImages.length > 0 &&
        <img
          src={watchImages[0].filePath}
          alt={'게시글 사진'}
          style={{ width: 'calc(100% + 32px)' }}
        />
        }
        <TextArea
          spellCheck={false}
          placeholder={'털어놓고 싶은 고민을 공유하세요.'}
          style={{ minHeight: 'calc(400px)', padding: '6px 0' }}
          {...register('content', {
            required: '내용을 입력해주세요'
          })}
        />
      </InputSection>

      {showCategory &&
      <SelectCategory
        selectDispatch={(v) => {
          setValue('category', v);
          setShowCategory(false);
        }}
      />}

      {showPhotoPermissionRequestPopup &&
      <PhotoPermissionRequestPopup closeDispatch={() => setShowPhotoPermissionRequestPopup(false)}/>}
      {showPhotoPermissionBlockedPopup &&
      <PhotoPermissionBlockedPopup closeDispatch={() => setShowPhotoPermissionBlockedPopup(false)}/>}
    </MainContainer>
  );
}
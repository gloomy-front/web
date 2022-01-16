import styled from 'styled-components';

import { Span, Title, Icon } from '@/components/atoms';
import { Popup } from '@/components/molcules';
import { COLOR, Layout } from '@/styles/index';
import { requestMultiPermission } from '@/hooks/index';

const PhotoPermissionContainer = styled.section`
  ${Layout.flexColStartCenter};
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const PhotoPermissionHeader = styled.div`
  ${Layout.flexColStartStart};
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.GRAY03}`}
`;

const PhotoPermissionContent = styled.div`
  ${Layout.flexColStartStart};
  width: 100%;
  margin-top: 21px;
`;

const PermissionTypeBox = styled.div`
  ${Layout.flexRowStartCenter};
  width: 100%;
`;

export default function PhotoPermissionRequestPopup({ closeDispatch }: { closeDispatch(): void; }) {
  return (
    <Popup
      useClose={false}
      type={'TWO'}
      successTitle={'허용'}
      successCallback={() => {
        requestMultiPermission({ permissionTypeList: ['CAMERA', 'PHOTO']});
      }}
      failTitle={'거부'}
      failCallback={() => {
        closeDispatch && closeDispatch();
      }}
    >
      <PhotoPermissionContainer>
        <PhotoPermissionHeader>
          <Title style={{ fontSize: '24px', marginBottom: '10px' }}>
            {'고밍아웃 권한 안내'}
          </Title>
          <Span style={{ color: COLOR.GRAY05, marginBottom: '15px' }}>{'서비스 사용을 위해'}<br/>{'다음의 접근 권한이 필요합니다.'}</Span>
        </PhotoPermissionHeader>
        <PhotoPermissionContent>
          <PermissionTypeBox>
            <Icon.Camera style={{ marginRight: '7px', marginBottom: '2px' }}/>
            <Span style={{ color: COLOR.GRAY07, fontWeight: 700, fontSize: '16px' }}>{'카메라 촬영과 사진'}</Span>
          </PermissionTypeBox>
          <Span style={{ color: COLOR.GRAY05, marginTop: '5px', marginBottom: '20px' }}>
            {'사진 첨부를 위해 사진을 촬영하는 경우'}
          </Span>

          <PermissionTypeBox>
            <Icon.Folder style={{ marginRight: '7px', marginBottom: '2px' }}/>
            <Span style={{ color: COLOR.GRAY07, fontWeight: 700, fontSize: '16px' }}>{'저장공간'}</Span>
          </PermissionTypeBox>
          <Span style={{ color: COLOR.GRAY05, marginTop: '5px' }}>
            {'사진 첨부를 위해 저장공간에 접근하는 경우'}
          </Span>
        </PhotoPermissionContent>
      </PhotoPermissionContainer>
    </Popup>
  );
}

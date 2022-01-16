import styled from 'styled-components';

import { Span, Title } from '@/components/atoms';
import { Popup } from '@/components/molcules';
import { COLOR, Layout } from '@/styles/index';
import { moveToOption } from '@/hooks/index';

const PhotoPermissionContainer = styled.section`
  ${Layout.flexColCenterStart};
  width: 100%;
  padding: 20px 20px 10px;
  box-sizing: border-box;
`;

export default function PhotoPermissionBlockedPopup({ closeDispatch }: { closeDispatch(): void; }) {
  return (
    <Popup
      useClose={false}
      type={'TWO'}
      successTitle={'설정하러 가기'}
      successCallback={() => {
        moveToOption();
      }}
      failTitle={'닫기'}
      failCallback={() => {
        closeDispatch && closeDispatch();
      }}
    >
      <PhotoPermissionContainer>
        <Title style={{ fontSize: '24px', marginBottom: '10px' }}>
          {'권한 허용 필요'}
        </Title>
        <Span style={{ color: COLOR.GRAY05 }}>
          {'카메라와 저장공간에 대한 사용을 거부하였습니다.'}<br/>
          {'기능 사용을 원하실 경우 휴대폰 설정>애플리케이션 관리자에서 권한을 허용해주세요.'}
        </Span>
      </PhotoPermissionContainer>
    </Popup>
  );
}

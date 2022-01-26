import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

import { Icon, Span, Title } from '@/components/atoms';
import { Popup } from '@/components/molcules';
import { AppAuthorNextCallbackContext } from '@/provider/index';
import { COLOR, Layout } from '@/styles/index';
import { requestPermission, requestNotiPermission, checkNotiPermission, checkPermission } from '@/hooks/index';
import { isApp, isIphone } from '@/utils/index';

const ATTPermissionContainer = styled.section`
  ${Layout.flexColStartCenter};
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const ATTPermissionHeader = styled.div`
  ${Layout.flexColStartStart};
  width: 100%;
  border-bottom: ${({ theme }) => `1px solid ${theme.GRAY03}`}
`;

const ATTPermissionContent = styled.div`
  ${Layout.flexColStartStart};
  width: 100%;
  margin-top: 21px;
`;

const PermissionTypeBox = styled.div`
  ${Layout.flexRowStartCenter};
  width: 100%;
`;

export default function ATTPermissionRequestPopup() {
  const [showPermissionPopup, setShowPermissionPopup] = useState<boolean>(false);
  const setNextCallback = useContext(AppAuthorNextCallbackContext);

  useEffect(() => {
    if (isApp()) {
      if (isIphone()) {
        setNextCallback(() => (authCallbackData: any) => {
          const checkNotiDenied = authCallbackData['NOTI'] && authCallbackData['NOTI'] === 'denied';
          const checkATTDenied = authCallbackData['ATT'] && authCallbackData['ATT'] === 'denied';
          (checkNotiDenied || checkATTDenied) && setShowPermissionPopup(true);
        });
      }
      checkNotiPermission();
      checkPermission({ permissionType: 'ATT' });
    }
  }, []);

  const requestATTPermission = () => {
    setShowPermissionPopup(false);
    setNextCallback(() => () => {
      setTimeout(() => requestPermission({ permissionType: 'ATT' }), 500);
    });
    requestNotiPermission();
  };

  return (
    <>
      {showPermissionPopup &&
      <Popup
        useClose={false}
        type={'ONE'}
        successTitle={'확인'}
        successCallback={requestATTPermission}
      >
        <ATTPermissionContainer>
          <ATTPermissionHeader>
            <Title style={{ fontSize: '24px', marginBottom: '10px' }}>
              {'추적 및 알림 허용 필요'}
            </Title>
            <Span style={{ color: COLOR.GRAY05, marginBottom: '15px' }}>{'서비스 사용을 위해'}<br/>{'다음의 접근 권한이 필요합니다.'}</Span>
          </ATTPermissionHeader>
          <ATTPermissionContent>
            <PermissionTypeBox>
              <Icon.Camera style={{ marginRight: '7px', marginBottom: '2px' }}/>
              <Span style={{ color: COLOR.GRAY07, fontWeight: 700, fontSize: '16px' }}>{'추적 허용'}</Span>
            </PermissionTypeBox>
            <Span style={{ color: COLOR.GRAY05, marginTop: '5px', marginBottom: '20px' }}>
              {'소중한 정보는 애플 정책을 기반으로 광고 제공을'}<br/>{'위해서만 사용됩니다.'}
            </Span>

            <PermissionTypeBox>
              <Icon.Folder style={{ marginRight: '7px', marginBottom: '2px' }}/>
              <Span style={{ color: COLOR.GRAY07, fontWeight: 700, fontSize: '16px' }}>{'알림'}</Span>
            </PermissionTypeBox>
            <Span style={{ color: COLOR.GRAY05, marginTop: '5px' }}>
              {'알림을 허용하고 내가 쓴 글에 대한'}<br/>{'다른 익명 친구의 반응을 바로 확인하세요.'}
            </Span>
          </ATTPermissionContent>
        </ATTPermissionContainer>
      </Popup>
      }
    </>
  );
}

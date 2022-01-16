import styled from 'styled-components';

import { Span, Title } from '@/components/atoms';
import { Popup } from '@/components/molcules';
import { COLOR, Layout } from '@/styles/index';
import { requestPermission } from '@/hooks/index';

const ATTPermissionContainer = styled.section`
  ${Layout.flexColCenterStart};
  width: 100%;
  padding: 20px 20px 10px;
  box-sizing: border-box;
`;

export default function ATTPermissionRequestPopup({ closeDispatch }: { closeDispatch(): void; }) {
  return (
    <Popup
      useClose={false}
      type={'ONE'}
      successTitle={'확인'}
      successCallback={() => {
        closeDispatch && closeDispatch();
        requestPermission({ permissionType: 'ATT' });
      }}
    >
      <ATTPermissionContainer>
        <Title style={{ fontSize: '24px', marginBottom: '10px' }}>
          {'추적 허용 필요'}
        </Title>
        <Span style={{ color: COLOR.GRAY05 }}>
          {'최적화된 광고 제공을 위해 추적 허용이 필요합니다.'}<br/>
          {'소중한 정보는 애플 정책을 기반으로'}<br/>
          {'광고 제공을 위해서만 사용됩니다.'}
        </Span>
      </ATTPermissionContainer>
    </Popup>
  );
}

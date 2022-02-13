import styled from 'styled-components';

import { Layout } from '@/styles/theme';
import { FEED_LIST_SIZE } from '@/constants/index';
import { Skeleton } from '@/components/molcules';

const ItemSection = styled.section`
  ${Layout.flexColStartStart};
  width: 100%;
  padding: 24px 16px;
  box-sizing: border-box;
  border-bottom: ${({ theme }) => `1px solid ${theme.GRAY02}`};
`;

const HeaderSection = styled.div`
  ${Layout.flexRowStartCenter};
  width: 100%;
  margin-bottom: 8px;
`;

export default function BoardLoading(): JSX.Element {
  return (
    <>
      {Array.from({ length: FEED_LIST_SIZE }, (v, i) => i).map((item) => (
        <ItemSection key={item}>
          <HeaderSection>
            <Skeleton style={{ height: '22px', width: '100%' }} />
          </HeaderSection>
          <Skeleton style={{ height: '22px', width: '100%' }} />
        </ItemSection>
      ))}
    </>
  );
}

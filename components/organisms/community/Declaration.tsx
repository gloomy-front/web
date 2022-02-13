import { Fragment, useState } from 'react';
import styled from 'styled-components';

import { Layout, COLOR } from '@/styles/index';
import { Title, Span, Icon } from '@/components/atoms';
import { BottomPopup } from '@/components/molcules';
import { DECLARATION_LIST } from '@/constants/index';

const DeclarationSection = styled.section`
  ${Layout.flexColStartStart};
  box-sizing: border-box;
  width: 100%;
  padding: 0 16px 8px;
`;

const DeclarationContent = styled.div`
  ${Layout.flexColStartStart};
  width: 100%;
`;

const DeclarationItem = styled.div`
  ${Layout.flexRowStartCenter};
  width: 100%;
  height: 48px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  display: none;
`;

export default function Declaration({ closeDispatch }: { closeDispatch: () => void }): JSX.Element {
  const [checkedValue, setCheckedValue] = useState<string>('');

  return (
    <BottomPopup
      useClose={true}
      failCallback={closeDispatch}
      type={'NONE'}
    >
      <DeclarationSection>
        <Title style={{ color: COLOR.GRAY07, paddingTop: '24px', paddingBottom: '25px' }}>{'신고 사유를 선택하세요'}</Title>
        <DeclarationContent>
          {Object.keys(DECLARATION_LIST).map((item) => (
            <Fragment key={item}>
              <RadioInput
                type={'radio'}
                id={item}
                value={checkedValue}
                checked={checkedValue === item}
                onChange={() => setCheckedValue(item)}
              />
              <label htmlFor={item} onClick={() => { setCheckedValue(item); closeDispatch && closeDispatch(); }}>
                <DeclarationItem>
                  <Icon.Check height={'14px'} style={{ marginRight: '5px' }}/>
                  <Span style={{ color: COLOR.GRAY07 }}>{DECLARATION_LIST[item]}</Span>
                </DeclarationItem>
              </label>
            </Fragment>
          ))}
        </DeclarationContent>
      </DeclarationSection>
    </BottomPopup>
  );
}
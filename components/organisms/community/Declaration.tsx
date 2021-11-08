import { Fragment, useState } from 'react';
import styled from 'styled-components';

import { Layout, COLOR } from '@/styles/index';
import { Title, Span, Icon } from '@/components/atoms';
import { BottomPopup } from '@/components/molcules';
import { DECLARATION_LIST } from '@/constants/index';

const DeclarationSection = styled.section`
  ${Layout.flexColStartCenter};
  box-sizing: border-box;
  width: 100%;
  padding: 0 30px 30px;
`;

const DeclarationContent = styled.div`
  ${Layout.flexColStartStart};
  width: 100%;
`;

const DeclarationItem = styled.div`
  ${Layout.flexRowStartCenter};
  width: 100%;
  margin-bottom: 8px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  display: none;
`;

const CheckBox = styled.div`
  ${Layout.flexColCenter};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: ${({ theme }) => `1px solid ${theme.GRAY07}`};
  margin-right: 20px;
  box-sizing: border-box;
`;

export default function Declaration({ closeDispatch }: { closeDispatch: () => void }): JSX.Element {
  const [checkedValue, setCheckedValue] = useState<string>('');
  return (
    <BottomPopup
      useClose={false}
      type={'TWO'}
      successTitle={'확인'}
      successCallback={() => {
        closeDispatch && closeDispatch();
      }}
      failTitle={'취소'}
      failCallback={() => {
        closeDispatch && closeDispatch();
      }}
    >
      <DeclarationSection>
        <Title style={{ color: COLOR.BLACK, paddingTop: '32px', paddingBottom: '32px' }}>{'신고하기'}</Title>
        <DeclarationContent>
          <Span
            style={{
              display: 'block',
              width: '100%',
              color: COLOR.BLACK,
              fontSize: '14px',
              fontWeight: 'bold',
              marginBottom: '15px'
            }}
          >
            {'신고 사유 선택'}
          </Span>
          {Object.keys(DECLARATION_LIST).map((item) => (
            <Fragment key={item}>
              <RadioInput
                type={'radio'}
                id={item}
                value={checkedValue}
                checked={checkedValue === item}
                onChange={() => setCheckedValue(item)}
              />
              <label style={{ color: COLOR.BLACK }} htmlFor={item} onClick={() => setCheckedValue(item)}>
                <DeclarationItem>
                  <CheckBox
                    style={{
                      backgroundColor: checkedValue === item ? COLOR.DARK_BLUE : COLOR.WHITE,
                      border: checkedValue === item ? 'none' : `1px solid ${COLOR.GRAY07}`
                    }}
                  >
                    <Icon.Check height={'14px'} fill={checkedValue === item ? 'white' : 'gray'}/>
                  </CheckBox>
                  <Span style={{ color: COLOR.BLACK }}>{DECLARATION_LIST[item]}</Span>
                </DeclarationItem>
              </label>
            </Fragment>
          ))}
        </DeclarationContent>
      </DeclarationSection>
    </BottomPopup>
  );
}
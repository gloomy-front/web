import { Fragment, useState } from 'react';
import styled from 'styled-components';

import { Layout, COLOR } from '@/styles/index';
import { Title, Span } from '@/components/atoms';
import { BottomPopup } from '@/components/molcules';
import { CATEGORY_LIST } from '@/constants/index';

const CategorySection = styled.section`
  ${Layout.flexColStartStart};
  box-sizing: border-box;
  width: 100%;
  padding: 0 16px 10px;
`;

const CategoryContent = styled.div`
  ${Layout.flexColStartStart};
  width: 100%;
`;

const CategoryItem = styled.div`
  ${Layout.flexRowStartCenter};
  width: 100%;
  height: 40px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  display: none;
`;

export default function SelectCategory({ selectDispatch }: { selectDispatch: (v: string) => void }): JSX.Element {
  const [checkedValue, setCheckedValue] = useState<string>('');

  return (
    <BottomPopup
      useClose={false}
      type={'NONE'}
    >
      <CategorySection>
        <Title style={{ color: COLOR.BLACK, paddingTop: '24px', paddingBottom: '14px', fontWeight: 'bold' }}>
          {'카테고리를 선택하세요.'}
        </Title>
        <CategoryContent>
          {Object.keys(CATEGORY_LIST).slice(1,).map((item) => (
            <Fragment key={item}>
              <RadioInput
                type={'radio'}
                id={item}
                value={checkedValue}
                checked={checkedValue === item}
                onChange={() => setCheckedValue(item)}
              />
              <label style={{ color: COLOR.BLACK, width: '100%' }} htmlFor={item} onClick={() => { selectDispatch(item); }}>
                <CategoryItem>
                  <Span style={{ color: COLOR.BLACK }}>{CATEGORY_LIST[item]}</Span>
                </CategoryItem>
              </label>
            </Fragment>
          ))}
        </CategoryContent>
      </CategorySection>
    </BottomPopup>
  );
}
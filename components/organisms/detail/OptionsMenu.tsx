import React from 'react';
import styled from 'styled-components';
import { Icon, Title } from '@/components/atoms';
import { COLOR } from '@/styles/color';
import { OptionsType } from '@/types/index';
import Portal from '@/components/atoms/Portal';

export type OptionsMenuProps = {
  menuOpenHandler?: () => void;
  options: OptionsType;
};

function OptionsMenu({ menuOpenHandler, options }: OptionsMenuProps) {
  return (
    <Portal>
      <Container>
        <Overlay>
          <Wrapper>
            <Block>
              <Title style={{ color: COLOR.GRAY07, fontWeight: 'bold' }}>{options.title}</Title>
              <Icon.Close onClick={menuOpenHandler} />
            </Block>
            <Menu>
              {options?.title === '신고 사유를 선택하세요'
                ? options.items?.map((item, index) => (
                    <Option key={index}>
                      <Icon.RoundCheck />
                      {item}
                    </Option>
                  ))
                : options.items?.map((item, index) => <Option key={index}>{item}</Option>)}
            </Menu>
          </Wrapper>
        </Overlay>
      </Container>
    </Portal>
  );
}

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 0;
  z-index: 10;
`;
const Overlay = styled.div`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.5);
  position: relative;
`;
const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;
const Block = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 22px;
  padding: 24px 16px 14px;
`;
const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
`;
const Option = styled.li`
  display: flex;
  align-items: center;
  height: 48px;
  font-size: 15px;
  color: ${COLOR.GRAY07};
  & > svg {
    margin-right: 5px;
  }
`;
export default OptionsMenu;

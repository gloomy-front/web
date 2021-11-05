import styled from 'styled-components';

import { Layout, COLOR } from '@/styles/index';
import { Span } from '@/components/atoms';

const DropdownContainer = styled.section`
  ${Layout.flexColCenter};
  width: 100px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.WHITE};
  position: absolute;
  right: 0;
  height: 0;
  top: 14px;
  overflow: hidden;
  transition: all 0.3s ease;
  ${({ isVisible }: { isVisible: { isVisible?: boolean; itemsLength: number } }) => {
    return isVisible.isVisible ? `visibility: visible; height: ${35 * isVisible.itemsLength}px;` : 'visibility: hidden; height: 0;';
  }};
`;

const DropdownItem = styled.div`
  ${Layout.flexRowCenter};
  width: 100%;
  height: 35px;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: ${({ theme }) => `1px solid ${theme.GRAY02}`};
  }

  :hover {
    background-color: ${({ theme }) => theme.GRAY02};
  }
`;

export default function Dropdown({
                                   itemList,
                                   isVisible = true,
                                   selectDispatch,
                                   closeDispatch
                                 }: { isVisible: boolean, itemList: Array<string>, selectDispatch?: (v: string) => void, closeDispatch?: () => void }): JSX.Element {
  return (
    <DropdownContainer isVisible={{ isVisible, itemsLength: itemList.length }} id={'drop-down'}>
      {itemList.map((item, idx) => (
        <DropdownItem key={`dropdown-${idx}`} onClick={
          (e) => {
            e.stopPropagation();
            selectDispatch && selectDispatch(item);
            closeDispatch && closeDispatch();
          }
        }>
          <Span style={{ color: COLOR.BLACK }}>
            {item}
          </Span>
        </DropdownItem>
      ))}
    </DropdownContainer>
  );
}
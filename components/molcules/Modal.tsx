import { Icon, PopupOverlay, Title } from '@/components/atoms';
import useBlockScroll from '@/hooks/useBlockScroll';
import { Layout } from '@/styles/theme';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import React from 'react';

export interface ModalProps {
  title: string;
  type: 'normal-list' | 'check-list';
  content: string[];
  callbackFn: (param: any) => void;
}

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  ${Layout.flexColEndCenter};
  width: 100%;
  border-radius: 24px 24px 0 0;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.WHITE};
  z-index: 20000000;
`;
const ModalHeaderSection = styled.section`
  ${Layout.flexRowBetweenCenter}
  width: 100%;
  padding: 24px 10px 12px 16px;
  box-sizing: border-box;
`;
const ModalContentList = styled.ul`
  width: 100%;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const ModalContentItem = styled.li`
  ${Layout.flexRowStartCenter};
  height: 48px;
  padding: 13px 16px;
  box-sizing: border-box;
`;

const Modal = (props: ModalProps) => {
  useBlockScroll();

  return createPortal(
    <>
      <PopupOverlay />
      <ModalContainer>
        <ModalHeaderSection>
          <Title style={{ fontWeight: 'bold' }}>{props.title}</Title>
          <Icon.Close onClick={() => alert('close')} />
        </ModalHeaderSection>
        <ModalContentList>
          {props.content.map((text, idx) => (
            <ModalContentItem key={idx} onClick={() => props.callbackFn(idx)}>
              {text}
            </ModalContentItem>
          ))}
        </ModalContentList>
      </ModalContainer>
    </>,
    document.getElementsByTagName('body')[0],
  );
};

export default Modal;

import React, { MouseEventHandler, CSSProperties } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';

import { Icon } from '@/components/atoms';
import { useBlockScroll } from '@/hooks/index';
import { COLOR, Layout } from '@/styles/index';

export type PopupType = 'NONE' | 'ONE' | 'TWO';

const openAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(150px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0px);
  }
`;

interface PopupFooterProps {
  type?: PopupType
  successTitle?: string;
  successCallback?: MouseEventHandler<any> | undefined;
  failTitle?: string;
  failCallback?: MouseEventHandler<any> | undefined;
  successDisable?: boolean;
  failDisable?: boolean;
}

export interface PopupProps extends PopupFooterProps {
  title?: string;
  useClose?: boolean;
  useOverlay?: boolean;
  children?: JSX.Element | JSX.Element[];

  style?: CSSProperties;
  contentsStyle?: CSSProperties;
  headerStyle?: CSSProperties;
  mainStyle?: CSSProperties;
}

const PopupContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  margin: 0;
  padding: 0;

  z-index: 20000;
`;

const PopupHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PopupHeaderTitle = styled.p`
  padding: 4px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  user-select: none;
  color: ${({ theme }) => theme.BLACK};
`;

const PopupContents = styled.section`
  ${Layout.flexColStartCenter};
  position: absolute;
  bottom: 0;
  left: 50%;

  max-width: 600px;
  width: 100%;
  min-height: 200px;

  paddingTop: 16px;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  background: ${({ theme }) => theme.WHITE};
  box-shadow: 0 0 14px 3px rgba(34, 34, 34, 0.1);
  transform: translate(-50%, 0);
  overflow: hidden;
  animation: 0.6s cubic-bezier(0.2, 1, 0.4, 1) 0s 1 normal both running ${openAnimation};
`;

const PopupOverLay = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(34, 34, 34, 0.5);
`;

const PopupBtnContainer = styled.section`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  border-top: ${({ theme }) => `1px solid ${theme.GRAY04}`};
`;

const Button = styled.button`
  border: none;
  margin: 0;
  padding: 16px 0;
  color: ${({ theme }) => theme.WHITE};
  cursor: pointer;
`;

const PopupFooter = (
  {
    type,
    successTitle,
    successCallback,
    failTitle,
    failCallback,
    successDisable,
    failDisable,
  }: PopupFooterProps) => {
  if (type === 'ONE') {
    return (
      <PopupBtnContainer>
        <Button
          onClick={successCallback || failCallback}
          disabled={successDisable || failDisable}
          style={{ width: '100%', zIndex: 100, backgroundColor: successDisable ? COLOR.GRAY06 : COLOR.DARK_BLUE }}
        >
          {successTitle || failTitle}
        </Button>
      </PopupBtnContainer>
    );
  } else if (type === 'TWO') {
    return (
      <PopupBtnContainer>
        <Button
          onClick={failCallback}
          disabled={failDisable}
          style={{ width: '50%', zIndex: 100, backgroundColor: COLOR.GRAY05 }}
        >
          {failTitle}
        </Button>
        <Button
          onClick={successCallback}
          disabled={successDisable}
          style={{ width: '50%', zIndex: 100, backgroundColor: successDisable ? COLOR.GRAY06 : COLOR.DARK_BLUE }}
        >
          {successTitle}
        </Button>
      </PopupBtnContainer>
    );
  }

  return null;
};

export default function BottomPopup(
  {
    title = '',
    type = 'NONE',
    useClose = true,
    useOverlay = true,
    successTitle,
    successCallback,
    failTitle,
    failCallback,
    successDisable,
    failDisable,
    children,

    style = {},
    contentsStyle = {},
    headerStyle = {},
    mainStyle = {}
  }: PopupProps): JSX.Element {

  useBlockScroll();

  return createPortal((
    <PopupContainer style={style}>
      {useOverlay && <PopupOverLay/>}
      <PopupContents style={contentsStyle}>
        <PopupHeader style={headerStyle}>
          {title && <PopupHeaderTitle dangerouslySetInnerHTML={{ __html: title }}/>}
          {useClose &&
          <Icon.Close
            style={{
              position: 'absolute',
              top: '12px',
              right: '12px',
              cursor: 'pointer'
            }}
            onClick={failCallback}
          />}
        </PopupHeader>
        <section style={{ width: '100%', marginBottom: type !== 'NONE' ? '48px' : '', ...mainStyle }}>{children}</section>

        {PopupFooter({ type, successTitle, successCallback, failTitle, failCallback, successDisable, failDisable })}
      </PopupContents>
    </PopupContainer>
  ), document.getElementsByTagName('body')[0]);
}

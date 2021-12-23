import { CSSProperties, ReactNode, useState } from 'react';
import styled, { css } from 'styled-components';
import { Layout } from '@/styles/index';

type TooltipProps = {
  position?: string;
  content: string;
  children: ReactNode;
  containerStyle?: CSSProperties;
  tooltipStyle?: CSSProperties;
};

type CenterContainerProps = {
  position: string;
};

export const TooltipWrapper = styled.div`
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
`;

export const CenterContainer = styled.div`
  ${Layout.flexRowCenter};
  position: absolute;
  width: 220px;
  margin-left: -115px;
  left: 50%;
  ${({ position }: CenterContainerProps) => {
    switch (position) {
      case 'bottom':
        return css`
          bottom: unset !important;
          top: calc(100% + 5px);
        `;
      case 'left':
        return css`
          margin-right: 0;
          width: 100%;
          left: unset;
          top: 50%;
          right: calc(100% + 5px);
          width: max-content;
        `;
      case 'right':
        return css`
          margin-left: 0;
          width: 100%;
          top: 50%;
          left: calc(100% + 5px);
          width: max-content;
        `;
      default:
        return css`
          bottom: calc(100% + 15px);
        `;
    }
  }}
`;

export const TooltipBox = styled.span`
  color: #fff;
  background-color: #9fb8f4;
  text-align: center;
  border-radius: 3px;
  padding: 10px 8px;
  font-size: 15px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.2);

  ${({ position }: CenterContainerProps) => {
    switch (position) {
      case 'right':
        return css`
          color: #000;
        `;
      default:
        return css``;
    }
  }}
  &:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border-width: 5px;
    background-color: #9fb8f4;
    left: calc(50%);
    top: 89%;
    transform: rotate(45deg);
  }

  ${({ position }) => {
    switch (position) {
      case 'bottom':
        return css`
          &:after {
            top: unset;
            width: 1px;
            bottom: 100%;
            left: calc(50% - 5px);
          }
        `;
      case 'left':
        return css`
          &:after {
            left: 100%;
            top: calc(50% - 5px);
          }
        `;
      case 'right':
        return css`
          &:after {
            right: 100%;
            left: unset;
            top: calc(50% - 5px);
          }
        `;
      default:
        return css`
          &:after {
          }
        `;
    }
  }}
`;

function Tooltip({ position = 'top', content, children = true, containerStyle = {}, tooltipStyle = {}}: TooltipProps) {
  const [isHovered, setIsHovered] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const showTooltip = isHovered || isFocused;

  return (
    <TooltipWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(true)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {children}
      {showTooltip && (
        <CenterContainer position={position} style={containerStyle}>
          <TooltipBox position={position} style={tooltipStyle}>{content}</TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
}

export default Tooltip;

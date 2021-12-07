import { useRef, useState } from 'react';
import styled, { css, keyframes } from 'styled-components';

type TooltipProps = {
  position: any;
  text: any;
  children: any;
  styleMe: any;
};

type TooltipTargetProps = {
  styleMe: any;
  highlightOnHover: any;
  showOnFocus: any;
};

type CenterContainerProps = {
  position: any;
};

export const TooltipWrapper = styled.div`
  position: relative;
  display: inline-flex;
`;

export const TooltipTarget = styled.button`
  border: none;
  background: inherit;
  padding: 5px;
  margin: -1px;
  font-size: inherit;
  ${({ styleMe, highlightOnHover }: TooltipTargetProps) =>
    styleMe &&
    css`
      border: ${highlightOnHover ? css`1px solid #393e46` : css``};
      padding: 15px;
      margin: 1px;
      border-radius: 5px;
      font-size: 2rem;
    `};

  color: inherit;
  cursor: inherit;
  display: flex;
  ${({ showOnFocus }: TooltipTargetProps) =>
    !showOnFocus &&
    css`
      outline: none;
    `};
`;

export const CenterContainer = styled.div`
  position: absolute;
  width: 200px;
  margin-left: -100px;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  bottom: calc(100% + 5px);
  pointer-events: none;
  background-color: #9fb8f4;
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
          bottom: calc(100% + 5px);
        `;
    }
  }}
`;

export const TooltipBox = styled.span`
  position: relative;
  color: #fff;
  background-color: #9fb8f4;
  text-align: center;
  border-radius: 5px;
  padding: 10px 8px;
  font-size: 1.25rem;
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
    width: 1px;
    height: 1px;
    border-width: 5px;
    border-style: solid;
    background-color: #9fb8f4;
    left: calc(50% - 4.5px);
    top: 100%;
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
        return css``;
    }
  }}
`;

function Tooltip({ position, text, children, styleMe = true }: TooltipProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const showTooltip = isHovered || isFocused;

  return (
    <TooltipWrapper>
      <TooltipTarget
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        styleMe={styleMe}
        highlightOnHover={isHovered}
        showOnFocus={isFocused}
      >
        {children}
      </TooltipTarget>
      {showTooltip && (
        <CenterContainer position={position}>
          <TooltipBox position={position}>{text}</TooltipBox>
        </CenterContainer>
      )}
    </TooltipWrapper>
  );
}

export default Tooltip;

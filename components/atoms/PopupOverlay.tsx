import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(34, 34, 34, 0.5);

  margin: 0;
  z-index: 2000000;

  overflow: hidden;
  touch-action: none;
`;

export default PopupOverlay;

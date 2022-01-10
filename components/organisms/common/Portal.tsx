import React from 'react';
import ReactDOM from 'react-dom';

type PortalProps = {
  children: React.ReactNode;
};
const Portal = ({ children }: PortalProps) => {
  const el = typeof window !== 'undefined' && document.getElementById('portal');
  return el && children ? ReactDOM.createPortal(children, el) : null;
};

export default Portal;

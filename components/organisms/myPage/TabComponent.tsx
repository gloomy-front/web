import { useEffect, useState } from 'react';

export default function TabComponent(): JSX.Element {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = (index: any) => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <li className={activeIndex === 0 ? 'is-active' : ''} onClick={() => tabClickHandler(0)}>
          {' '}
          탭1{' '}
        </li>
      ),
      tabCont: <div> 탭1 내용 </div>,
    },
    {
      tabTitle: (
        <li className={activeIndex === 1 ? 'is-active' : ''} onClick={() => tabClickHandler(1)}>
          {' '}
          탭2{' '}
        </li>
      ),
      tabCont: <div> 탭2 내용 </div>,
    },
  ];

  return (
    <div>
      <ul className="tabs is-boxed">
        {tabContArr.map((section, index) => {
          return section.tabTitle;
        })}
      </ul>
      <div>{tabContArr[activeIndex].tabCont}</div>
    </div>
  );
}

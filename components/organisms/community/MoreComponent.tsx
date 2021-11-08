import { useEffect, useState } from 'react';
import { Icon, Span } from '@/components/atoms';
import { Dropdown, Popup } from '@/components/molcules';
import { DROPDOWN_LIST } from '@/constants/index';
import { COLOR } from '@/styles/color';
import Declaration from './Declaration';

export default function MoreComponent(): JSX.Element {
  const [showMore, setShowMore] = useState<boolean>(false);
  const [moreItem, setMoreItem] = useState<string>('');
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [showDeclaration, setShowDeclaration] = useState<boolean>(false);

  useEffect(() => {
    const clickOut = (e: MouseEvent) => {
      if (e.target) {
        setShowMore(false);
      }
    };
    window.addEventListener('click', (e) => clickOut(e));
    return window.removeEventListener('click', (e) => clickOut(e));
  }, []);

  useEffect(() => {
    if (moreItem === '삭제') {
      setShowPopup(true);
      setMoreItem('');
    } else if (moreItem === '신고') {
      setShowDeclaration(true);
      setMoreItem('');
    }
  }, [moreItem]);

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Icon.More style={{ cursor: 'pointer' }} onClick={(e) => {
          e.stopPropagation();
          setShowMore(!showMore);
        }}/>
        <Dropdown itemList={DROPDOWN_LIST} isVisible={showMore} closeDispatch={() => setShowMore(false)}
                  selectDispatch={(v) => setMoreItem(v)}/>
      </div>

      {showDeclaration && <Declaration closeDispatch={() => setShowDeclaration(false)}/>}

      {showPopup && <Popup
        useClose={true}
        contentsStyle={{ width: '272px' }}
        type={'TWO'}
        successTitle={'확인'}
        successCallback={() => {
        }}
        failTitle={'취소'}
        failCallback={() => setShowPopup(false)}
      >
        <Span
          style={{
            color: COLOR.BLACK,
            fontWeight: 600,
            fontSize: '16px',
            marginBottom: '25px',
            marginTop: '14px',
            display: 'block'
          }}>
          {'피드를 삭제하시겠어요?'}
        </Span>
      </Popup>}
    </>
  );
}
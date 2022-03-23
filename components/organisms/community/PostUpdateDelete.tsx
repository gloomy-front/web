import { Fragment, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Layout, COLOR } from '@/styles/index';
import { Title, Span } from '@/components/atoms';
import { BottomPopup } from '@/components/molcules';
import { useDeleteFeed } from '@/api/index';

const PostUpdateDeleteSection = styled.section`
  ${Layout.flexColStartStart};
  box-sizing: border-box;
  width: 100%;
  padding: 0 16px 16px;
`;

const PostUpdateDeleteContent = styled.div`
  ${Layout.flexColStartStart};
  width: 100%;
`;

const PostUpdateDeleteItem = styled.div`
  ${Layout.flexRowStartCenter};
  width: 100%;
  height: 48px;
  cursor: pointer;
`;

const RadioInput = styled.input`
  display: none;
`;

const POST_UPDATE_DELETE_LIST = ['게시글 수정', '게시글 삭제'];

export default function PostUpdateDelete({ closeDispatch }: { closeDispatch: () => void }): JSX.Element {
  const router = useRouter();
  const feedId = parseInt(router.query['postId'] as string ?? '0');
  const [checkedValue, setCheckedValue] = useState<string>('');
  const [requestDeleteFeed] = useDeleteFeed();

  useEffect(() => {
    if (checkedValue === '게시글 삭제') {
      requestDeleteFeed(feedId).then();
    }
  }, [checkedValue, feedId]);

  return (
    <BottomPopup
      useClose={true}
      failCallback={closeDispatch}
      type={'NONE'}
    >
      <PostUpdateDeleteSection>
        <Title style={{ color: COLOR.GRAY07, paddingTop: '24px', paddingBottom: '25px' }}>{'이 게시글에 대해'}</Title>
        <PostUpdateDeleteContent>
          {POST_UPDATE_DELETE_LIST.map((item, idx) => (
            <Fragment key={item}>
              <RadioInput
                type={'radio'}
                id={item}
                value={checkedValue}
                checked={checkedValue === item}
                onChange={() => setCheckedValue(item)}
              />
              <label htmlFor={item} onClick={() => { setCheckedValue(item); closeDispatch && closeDispatch(); }}>
                <PostUpdateDeleteItem>
                  <Span style={{ color: COLOR.GRAY07 }}>{POST_UPDATE_DELETE_LIST[idx]}</Span>
                </PostUpdateDeleteItem>
              </label>
            </Fragment>
          ))}
        </PostUpdateDeleteContent>
      </PostUpdateDeleteSection>
    </BottomPopup>
  );
}
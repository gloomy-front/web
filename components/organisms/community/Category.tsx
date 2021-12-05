import { useState, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { Layout } from '@/styles/index';
import { CATEGORY_LIST } from '@/constants/index';
import { COLOR_TYPE } from '@/types/index';
import { Span, Icon } from '../../atoms';

const CategoryContainer = styled.section`
  ${Layout.flexRowCenter};
  width: 100%;
  height: 57px;

  background-color: ${({ theme }) => theme.GRAY02};
`;

const CategoryWrapper = styled.div`
  ${Layout.flexRowStartCenter};
  width: 100%;
  height: 100%;
  white-space: nowrap;
  overflow: auto;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const SortArea = styled.div`
  ${Layout.flexRowCenter};
  width: 77px;
  padding-left: 16px;
  padding-right: 19px;
`;

const CategoryItem = styled.div`
  ${Layout.flexRowCenter};
  height: 37px;
  background-color: ${({ theme }) => theme.GRAY03};
  margin-right: 8px;
  border-radius: 3px;
  padding: 0 8px;
  font-size: 14px;
  color: ${({ theme }) => theme.GRAY05};

  cursor: pointer;

  ${({ isActive, theme }: { isActive: boolean, theme: COLOR_TYPE }) => {
    if (isActive) {
      return { 'background-color': theme.BLACK, 'color': theme.WHITE };
    }
    return;
  }};
`;

export default function Category({ initCategory = 'total' }: { initCategory?: string }): JSX.Element {
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>(initCategory);
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);

  useEffect(() => {
    const { isBoundary, categoryWidth } = calcBoundaryCategory(selectedCategory);

    if (scrollRef?.current !== null && isBoundary && categoryWidth) {
      scrollRef.current.scrollTo({ top: 0, left: categoryWidth });
    }
  }, [scrollRef]);

  const calcBoundaryCategory = useCallback((category: string) => {
    const innerWidth = window.innerWidth;
    let categoryWidth = 0;

    if (scrollRef.current) {
      const categoryChildren = Array.from(scrollRef.current.children);
      for (let i = 0; i < categoryChildren.length; i++) {
        categoryWidth += categoryChildren[i].getBoundingClientRect().width;
        if (innerWidth - 90 < categoryWidth && category === Object.keys(CATEGORY_LIST)[i]) {
          return { isBoundary: true, categoryWidth: categoryWidth - categoryChildren[i].getBoundingClientRect().width };
        }
      }
    }
    return { isBoundary: false, categoryWidth: 0 };
  }, []);

  const selectCategory = useCallback((category, e) => {
    if (scrollRef.current !== null) {
      const overflowLeft = e.pageX - e.target.offsetWidth - 90;
      const overflowRight = window.innerWidth - e.pageX - e.target.offsetWidth;

      if (overflowLeft < 0) {
        scrollRef.current.scrollTo({ top: 0, left: scrollRef.current.scrollLeft + overflowLeft, behavior: 'smooth' });
      } else if (overflowRight < 0) {
        scrollRef.current.scrollTo({ top: 0, left: scrollRef.current.scrollLeft - overflowRight, behavior: 'smooth' });
      }
      setSelectedCategory(category);
      router.replace(`/community?category=${category}`, undefined, { shallow: true }).then();
    }
  }, [router, scrollRef]);

  const onDragStart = useCallback((e) => {
    e.preventDefault();
    setIsDrag(true);
    if (scrollRef?.current !== null) {
      setStartX(e.pageX + scrollRef.current.scrollLeft);
    }
  }, [scrollRef]);

  const onDragEnd = useCallback(() => {
    setIsDrag(false);
  }, []);

  const onDragMove = useCallback(
    (e) => {
      if (isDrag && scrollRef?.current != null) {
        scrollRef.current.scrollLeft = startX - e.pageX;
      }
    }, [isDrag, startX, scrollRef]);

  return (
    <>
      <CategoryContainer>
        <SortArea>
          <Span style={{ fontSize: '14px', marginRight: '8px' }}>{'최신순'}</Span>
          <Icon.ArrowDown height={'6px'}/>
        </SortArea>
        <CategoryWrapper
          onMouseDown={onDragStart}
          onMouseMove={isDrag ? onDragMove : () => {
            return;
          }}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
        >
          {Object.keys(CATEGORY_LIST).map((category: string) => (
            <CategoryItem
              key={category}
              onClick={(e) => selectCategory(category, e)}
              isActive={selectedCategory === category}
            >
              {CATEGORY_LIST[category]}
            </CategoryItem>
          ))}
        </CategoryWrapper>
      </CategoryContainer>
    </>
  );
}

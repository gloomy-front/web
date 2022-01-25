import { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Layout } from '@/styles/index';
import { Span, TextArea } from '@/components/atoms';
import { getWithoutToken, postWithoutToken, putWithoutToken, deleteWithoutToken, of } from '@/utils/index';

const MainContainer = styled.main`
  ${Layout.flexColStartStart};
  width: 100%;
  min-height: 100vh;
  padding: 50px 20px;
  margin: 0 auto;
  background-color: #FEFEDF;
  box-sizing: border-box;
`;

const StyledSpan = styled(Span)`
  color: black;
  font-size: 16px;
  font-weight: bold;
  margin-top: 20px;
  width: 100%;
  word-break: break-all;

  & em {
    font-size: 13px;
    font-weight: normal;
  }
`;

const StyledTextArea = styled(TextArea)`
  border: 1px solid black;
`;

const StyledButton = styled.button`
  height: 50px;
  width: 100%;
  border: 1px solid black;
  border-radius: 8px;
  background-color: antiquewhite;
  margin-top: 20px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

export default function ApiTestPage() {
  const [fetchType, setFetchType] = useState<string>('get');
  const [url, setUrl] = useState<string>('');
  const [header, setHeader] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [result, setResult] = useState<any>();

  useEffect(() => {
    setResult(null);
  }, [fetchType, url]);

  const requestAxios = async () => {
    const headerConfig = JSON.parse(!header ? '{}' : header);

    if (fetchType === 'get') {
      const [res, err] = await of(getWithoutToken(url, { headers: { ...headerConfig }}));
      console.log(res);
      console.log(err);
      res && setResult(JSON.stringify(res));
      err && setResult(JSON.stringify(err));
    }
    else if (fetchType === 'post') {
      const data = JSON.parse(!body ? '{}' : body);
      const [res, err] = await of(postWithoutToken(url, data, { headers: { ...headerConfig }}));
      console.log(res);
      console.log(err);
      res && setResult(JSON.stringify(res));
      err && setResult(JSON.stringify(err));
    }
    else if (fetchType === 'put') {
      const data = JSON.parse(!body ? '{}' : body);
      const [res, err] = await of(putWithoutToken(url, data, { headers: { ...headerConfig }}));
      console.log(res);
      console.log(err);
      res && setResult(JSON.stringify(res));
      err && setResult(JSON.stringify(err));
    }
    else if (fetchType === 'delete') {
      const [res, err] = await of(deleteWithoutToken(url, { headers: { ...headerConfig }}));
      console.log(res);
      console.log(err);
      res && setResult(JSON.stringify(res));
      err && setResult(JSON.stringify(err));
    }
  };

  return (
    <MainContainer>
      <StyledSpan>{'요청 형식'}</StyledSpan>
      <select name="type" onChange={(e) => setFetchType(e.target.value)}>
        <option value="get">get</option>
        <option value="post">post</option>
        <option value="put">put</option>
        <option value="delete">delete</option>
      </select>

      <StyledSpan>{'요청 URL'}</StyledSpan>
      <StyledTextArea value={url} placeholder={'/feed'} onChange={(e) => setUrl(e.target.value)}
      />

      <StyledSpan>{'요청 헤더'}
        <em>{'(예시의 양식과 똑같이 작성 => 쌍따옴표까지 양식 지켜야함)'}</em>
      </StyledSpan>
      <StyledTextArea value={header}
                      placeholder={'ex) {"Content-Type": "multipart/form-data", "Authorization": "Bearer token"}'}
                      onChange={(e) => setHeader(e.target.value)}
      />

      {(fetchType === 'post' || fetchType === 'put') &&
        <>
          <StyledSpan>{'요청 데이터'}
            <em>{'(예시의 양식과 똑같이 작성 => 쌍따옴표까지 양식 지켜야함)'}</em>
          </StyledSpan>
          <StyledTextArea value={body}
                          placeholder={'ex) {"password": "123", "category": "ALL", "title": "test", "content": "content"}'}
                          onChange={(e) => setBody(e.target.value)}
          />
        </>
      }

      <StyledButton onClick={requestAxios}>{'요청 보내기'}</StyledButton>

      {result &&
      <>
        <div style={{ borderBottom: '2px solid gray', height: '0', width: '100%', marginTop: '30px' }} />
        <StyledSpan>
          {'요청 결과'}
        </StyledSpan>
        <StyledSpan>
          {result}
        </StyledSpan>
      </>
      }
    </MainContainer>
  );
}
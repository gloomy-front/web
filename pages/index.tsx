import styled from "styled-components";
import { flexColCenter } from "@/styles/theme";

const CenterContainer = styled.div`
  ${flexColCenter};
  color: ${props => props.theme.RED};
`;

const IndexPage = (): JSX.Element => {
  return (
    <CenterContainer>Gloomy Front</CenterContainer>
  );
};

export default IndexPage;

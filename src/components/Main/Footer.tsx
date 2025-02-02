import styled from 'styled-components';

const Container = styled.div`
    color: ${(props) => props.theme.colors.subText};
    margin-bottom: 5rem;
    font-style: normal;
    font-weight: 510;
    line-height: normal;

    h1 {
        font-size: 20px;
        letter-spacing: -0.6px;
    }
    h2 {
        font-size: 15px;
        letter-spacing: -0.45px;
        margin-bottom: 1em;
    }
    p {
        font-size: 13px;
        font-weight: 400;
        letter-spacing: -0.39px;
        margin-bottom: 5px;
    }
`;

const Section = styled.div`
    margin-top: 18px;
`;

const Item = styled.div`
    width: fit-content;
    display: flex;
    justify-content: space-between;

    h3{
        margin-right: 8px;
    }
`;

export default function Footer() {
  return (
    <Container>
      <h1>순창코등학교 커뮤니티 맵</h1>
      <p>이 웹은 인천대학교 대동제를 위해 제작된 웹사이트를 바탕으로 수정되었습니다. <br/> 제작자와 원본 레포지스토리는 다음과 같습니다.</p>
      <Section>
        <h2>Github 레포지스토리</h2>
        <p style={{ textDecorationLine: 'underline' }} onClick={() => window.open("https://github.com/INU-CapstoneDesign/INU-Festival-FE")}>Frontend</p><p style={{ textDecorationLine: 'underline' }} onClick={() => window.open("https://github.com/INU-CapstoneDesign/INU-Festival-BE")}>Backend</p>
        <h2>제작자 소개</h2>
        <Item>
          <h3>
            <p>Front End</p>
            <p>Back End</p>
          </h3>
          <div>
            <p>유소정, 이의영, 이희주</p>
            <p>김선희, 이헌도</p>
          </div>
        </Item>
      </Section>
      <Section>
        <h2>운영기간</h2>
        <p>25.04.25. ~ 24.05.09.</p>
      </Section>
      <Section>
        <p>Copyright 2024 희희낙락 All rights reserved.</p>
      </Section>
    </Container>
  );
}

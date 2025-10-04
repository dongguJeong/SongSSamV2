import styled from "styled-components";
import DragAndDropBox from "../components/DragAndDropBox";

function Home() {
  return (
    <HomeStyle>
      <section id="preprocess">
        <DragAndDropBox labelId="singer_wav_file" placeholder="내 음성 파일" />
        <span className="symbol">+</span>
        <DragAndDropBox labelId="song_wav_file" placeholder="노래 파일" />
        <span className="symbol">=</span>
        <DragAndDropBox
          labelId="output_wav_file"
          placeholder="합성된 음성 파일"
        />
      </section>

      <section id="perfect_score">
        <h2>퍼펙트 스코어</h2>
        <div className="score-box"></div>
      </section>
    </HomeStyle>
  );
}

export default Home;

const HomeStyle = styled.div`
  display: grid;
  grid-template-rows: 10rem 1fr;
  gap: 3rem;
  width: 100%;
  height: 100%;

  #preprocess {
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 100%;

    .symbol {
      font-size: 3rem;
      font-weight: 800;
      text-align: center;
    }
  }

  #perfect_score {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;

    h2 {
      flex-shrink: 0;
    }

    .score-box {
      flex: 1;
      background-color: #e2e2e2;
      width: 100%;
    }
  }
`;

import { Logo, MainContainer, Player } from "./AppStyles";
import LinkInput from "./components/LinkInput/LinkInput";
import ReactVideoPlayer from "./components/VideoPlayer/VideoPlayer";
import React, { useState } from 'react'
import ReactPlayer from "react-player";

function App() {

  const [link, setLink] = useState("");
  return (
    <MainContainer>
      <Logo>React Player HLS</Logo>
      <LinkInput setLink={setLink} />
      {link.length > 0 &&
        <Player>
          <ReactVideoPlayer link={link} />
        </Player>
      }
    </MainContainer>
  );
}

export default App;

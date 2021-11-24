import ReactPlayer from "react-player";
import styled from "styled-components";

export const PlayerContainer = styled.div`
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-sizing: border-box;
  margin: 20px auto;
  `;

export const VideoContainer = styled.div`
    position: relative;
    padding-top: 56.25%;
    
    

`;

export const VideoPlayer = styled(ReactPlayer)`
    position: absolute;
    top:0;
    left:0;
`;


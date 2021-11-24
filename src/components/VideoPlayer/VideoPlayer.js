import React from 'react'
import { VideoPlayer, VideoContainer, PlayerContainer } from './VideoPlayerStyles'

const ReactVideoPlayer = ({ link }) => {
    return (
        <PlayerContainer>
            <VideoContainer>
                <VideoPlayer
                    controls={true}
                    url={link}
                    config={{
                        file: {
                            forceHLS: true,
                        },
                    }}
                    width='100%'
                    height='100%'
                />
            </VideoContainer >
        </PlayerContainer>
    )
}

export default ReactVideoPlayer

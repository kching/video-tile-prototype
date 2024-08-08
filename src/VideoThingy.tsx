import ReactPlayer from 'react-player/youtube'

import {VNode} from 'preact';
import { useState} from 'preact/hooks'

const overlayStyles = {
    position: 'relative'
}

type Video = {
    thumbnailUrl: string;
    videoUrl: string;
    width: number;
    height: number;
    title: string;
}

type VideoTileProps = Video & {
    isPlaying?: boolean;
    onClick?: () => void;
}

export const VideoTile = ({width, height, title, videoUrl, thumbnailUrl, isPlaying = false, onClick}: VideoTileProps) => {

    return (
        <div className="video-tile" style={{ padding: 2}}>
            <div style={{
                width: 280,
                height: 500
            }}>
                {!isPlaying && (
                    <div style={overlayStyles}>
                        <a onClick={typeof onClick === 'function' ? onClick : undefined}>
                            <img src={thumbnailUrl} alt={title}/>
                        </a>
                        <button style={{
                            display: 'inline-block',
                            width: 64,
                            height: 64,
                            borderRadius: 32,
                            backgroundColor: 'red',
                            position: 'absolute',
                            top: 'calc(50% - 32px)',
                            left: 'calc(50% - 32px)'
                        }} onClick={typeof onClick === 'function' ? onClick : undefined}/>
                        <span style={{
                            position: 'absolute',
                            bottom: 12,
                            left: 8,
                            padding: 4,
                            background: 'red',
                            color: 'white',
                            fontSize: 16
                        }}>
                            {title}
                        </span>
                    </div>
                )}
                {isPlaying && (<ReactPlayer
                    playing={isPlaying}
                    width={width}
                    height={height}
                    url={videoUrl}/>)}

            </div>
        </div>
    )
}

type VideoListProps = {
    videos: Video[];
    renderer: (video: Video, isPlaying: boolean, onClick: () => void) => VNode<any>
}
export const VideoList = ({videos, renderer}: VideoListProps) => {

    const [playingIndex, setPlayingIndex] = useState<number | undefined>(undefined);
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            { renderer &&
                videos.map((video: Video, index: number) => {
                    const onClick = () => {
                        console.log(index);
                        setPlayingIndex(index)
                    }
                    return renderer(video, (index === playingIndex), onClick);
                })
            }
        </div>
    )
}

import ReactPlayer from "react-player";
import React, {PropsWithChildren, useState} from "react";
import {VNode} from "preact";

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

type VideoTileProps = {
    title?: string;
    thumbnailUrl?: string;
    videoUrl?: string;
    isPlaying?: boolean;
    onClick?: () => void;
}

export const VideoTile = ({title, videoUrl, thumbnailUrl, isPlaying = false, onClick}: VideoTileProps) => {

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
                        <span style={{
                            position: 'absolute',
                            bottom: 12,
                            left: 8,
                            padding: 4,
                            background: 'red',
                            color: 'white',
                            fontSize: 16 }}>
                            {title}
                        </span>
                    </div>
                )}
                {isPlaying && (
                    <ReactPlayer
                        playing={isPlaying}
                        width={280}
                        height={500}
                        config={{
                            youtube: {
                                embedOptions: {}
                            }
                        }}
                        url={videoUrl}/>
                )}
            </div>
        </div>
    )
}

type VideListProps = PropsWithChildren<{
    videos: Video[];
}>
export const VideoList = ({videos, children}: VideListProps) => {

    const [playingIndex, setPlayingIndex] = useState<number | undefined>(undefined);
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center'
        }}>
            { children &&
                videos.map((video: Video, index: number) => {
                    const onClick = () => {
                        console.log(index);
                        setPlayingIndex(index)
                    }
                    return React.cloneElement(children as VNode, {...video, isPlaying: (index === playingIndex), onClick});
                })
            }
        </div>
    )
}

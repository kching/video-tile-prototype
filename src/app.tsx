import './app.css'
import {VideoTile, VideoList} from "./VideoThingy.tsx";

const videos = [
    {
        thumbnailUrl: "https://placehold.co/280x500",
        videoUrl: 'https://www.youtube.com/watch?v=JPinGTSgkRM',
        width: 280,
        height: 500,
        title: 'hello world 1'
    },
    {
        thumbnailUrl: "https://placehold.co/280x500",
        videoUrl: 'https://www.youtube.com/watch?v=JPinGTSgkRM',
        width: 280,
        height: 500,
        title: 'hello world 2'
    },
    {
        thumbnailUrl: "https://placehold.co/280x500",
        videoUrl: 'https://www.youtube.com/watch?v=JPinGTSgkRM',
        width: 280,
        height: 500,
        title: 'hello world 3'
    },
    {
        thumbnailUrl: "https://placehold.co/280x500",
        videoUrl: 'https://www.youtube.com/watch?v=JPinGTSgkRM',
        width: 280,
        height: 500,
        title: 'hello world 4'
    }
]

export function App() {
    return (
        <>
            <VideoList videos={videos} renderer={(video, isPlaying, onClick) => (
                <VideoTile {...video} isPlaying={isPlaying} onClick={onClick}/>
            )}/>
        </>
    )
}

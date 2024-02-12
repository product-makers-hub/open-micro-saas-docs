// "use client";

// import ReactPlayer from "react-player";

export const VideoPlayer = ({ videoSrc }: { videoSrc: string }) => {
  return <video width="auto" height="auto" controls src={videoSrc} />;
};

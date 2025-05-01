interface VideoPlayerProps {
  url: string;
}

const YouTubeEmbed = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <div className="video-responsive">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoUrl}`}
        // frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded YouTube"
      ></iframe>
    </div>
  );
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  // Function to check if the URL is a YouTube URL
  const isYouTubeURL = (url: string): boolean => {
    const youtubeRegex =
      /^https:\/\/www\.youtube\.com\/watch\?v=([^&]+)|^https:\/\/youtu\.be\/([^?]+)/;
    return youtubeRegex.test(url);
  };

  // Extract YouTube video ID if it's a YouTube URL
  const getYouTubeVideoId = (url: string): string | null => {
    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^"&?\/\s]{11})/
    );
    return match ? match[1] : null;
  };

  if (isYouTubeURL(url)) {
    const videoId = getYouTubeVideoId(url);
    return videoId ? (
      <YouTubeEmbed videoUrl={videoId} />
    ) : (
      <p>Invalid YouTube URL</p>
    );
  }

  return (
    <div className="video-responsive">
      <video width="560" height="315" controls>
        <source src={url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

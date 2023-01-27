import saloonVideo from "../assets/videos/saloon-2.mp4";
const AutoVideoCom = () => {
  return (
    <video
      width="100%"
      height="100%"
      autoPlay
      loop
      muted
      className="control-video"
    >
      <source src={saloonVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default AutoVideoCom;

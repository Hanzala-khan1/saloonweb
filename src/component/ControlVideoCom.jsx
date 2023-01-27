import saloonVideo from "../assets/videos/saloon-1.mp4";

const ControlVideoCom = () => {
  return (
    <video width="100%" height="100%" controls muted className="control-video">
      <source src={saloonVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default ControlVideoCom;

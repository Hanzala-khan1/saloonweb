import AutoVideoCom from "./component/AutoVideoCom";
import ControlVideoCom from "./component/ControlVideoCom";

function App() {
  return (
    <>
      <main className="video-container">
        {/* Control Video Component */}
        <ControlVideoCom />
        {/* Auto Video Component */}
        <AutoVideoCom />
      </main>
    </>
  );
}

export default App;

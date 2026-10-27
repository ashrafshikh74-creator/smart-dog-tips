import { Composition } from "remotion";
import { PowerStationVideo } from "./Composition";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="PowerStation"
        component={PowerStationVideo}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};

"use client";
import dynamic from "next/dynamic";

const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

export default function Water({ children }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",

        background: `url("/234.jpg") no-repeat ,#FCF9F1`,
      }}
    >
      <WaterWave
        style={{ width: "100%", height: "100%" }}
        dropRadius={40}
        perturbance={0.9}
        resolution={512}
        interactive={true}
      >
        {({ show }) => <div>{children}</div>}
      </WaterWave>
    </div>
  );
}

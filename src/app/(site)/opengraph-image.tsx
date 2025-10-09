// inside opengraph-image route or generator
import { ImageResponse } from "next/og";

export const runtime = "edge";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'white',
          color: 'black',
          fontSize: 80,
          fontWeight: 700,
        }}
      >
        Saltaire Dog Walks
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}

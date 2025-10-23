import { Masonry } from "masonic";
import { useEffect, useRef, useState } from "react";
import rawImages from "../../data/images.json";
import { photoMap } from "../../util/photoMap";

const deviceNames = {
  a52: "Samsung Galaxy A52",
  tg6: "Olympus TG-6",
} as const;

type DeviceKey = keyof typeof deviceNames;

interface ImageData {
  type: string;
  title: string;
  date: string;
  location: string;
  device: DeviceKey;
}

interface MasonryData extends ImageData {
  filename: string;
}

const images = rawImages as Record<string, ImageData>;

const TAP_MOVE_PX = 8;

const MasonryCard = ({ data }: { data: MasonryData }) => {
  const { filename, type, title, date, location, device } = data;
  const src = photoMap[filename] ?? "";

  const [showCaption, setShowCaption] = useState(false);
  const startXY = useRef<{ x: number; y: number } | null>(null);
  const scrollingRef = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      scrollingRef.current = true;
      if (showCaption) setShowCaption(false);
      // allow a new tap after scroll momentum
      const id = window.setTimeout(() => {
        scrollingRef.current = false;
      }, 150);
      return () => window.clearTimeout(id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showCaption]);

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (e.pointerType === "mouse") return; // mouse handled via :hover CSS
    startXY.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerUp: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (e.pointerType === "mouse") return;
    if (!startXY.current || scrollingRef.current) return;
    const dx = e.clientX - startXY.current.x;
    const dy = e.clientY - startXY.current.y;
    const moved = Math.hypot(dx, dy) > TAP_MOVE_PX;
    if (!moved) setShowCaption((v) => !v); // deliberate tap
    startXY.current = null;
  };

  // Close if anything else is tapped
  useEffect(() => {
    if (!showCaption) return;
    const close = () => setShowCaption(false);
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [showCaption]);

  return (
    <div key={filename} className="masonry-card">
      <div
        className={`masonry-img ${showCaption ? "show-caption" : ""}`}
        style={{ position: "relative", touchAction: "pan-y" }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
      >
        <div className="masonry-caption" aria-hidden={!showCaption}>
          <div className="masonry-caption-type">DATE</div>
          <div className="masonry-caption-text">{date || "Unknown"}</div>
          <div className="masonry-caption-type">LOCATION</div>
          <div className="masonry-caption-text">{location || "Unknown"}</div>
          <div className="masonry-caption-type">DEVICE</div>
          <div className="masonry-caption-text">
            {deviceNames[device] ?? "hi"}
          </div>
        </div>
        <img src={src} alt={title} />
      </div>
      <div className="masonry-title">
        <h1 style={{ marginBottom: 0, color: "#888" }}>{type}</h1>
        <h5 style={{ marginTop: 0, color: "#000" }}>{title}</h5>
      </div>
    </div>
  );
};

function Photos() {
  const items: MasonryData[] = Object.entries(images).map(
    ([filename, meta]) => ({
      filename,
      ...meta,
    })
  );

  return (
    <div
      id="photos"
      className="w-full px-8 py-12 lg:px-20 flex justify-center items-center"
    >
      <div className="w-full max-w-7xl">
        <Masonry
          className="masonry"
          columnGutter={25}
          columnWidth={300}
          overscanBy={Infinity}
          items={items}
          render={MasonryCard}
        />
      </div>
    </div>
  );
}

export default Photos;

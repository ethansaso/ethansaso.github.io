import { Masonry } from "masonic";
import rawImages  from '../../data/images.json';
import { photoMap } from "../../util/photoMap";

const deviceNames = {
  a52: 'Samsung Galaxy A52',
  tg6: 'Olympus TG-6'
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

const MasonryCard = ({ data }: {data: MasonryData}) => {
  const { filename, type, title, date, location, device } = data;

  const src = photoMap[filename] ?? ''

  return (
    <div key={filename} className='masonry-card'>
      <div className="masonry-img" style={{ position: 'relative' }}>
        <div className="masonry-caption">
          <div className="masonry-caption-type">DATE</div>
          <div className="masonry-caption-text">{date || 'Unknown'}</div>
          <div className="masonry-caption-type">LOCATION</div>
          <div className="masonry-caption-text">{location || 'Unknown'}</div>
          <div className="masonry-caption-type">DEVICE</div>
          <div className="masonry-caption-text">{deviceNames[device] ?? 'hi'}</div>
        </div>
        <img 
          src={src} 
          alt={title}
        />
      </div>
      <div
        className="masonry-title"
      >
        <h1 style={{ marginBottom: 0, color: '#888' }}>{type}</h1>
        <h5 style={{ marginTop: '0', color: '#000' }}>{title}</h5>
      </div>
    </div>
  )
};

function Photos() {
  const items: MasonryData[] = Object.entries(images).map(
    ([filename, meta]) => ({
      filename,
      ...meta,
    })
  );

  return (
    <div id="photos" className="w-full px-8 py-12 lg:px-20 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <Masonry className="masonry" columnGutter={25} columnWidth={300} overscanBy={Infinity} items={items} render={MasonryCard}/>
      </div>
    </div>
  );
}

export default Photos;
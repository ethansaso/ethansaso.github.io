import { Masonry } from "masonic";
import images from '../../images.json';

const imageContext = require.context('../../assets/img/photography', true);

const MasonryCard = ({ data }) => {
  const { filename, type, title, date, location, device } = data;

  const deviceNames = {'a52': 'Samsung Galaxy A52', 'tg6': 'Olympus TG-6'}

  return (
    <div key={filename} className="masonry-card">
      {/* Hidden Checkbox for Toggling */}
      <input type="checkbox" id={`toggle-caption-${filename}`} className="toggle-caption-checkbox" />
      
      {/* Label that triggers the checkbox when clicked */}
      <label htmlFor={`toggle-caption-${filename}`} className="masonry-img" style={{ position: 'relative' }}>
        <div className="masonry-caption">
          <div className="masonry-caption-type">DATE</div>
          <div className="masonry-caption-text">{date || 'Unknown'}</div>
          <div className="masonry-caption-type">LOCATION</div>
          <div className="masonry-caption-text">{location || 'Unknown'}</div>
          <div className="masonry-caption-type">DEVICE</div>
          <div className="masonry-caption-text">{deviceNames[device] || 'hi'}</div>
        </div>
        <img 
          src={imageContext(`./${filename}`)} 
          alt={title}
        />
      </label>
      
      <div className="masonry-title">
        <h1 style={{ marginBottom: 0, color: '#888' }}>{type}</h1>
        <h1 style={{ marginTop: '0', color: '#000' }}>{title}</h1>
      </div>
    </div>
  )
};

function Photos() {
  const items = Object.keys(images).map((filename) => ({
    filename,
    type: images[filename].type,
    title: images[filename].title,
    date: images[filename].date,
    location: images[filename].location,
    device: images[filename].device,
  }));

  return (
    <div id="photos" className="w-full px-8 py-12 lg:px-20 flex justify-center items-center">
      <div className="w-full max-w-7xl">
        <Masonry className="masonry" columnGutter={25} columnWidth={300} overscanBy={Infinity} items={items} render={MasonryCard}/>
      </div>
    </div>
  );
}

export default Photos;
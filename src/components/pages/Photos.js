import { Card, CardImg, CardTitle } from "reactstrap";
import { Masonry } from "masonic";
import images from '../../images.json';

const imageContext = require.context('../../assets/img/photography', true);

const MasonryCard = ({ data }) => {
  const { filename, type, title, date, location, device } = data;

  const deviceNames = {'a52': 'Samsung Galaxy A52', 'tg6': 'Olympus TG-6'}

  return (
    <Card key={filename} className='masonry-card' style={{
    }}>
      <div className="masonry-img" style={{ position: 'relative' }}>
        <div className="masonry-caption">
          <div className="masonry-caption-type">DATE</div>
          <div className="masonry-caption-text">{date || 'Unknown'}</div>
          <div className="masonry-caption-type">LOCATION</div>
          <div className="masonry-caption-text">{location || 'Unknown'}</div>
          <div className="masonry-caption-type">DEVICE</div>
          <div className="masonry-caption-text">{deviceNames[device] || 'hi'}</div>
        </div>
        <CardImg 
          src={imageContext(`./${filename}`)} 
          alt={title}
        />
      </div>
      <div
        className="masonry-title"
      >
        <CardTitle tag="h6" style={{ marginBottom: 0, color: '#888' }}>{type}</CardTitle>
        <CardTitle tag="h5" style={{ marginTop: '0', color: '#000' }}>{title}</CardTitle>
      </div>
    </Card>
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
    <Masonry className="masonry" columnGutter={25} columnWidth={300} overscanBy={Infinity} items={items} render={MasonryCard}/>
  );
}

export default Photos;

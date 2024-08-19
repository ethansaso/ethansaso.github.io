import { Card, CardImg, CardTitle } from "reactstrap";
import { Masonry } from "masonic";
import images from '../../images.json';

const imageContext = require.context('../../assets/img/photography', true);

const MasonryCard = ({ data }) => {
  const { filename, type, title } = data;
  return (
    <Card key={filename} className='masonry-card' style={{
    }}>
      <div className="masonry-img" style={{ position: 'relative' }}>
        <div className="masonry-caption">
          <div className="masonry-caption-type">DATE</div>
          <div className="masonry-caption-text">lorem</div>
          <div className="masonry-caption-type">LOCATION</div>
          <div className="masonry-caption-text">ipsum</div>
          <div className="masonry-caption-type">DEVICE</div>
          <div className="masonry-caption-text">dolorem</div>
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
      
      {console.log(data)}
    </Card>
  )
};

function Photos() {
  const items = Object.keys(images).map((filename, index) => ({
    filename,
    index,
    type: images[filename].type,
    title: images[filename].title
  }));

  return (
    <Masonry className="masonry" columnGutter={25} overscanBy={Infinity} items={items} render={MasonryCard}/>
  );
}

export default Photos;

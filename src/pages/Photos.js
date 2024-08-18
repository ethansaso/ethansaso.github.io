import { Card, CardBody, CardImg, CardTitle, CardText } from "reactstrap";
import images from '../images.json'; // Import your JSON file (assuming it's in the 'data' directory)

// Load images from the 'photography' directory
const imageContext = require.context('../img/photography', true);

function About() {
  return (
    <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '16px', 
        padding: '20px' 
      }}>
      {Object.keys(images).map((filename, index) => (
        <Card key={index} style={{ 
            border: '1px solid #ddd', 
            display: 'flex',
            flexDirection: 'column',
          }}>
          <div style={{ 
              paddingTop: '100%',
              position: 'relative' 
            }}>
            <CardImg 
              src={imageContext(`./${filename}`)} 
              alt={images[filename].title} 
              style={{ 
                objectFit: 'cover', 
                width: '100%', 
                height: '100%', 
                position: 'absolute', 
                top: '0', 
                left: '0'
              }} 
            />
          </div>
          <CardBody style={{ padding: '10px' }}>
            <CardTitle tag="h5">{images[filename].title}</CardTitle>
            <CardText>{images[filename].type}</CardText>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default About;

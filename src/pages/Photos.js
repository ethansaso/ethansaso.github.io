import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import images from '../images.json';

const imageContext = require.context('../img/photography', true);

function Photos() {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
        gap: '30px', 
        padding: '20px',
        width: '80%',
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
              {/*
                <span
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    backgroundColor: '#000',
                    color: '#fff',
                    padding: '3px 8px',
                    borderRadius: '4px',
                    fontSize: '0.750em',
                    fontWeight: 'bold',
                  }}
                >
                  {images[filename].type}
                </span>
              */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  left: '0',
                  width: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#fff',
                  padding: '8px',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                  borderRadius: '0px 0px 5px 5px'
                }}
              >
                <CardTitle tag="h6" style={{ margin: '0' }}>{images[filename].title}</CardTitle>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Photos;

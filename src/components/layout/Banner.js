const Banner = ({ images, speed = 5000 }) => {
    return (
      <div className="hscroller-inner">
        <div className="hscroller-wrapper">
          <section className="hscroller-section" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="hscroller-img" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="hscroller-section" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="hscroller-img" key={id}>
                <img src={image} alt={id} key={id} />
              </div>
            ))}
          </section>
          <section className="hscroller-section" style={{ "--speed": `${speed}ms` }}>
            {images.map(({ id, image }) => (
              <div className="hscroller-img" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { Banner };
  
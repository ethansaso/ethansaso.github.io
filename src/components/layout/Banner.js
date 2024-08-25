const Banner = ({ images, dir = "right", speed = 5000 }) => {
    return (
      <div className="hscroller-inner h-20 md:h-28">
        <div className="hscroller-wrapper">
          <section className="hscroller-section" style={{ "--speed": `${speed}ms`, "--swipe-dir": `swipe-${dir}` }}>
            {images.map(({ id, image }) => (
              <div className="hscroller-img w-20 h-20 md:w-28 md:h-28" key={id}>
                <img className="" src={image} alt={id} />
              </div>
            ))}
          </section>
          <section className="hscroller-section" style={{ "--speed": `${speed}ms`, "--swipe-dir": `swipe-${dir}` }}>
            {images.map(({ id, image }) => (
              <div className="hscroller-img w-20 h-20 md:w-28 md:h-28" key={id}>
                <img src={image} alt={id} key={id} />
              </div>
            ))}
          </section>
          <section className="hscroller-section" style={{ "--speed": `${speed}ms`, "--swipe-dir": `swipe-${dir}` }}>
            {images.map(({ id, image }) => (
              <div className="hscroller-img w-20 h-20 md:w-28 md:h-28" key={id}>
                <img src={image} alt={id} />
              </div>
            ))}
          </section>
        </div>
      </div>
    );
  };
  
  export { Banner };
  
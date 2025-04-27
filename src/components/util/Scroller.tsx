const SideScroller = ({ images }: {images: string[]}) => {
    const sectionStyle = {
        '--swipe-dir': 'swipe-left',
        '--speed': '90s',
    } as React.CSSProperties;

    return (
        <div className="hscroller-inner">
            <div className="hscroller-wrapper">
                {[0, 1].map(loop => (
                    <div
                        key={loop}
                        className="hscroller-section"
                        style={sectionStyle}
                    >
                        {images.map((src, i) => (
                            <div key={`${loop}-${src}`} className="hscroller-img-wrapper">
                                <div className="hscroller-img-shrink-wrapper">
                                    <img src={src} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SideScroller;
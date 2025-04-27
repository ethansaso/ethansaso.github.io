import SideScroller from "../util/Scroller";

const images = [
    'scroller/chiton.jpg',
    'scroller/cedars.jpg',
    'scroller/logholder.png',
    'scroller/halfdome.jpg',
    'scroller/chanterelle.jpg',
]


const PhotoScroller = () => {
    return (
        <section id="photo-scroller" className="mb-44">
            <SideScroller images={images} />
        </section>
    )
}

export default PhotoScroller;
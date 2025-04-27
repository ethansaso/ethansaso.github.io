import SideScroller from "../util/Scroller";
import { scrollerMap } from "../../util/scrollerMap";

const PhotoScroller = () => {
    return (
        <section id="photo-scroller" className="mb-44">
            <SideScroller images={Object.values(scrollerMap)} />
        </section>
    )
}

export default PhotoScroller;
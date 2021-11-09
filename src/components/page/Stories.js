import "../../styles/Stories.scss";
import HorizontalScroll from "react-scroll-horizontal";
import Story from "../page/Story";

function Stories() {
    const marginStyle = {
        "margin-left": "-10em"
    };

    return (
        <div className="stories">
            <HorizontalScroll className="scroll" reverseScroll={true}>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
            </HorizontalScroll>
        </div>
    )    
}

export default Stories;
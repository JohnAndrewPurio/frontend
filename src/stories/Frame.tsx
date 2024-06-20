import Bar from "./Bar"
import { Button } from "./Button"
import Item from "./Item"
import "./frame.css"

export default function Frame() {
    return (
        <div className="frame">
            <div className="wrapper">
                <Item label="All pages" />
            </div>
            <Bar />
            <Item label="Page 1" />
            <Item label="Page 2" />
            <Item label="Page 3" />
            <Item label="Page 4" />
            <Bar />

            <div className="submit">
                <Button label="Done" />
            </div>
        </div>
    )
}
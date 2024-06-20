import CheckBox from "./CheckBox"
import "./item.css"

interface ItemProps {
    label: string
}

export default function Item({
    label
}: ItemProps) {
    return (
        <div className="ellty-item">
            <label>{label}</label>
            <CheckBox size="small" />
        </div>
    )
}
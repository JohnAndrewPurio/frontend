import { MutableRefObject } from "react"
import CheckBox from "./CheckBox"
import "./item.css"

interface ItemProps {
    label: string
    checkboxRef?: MutableRefObject<HTMLInputElement>
}

export default function Item({
    label, checkboxRef
}: ItemProps) {
    return (
        <div className="ellty-item">
            <label>{label}</label>
            <div className="box-wrapper">
                <CheckBox name={label} ref={checkboxRef} size="small" />
            </div>
        </div>
    )
}
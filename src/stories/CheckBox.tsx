import { useState } from 'react'
import './checkbox.css'

interface CheckBoxProps {
    size?: "small" | "medium"
}

export default function CheckBox({ size = "medium" }: CheckBoxProps) {
    const [clicking, setClicking] = useState(false);

    return (
        <label className={`ellty-checkbox ${size}`} onMouseDown={() => setClicking(true)} onMouseUp={() => setClicking(false)}>
            <input type="checkbox" />
            <div className={`container ${clicking ? "clicking" : ""} ${size}`}>
                <span className='material-symbols-outlined checkmark'>
                    check
                </span>
            </div>
        </label>
    )
}
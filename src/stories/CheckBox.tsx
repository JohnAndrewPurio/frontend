import { MutableRefObject, useState } from 'react'
import './checkbox.css'

interface CheckBoxProps {
    name?: string
    ref?: MutableRefObject<HTMLInputElement>,
    size?: "small" | "medium"
}

export default function CheckBox({ size = "medium", ref, name }: CheckBoxProps) {
    const [clicking, setClicking] = useState(false);

    const onPress = () => setClicking(true)
    const onRelease = () => setClicking(false)

    return (
        <label aria-label={name} className={`ellty-checkbox ${size}`} onMouseDown={onPress} onMouseUp={onRelease}>
            <input ref={ref} type="checkbox" name={name} />
            <div className={`container ${clicking ? "clicking" : ""} ${size}`}>
                <span className='material-symbols-outlined checkmark'>
                    check
                </span>
            </div>
        </label>
    )
}
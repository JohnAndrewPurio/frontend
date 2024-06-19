import './checkbox.css'

interface CheckBoxProps {
    checked: boolean
}

export default function CheckBox({ checked }: CheckBoxProps) {
    return (
        <input type='checkbox' />
    )
}
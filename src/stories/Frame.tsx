import { useEffect, useRef, useState } from "react"
import Bar from "./Bar"
import { Button } from "./Button"
import Item from "./Item"
import "./frame.css"

interface FrameProps {
    pages: {
        [key: string]: string
    }
}

export default function Frame({ pages }: FrameProps) {
    const [allPages, setAllPages] = useState(false);
    const formRef = useRef<HTMLFormElement>(null)
    const allPagesRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        formRef.current?.addEventListener("change", () => {
            const formData = new FormData(formRef.current as HTMLFormElement);
            const data = Object.fromEntries(formData.entries());

            const allPagesSelected = Object.entries(data).length === Object.entries(pages).length
            setAllPages(allPagesSelected)
        })

        allPagesRef.current?.addEventListener("change", () => {
            const formData = new FormData(allPagesRef.current as HTMLFormElement);
            const data = Object.fromEntries(formData.entries());

            const allPagesSelected = !!Object.entries(data).length;
            setAllPages(allPagesSelected)

            const pages = Array.from(formRef.current?.getElementsByTagName("input") || []);

            if (!allPagesSelected) {
                for (const page of pages) {
                    page.checked = false
                }
            }
        })
    }, [])

    useEffect(() => {
        const allPagesSelected = Array.from(allPagesRef.current?.getElementsByTagName("input") || []);
        const pages = Array.from(formRef.current?.getElementsByTagName("input") || []);

        for (const page of allPagesSelected) {
            page.checked = allPages;
        }

        for (const page of pages) {
            if (allPages) {
                page.checked = true
            }
        }
    }, [allPages])

    return (
        <div className="frame">
            <form ref={allPagesRef} className="all-pages-wrapper">
                <Item label="All pages" />
            </form>
            <Bar />
            <form ref={formRef} className="pages-wrapper">
                {
                    Object.entries(pages).map(([key, value]) => (
                        <Item key={key} label={value} />
                    ))
                }
            </form>
            <Bar />
            <div className="submit">
                <Button label="Done" />
            </div>
        </div>
    )
}
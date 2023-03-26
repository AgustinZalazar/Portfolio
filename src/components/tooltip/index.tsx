import { FC, ReactNode, useRef } from "react"

interface Props {
    message: String
    container_style?: String,
    children: ReactNode
}

const Tooltip: FC<Props> = ({ message, container_style, children }): JSX.Element => {
    const tooltipRef = useRef<HTMLSpanElement>(null)
    const container = useRef<HTMLDivElement>(null)

    return (
        <div ref={container}
            onMouseEnter={({ clientX, clientY }) => {
                if (!tooltipRef.current || !container.current) return;
                const { left, top } = container.current.getBoundingClientRect();
                tooltipRef.current.style.left = clientX - left + 'px';
                tooltipRef.current.style.top = clientY - top + 'px';
            }}
            className={`group relative inline-block ${container_style}`}>
            {children}
            {message &&
                <span ref={tooltipRef} className={`invisible group-hover:visible opacity-0 group-hover:opacity-100 transition bg-orange text-secondary text-white absolute rounded-md whitespace-nowrap px-2 py-1`}>{message}</span>
            }
        </div>
    )
}

export default Tooltip

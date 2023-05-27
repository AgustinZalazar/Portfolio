import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode,
    onClick?: Function,
    shadow: Boolean
}

const OrangeButton: FC<Props> = ({ children, onClick, shadow }): JSX.Element => {
    return <button className={`font-secondary text-xl bg-dark_orange rounded-2xl py-1 px-3 ${shadow ? 'shadow-lg shadow-light_orange/50' : ''} text-white hover:bg-orange mr-4`}
        onClick={() => onClick}
    >{children}</button>
}

export default OrangeButton
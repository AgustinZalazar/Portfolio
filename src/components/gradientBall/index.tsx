interface Props {
    width: String,
    height: String,
    bottom?: String,
    top?: String,
    left?: String,
    right?: String,
}

export const GradientBall = ({ width, height, top, bottom, left, right }: Props) => {
    return <div className={`absolute ${width} ${height}  ${top ? top : ''} ${bottom ? bottom : ''} ${left ? left : ''} ${right ? right : ''} rounded-full gradient-01`} />
}

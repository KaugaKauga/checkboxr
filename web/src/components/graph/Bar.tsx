import { BarData } from "../../interfaces/interfaces";

interface Props {
    data: BarData,
    accentColor?: string,
    highestValue: number
}

const Bar = ({ data: { amount, done }, accentColor, highestValue }: Props) => {
    const height = (amount / highestValue) * 100;
    const percentageDone = (done / amount) * 100;

    return (
        <div className={`bg-stone-300 w-6 mx-2 flex flex-col-reverse`} style={{ height: `${height}%` }}>
            <div className={`${accentColor} w-6 transition-all ease-in-out delay-150 duration-300`} style={{ height: `${percentageDone}%` }} />
        </div>
    )
}

export { Bar };

import { map, maxBy } from "lodash";
import { BarData } from "../../interfaces/interfaces";
import { Bar } from "./Bar";

interface Props {
    data: BarData[],
    accentColor?: string
}

const BarChart = ({ data, accentColor = 'bg-emerald-300' }: Props) => {
    const maxTodo = maxBy(data, 'amount');

    return (
        <div className="flex h-36 items-end w-full justify-center">
            {map(data, groupItem => <Bar key={groupItem.legend} data={groupItem} accentColor={accentColor} highestValue={maxTodo?.amount ?? 0} />)}
        </div>
    )
}

export { BarChart };

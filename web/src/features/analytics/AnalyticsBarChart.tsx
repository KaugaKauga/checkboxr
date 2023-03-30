import { forEach, orderBy, size, sortBy } from "lodash";
import { BarChart } from "../../components/graph/BarChart";
import { BarData } from "../../interfaces/interfaces";
import { Todo } from "../../interfaces/todo";


interface Props {
    data: { [key: number]: Todo[] },
    accentColor: string,
    title: String
}

const AnalyticsBarChart = ( { data, accentColor, title }: Props) => {
    const chartData: BarData[] = [];

    forEach(data, (todosOnDate, date) => {
        let barData = { amount: size(todosOnDate), done: 0, legend: 'date'}
        forEach(todosOnDate, todo => {
            if(todo.completedAt) {
                barData.done += 1;
            }
        })
        chartData.push(barData)
    });

    return (
        <div>
            <div className="capitalize text-lg font-medium text-stone-500 my-2 mx-2">{title}</div>
            <BarChart data={chartData} accentColor={accentColor} />
       </div>
    )
}

export { AnalyticsBarChart };

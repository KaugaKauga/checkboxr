import { forEach, groupBy } from "lodash";
import { type } from "os";
import { getColorTheme } from "../../helpers/colorDeterminer";
import { dateForType } from "../../helpers/dateReadable";
import { useTodoStore } from "../../helpers/store";
import { Todo, Type } from "../../interfaces/todo";
import { AnalyticsBarChart } from "./AnalyticsBarChart";

const AnalyticsPage = () => {
    const todos = useTodoStore(store => store.todos);
    const todosGroupedByType = groupBy(todos, 'type');

    let groupedTodos: { [key: string]: { [key: number]: Todo[] } } = {
        [Type.daily] : {},
        [Type.weekly]: {},
        [Type.monthly]: {}
    };

    forEach(todosGroupedByType, (group, type) => {
        groupedTodos[type] = groupBy(group, todo => dateForType(todo.type, todo.createdAt));
    });

    return (
        <div className="space-y-6">
            <AnalyticsBarChart data={groupedTodos[Type.daily]} accentColor={getColorTheme(Type.daily).bg.light} title={Type.daily}/>
            <AnalyticsBarChart data={groupedTodos[Type.weekly]} accentColor={getColorTheme(Type.weekly).bg.light} title={Type.weekly} />
            <AnalyticsBarChart data={groupedTodos[Type.monthly]} accentColor={getColorTheme(Type.monthly).bg.light} title={Type.monthly} />
        </div>
    )
}

export { AnalyticsPage };

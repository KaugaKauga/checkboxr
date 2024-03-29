import { filter, map, orderBy, size } from "lodash";
import { useState } from "react";
import { BigStatDisplay } from "../../components/BigStatDisplay";
import { FlowButton } from "../../components/FlowButton";
import { HistoryListItem } from "../../components/HistoryListItem";
import { NavBar } from "../../components/navigation/NavBar";
import { SidebarToggleBtn } from "../../components/navigation/SidebarToggleBtn";
import { useTodoStore } from "../../helpers/store";
import { Type } from "../../interfaces/todo";
//{ type: Type | string, setType: (arg0: Type | null) => void }
const HistoryPage = () => {
    const [type, setType] = useState<Type | null>(null);
    const todos = useTodoStore(state => state.getTodoByType(type));
    const completedTodos = filter(todos, 'completedAt');

    
    const sortedByDateTodos = orderBy(todos, 'createdAt', 'desc');
    console.log({completedTodos, sortedByDateTodos})

    return (
        <div>
            <NavBar rightIconButton={<SidebarToggleBtn />} />
            <dl className="my-7 text-center mx-auto grid max-w-3xl grid-cols-2 gap-8">
                <BigStatDisplay number={`${size(completedTodos)}`} title="Done" />
                <BigStatDisplay number={`${size(todos)}`} title="Created" />
            </dl>
            <div className="flex justify-between mb-7">
                <FlowButton onClick={() => setType(null)} text="All" />
                <FlowButton onClick={() => setType(Type.daily)} text="Daily" />
                <FlowButton onClick={() => setType(Type.weekly)} text="Weekly" />
                <FlowButton onClick={() => setType(Type.monthly)} text="Monthly" />
            </div>
            <div className="space-y-4" >
                {map(sortedByDateTodos, todo => <HistoryListItem key={todo.id} todo={todo} />)}
            </div>
        </div>
    )
}

export { HistoryPage };

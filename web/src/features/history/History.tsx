import { filter, map, size } from "lodash";
import { useParams } from "react-router-dom";
import { BigStatDisplay } from "../../components/BigStatDisplay";
import { HistoryListItem } from "../../components/HistoryListItem";
import { GoBackButton } from "../../components/navigation/GoBackButton";
import { NavBar } from "../../components/navigation/NavBar";
import { useTodoStore } from "../../helpers/store";
import { Type } from "../../interfaces/todo";

const History = () => {
    const { type = Type.daily } = useParams<{ type?: Type}>();
    const todos = useTodoStore(state => state.getAllActiveTodos(type));
    const completedTodos = filter(todos, 'completedAt');

    return (
        <div>
            <NavBar leftIconButton={<GoBackButton />} />
            <dl className="my-7 text-center mx-auto grid max-w-3xl grid-cols-2 gap-8">
                <BigStatDisplay number={`${size(completedTodos)}`} title="Done" />
                <BigStatDisplay number={`${size(todos)}`} title="Created" />
            </dl>
            <div className="space-y-4" >
                {map(completedTodos, todo => <HistoryListItem key={todo.id} todo={todo} />)}
            </div>
        </div>
    )
}

export { History };

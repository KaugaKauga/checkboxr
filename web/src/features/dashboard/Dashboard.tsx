import { groupBy } from "lodash";
import { Link } from "react-router-dom";
import shallow from 'zustand/shallow'
import { Button } from "../../components/Button";
import { NavBar } from "../../components/navigation/NavBar";
import { SidebarToggleBtn } from "../../components/navigation/SidebarToggleBtn";
import { useTodoStore } from "../../helpers/store";
import { Type } from "../../interfaces/todo";
import { MainStats } from "./MainStats";
import { TodoSection } from "./TodoSection";

const Dashboard = () => {
    const todos = useTodoStore(state => state.getAllActiveTodos(null), shallow);
    const groupedTodosByType = groupBy(todos, todo => todo.type);

    return (
        <div className="flex flex-col content-between h-full justify-between">
            <NavBar
                rightIconButton={<SidebarToggleBtn />}
            />
            <div className="flex-grow">
                <MainStats todos={todos} />
                <TodoSection todos={groupedTodosByType[Type.daily]} type={Type.daily} />
                <TodoSection todos={groupedTodosByType[Type.weekly]} type={Type.weekly} />
                <TodoSection todos={groupedTodosByType[Type.monthly]} type={Type.monthly} />
            </div>
            <div className="w-full flex justify-between">
                <Link to="todo/template"><Button text="Template" /></Link>
                <Link to="todo/one"><Button text="New" /></Link>
            </div>
        </div>
    )
}

export { Dashboard };
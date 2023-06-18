import { ArrowUturnLeftIcon } from "@heroicons/react/24/outline";
import { useTodoStore } from "../helpers/store";
import { CheckIcon } from "../icons/CheckIcon";
import { XMarkIcon } from "../icons/XMarkIcon";
import { Todo } from "../interfaces/todo";
import { IconButton } from "./IconButton";

interface Props {
    todo: Todo
}

const HistoryListItem = ({ todo }: Props) => {
    const addMissedToCurrent = useTodoStore(state => state.addMissedToCurrent);

    return (
        <div>
            <div className="flex justify-between">
                <div className='text-stone-700 font-medium text-lg'>{todo.title}</div>
                <div className="flex">
                    {!todo.completedAt &&
                        <IconButton
                            onClick={() => addMissedToCurrent(todo)}
                            icon={<ArrowUturnLeftIcon className="h-6 w-6 text-stone-700" />}
                        />}
                    <div className="p-1">{todo.completedAt ? <CheckIcon /> : <XMarkIcon />}</div>
                </div>
            </div>
            <div className='text-stone-500 font-medium text-base'>{todo.description}</div>
        </div>
    )
}

export { HistoryListItem };

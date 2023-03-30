import { filter, map } from 'lodash';
import create from 'zustand'
import { persist } from 'zustand/middleware'
import { Category } from '../interfaces/category';
import { Task } from '../interfaces/task';
import { Time } from '../interfaces/time';
import { Todo, Type } from '../interfaces/todo';
import { categoryData } from '../mockData/categoryData';
import { createInitialTodoData } from '../mockData/initialTodoData';
import { taskData } from '../mockData/taskData';
import { timeData } from '../mockData/timeData';
import { filterDateForType } from './date';

interface TodoState {
    showSidebar: boolean,
    todos: { [key: string]: Todo },
    addTodo: (arg0: Todo) => void,
    completeTodo: (arg0: Todo) => void,
    categories: { [key: string]: Category },
    time: { [key: string]: Time },
    tasks: { [key: string]: Task },
    getTodoByType: (type: Type | null) => Todo[],
    getAllActiveTodos: (type: Type | null) => Todo[],
    toggleSidebar: () => void,
    addMissedToCurrent: (todo: Todo) => void
}

const useTodoStore = create<TodoState>()(
    persist(
        (set, get) => ({
            showSidebar: false,
            todos: createInitialTodoData(),
            categories: categoryData,
            time: timeData,
            tasks: taskData,
            addTodo: (todo: Todo) => set(state => ({ todos: { ...state.todos, [todo.id]: todo } })),
            completeTodo: (todo: Todo) => {
                set(state => ({ todos: { ...state.todos, [todo.id]: { ...todo, completedAt: Date.now() } } }))
            },
            getTodoByType: (type: Type | null) => {
                const todos = get().todos;
                if(!type) {
                    return map(todos);
                }
                return filter(todos, todo => todo.type === type);
            },
            getAllActiveTodos: (type: Type | null) => {
                const todos = get().getTodoByType(type);
                return filter(todos, todo => filterDateForType(todo.type, todo.createdAt));
            },
            toggleSidebar: () => set(state => ({showSidebar: !state.showSidebar})),
            addMissedToCurrent: (todo: Todo) => {
                set(state => ({ todos: { ...state.todos, [todo.id]: { ...todo, createdAt: Date.now() } } }))
            }
        }),
        {
            name: 'todo-storage',
        }
    )
);

export { useTodoStore };

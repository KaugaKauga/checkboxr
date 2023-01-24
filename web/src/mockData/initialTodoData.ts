import { Todo, Type } from "../interfaces/todo";

const createInitialTodoData = (): {[key: string]: Todo } => {
    const now = Date.now();

    return {
        'dailyTodoId': {
            id: 'dailyTodoId',
            title: 'This is a daily todo',
            createdAt: now,
            taskId: 'oneTimeOnly',
            type: Type.daily
        },
        'weeklyTodoId': {
            id: 'weeklyTodoId',
            title: 'Weekly. Complete todo --->',
            createdAt: now,
            taskId: 'oneTimeOnly',
            type: Type.weekly
        },
        'monthlyTodoId': {
            id: 'monthlyTodoId',
            title: 'Monthly todo. Clean your room?',
            createdAt: now,
            taskId: 'oneTimeOnly',
            type: Type.monthly
        }
    }

}

export { createInitialTodoData };

import create from 'zustand'
import { generateId } from "../helpers.ts";


interface Task {
    id: string,
    title: string,
    createdAt: number
}
interface ToDoStore {
    tasks: Task[];
    createTask: (title: string) => void;
    updateTask: (id: string, title: string) => void;
    removeTask: (id: string) => void;
}


export const useToDoStore = create<ToDoStore>((set, get) => ({
    tasks: [
        {
            id: 'asdfg',
            title: 'First task',
            createdAt: 9566141
        },
        {
            id: 'hgkgkjj',
            title: 'Second task',
            createdAt: 9566141
        }
    ],
    createTask: (title) => {
        const { tasks } = get();
        const newTasks = {
            id: generateId(),
            title,
            createdAt: Date.now()
        }
        set({
            tasks: [newTasks].concat(tasks)
        })
    },
    updateTask: (id: string, title: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.map((task) => ({
                ...task,
                title: task.id === id ? title : task.title
            }))
        })
    },
    removeTask: (id: string) => {
        const { tasks } = get();
        set({
            tasks: tasks.filter((task) => task.id !== id)
            });
    },
}));

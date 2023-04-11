export interface ITodo {
    id: number,
    completed: boolean,
    text: string
}
export interface IFormProps {
    todos: ITodo[],
    inputText: string,
    status: string,
    setInputText: (inputText:string) => void,
    setStatus: (status:string) => void,
    setTodos: (todos:ITodo[]) => void
}
export interface ITodoProps {
    todos: ITodo[],
    todo: ITodo,
    text: string,
    setTodos: (todos:ITodo[]) => void
}
export interface ITodoListProps {
    todos: ITodo[],
    filteredTodos: ITodo[],
    setTodos: (todos:ITodo[]) => void
}

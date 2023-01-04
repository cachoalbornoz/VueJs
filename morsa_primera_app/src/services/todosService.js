import todosMock from "../mock/todo";

const TodoService = () => {
    const getTodos = async () => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(todosMock)
            }, 1500)
        })
    }
    return { getTodos }
}


const todoService = TodoService();

export default todoService;
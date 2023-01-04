import { computed, ref } from "vue";
import initialTodos from './mock/todo';

const todos = ref([...initialTodos])
const todoText = ref('')

const uncompletedTodos = computed(() => todos.value.filter(t => !t.completed))
const completedTodos = computed(() => todos.value.filter(t => t.completed))

const toggle = (id) => {
    const todo = todos.value.find(t => t.id === id)
    if (todo?.completed !== undefined) {
        todo.completed = !todo.completed
    }
}

const agregar = (name) => {
    const newTodo = {
        id: todos.value.length + 1,
        name,
        completed: false
    }
    todos.value.push(newTodo)
    todoText.value = ''
}

const borrar = (id) => {
    todos.value = todos.value.filter(t => t.id !== id)
}

const actualizar = (payload) =>{
    todos.value = payload
}

const todosFactory = () => ({ todoText, uncompletedTodos, completedTodos, toggle, agregar, actualizar, borrar })

export { todosFactory }
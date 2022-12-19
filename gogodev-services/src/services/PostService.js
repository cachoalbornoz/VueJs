import { ref } from 'vue'


class PostService {

    constructor() {
        this.posts = ref([])
    }


    getPosts() {
        return this.posts
    }

    async fetchAll() {

        try {

            const url = 'https://jsonplaceholder.typicode.com/posts';

            const response = await fetch(url);
            const dataJson = await response.json()
            this.posts = dataJson

        } catch (error) {
            console.log(error)
        }
    }
}

export default PostService
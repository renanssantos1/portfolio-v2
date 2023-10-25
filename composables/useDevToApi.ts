
import { Posts, Post } from "~~/types/post";
export default () => {

    const config = useRuntimeConfig()
    const DEVTO_URL: string = config.devToUri

    const get = async<T>(endpoint: string) => {
        return useFetch<T>(`${DEVTO_URL}/${endpoint}`)
    }

    const getPosts = async(username: string) => {
        return get<Posts[]>(`/articles?username=${username}`)
    }

    const getPostById  = async(id: number) => {
        return get<Post>(`/articles/${id}`)
    }

    return {
        getPosts,
        getPostById
    }
};
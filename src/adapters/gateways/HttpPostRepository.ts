import type { AxiosResponse } from "axios";
import type { PostRepostitory } from "../../domain/repositories/PostRepository";
import httpClient from "../../infrastructure/adapter/httpClient";

class HttpPostRepository implements PostRepostitory {
    async createPost(jwt: string, title: string, content: string, priority_emoji: string): Promise<AxiosResponse | undefined> {
        try {
            return await httpClient.post('/posts', { title, content, priority_emoji },
                                                    { 
                                                        headers: {"Content-Type": "application/json", Authorization: `Bearer ${jwt}`}
                                                    }
            );
        } catch (error) {
            console.error(`${error}: サーバーに接続できませんでした`);
        }     
    }
    async showPosts(jwt: string): Promise<AxiosResponse | undefined> {
        try {
            return await httpClient.get('/posts', {headers: {"Authorization": `Bearer ${jwt}`}});
        } catch(error) {
            console.error(`${error}: サーバーに接続できませんでした`);
        }
    }
    async updatePost(postId: number, title: string, content: string, priority_emoji: string) {
        try {
            return await httpClient.post('/update-post', { id: postId, title: title, content: content, priority_emoji: priority_emoji });
        } catch(error) {
            console.error(`${error}: サーバーに接続できませんでした`);
        }
    }
    async deletePost(postId: number) {
        try {
            return await httpClient.post('/delete-post', { id: postId });
        } catch(error) {
            console.error(`${error}: サーバーに接続できませんでした`);
        }
    }
}

export default HttpPostRepository;
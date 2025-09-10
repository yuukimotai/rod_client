import type { AxiosResponse } from "axios";
export interface PostRepostitory {
    createPost(jwt: string, title: string, content: string, priority_emoji: string): Promise<AxiosResponse | undefined>;
    showPosts(jwt: string): Promise<AxiosResponse | undefined>;
    updatePost(postId: number, title: string, content:string, priority_emoji: string): Promise<AxiosResponse | undefined>;
    deletePost(postId: number): Promise<AxiosResponse | undefined>
}
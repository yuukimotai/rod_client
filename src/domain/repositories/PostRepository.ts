import type { AxiosResponse } from "axios";
export interface PostRepostitory {
    createPost(title: string, content: string, priority_emoji: string): Promise<AxiosResponse | undefined>;
    showPost(postId: number): Promise<AxiosResponse | undefined>;
    updatePost(postId: number, title: string, content:string, priority_emoji: string): Promise<AxiosResponse | undefined>;
    deletePost(postId: number): Promise<AxiosResponse | undefined>
}
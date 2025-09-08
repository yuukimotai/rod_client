import type { PostRepostitory } from "../../domain/repositories/PostRepository";

class CreatePostUseCase {
    constructor(private postRepo: PostRepostitory){}

    async execute(title: string, content: string, priority_emoji: string): Promise<{status: number; title: string}> {
        const response = await this.postRepo.createPost(title, content, priority_emoji);
        if (response) {
            return {status: response.status, title: response.data.title}
        } else {
            console.error("レスポンスが取得できませんでした");
            return {status: 500, title: "投稿作成失敗"}
        }
    }
}

export default CreatePostUseCase;
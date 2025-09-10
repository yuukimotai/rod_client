import type { AxiosResponse } from "axios";
import type { PostRepostitory } from "../../domain/repositories/PostRepository";

class ShowPostsUseCase {
    constructor(private postRepo: PostRepostitory){}

    async execute(jwt: string): Promise<AxiosResponse | undefined> {
        const response = await this.postRepo.showPosts(jwt);
        console.log(response)
        if (response) {
            return response;
        } else {
            return undefined;
        }
    }
}

export default ShowPostsUseCase;
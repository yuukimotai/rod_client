import type { AxiosResponse } from "axios";
import type { CommentRepostitory } from "../../domain/repositories/CommentRepository";

class ShowCommentsUseCase {
    constructor(private commentRepo: CommentRepostitory){}

    async execute(jwt: string): Promise<AxiosResponse | undefined> {
        const response = await this.commentRepo.showComments(jwt);
        if (response) {
            return response;
        } else {
            return undefined;
        }
    }
}

export default ShowCommentsUseCase;
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Comment from "../../../domain/entities/Comment";
import ShowCommentsUseCase from "../../../usecases/comment/ShowCommentsUseCase";
import CommentRepository from "../../../adapters/gateways/HttpCommentRepository";
//import PostDetail from "./PostDetail";


const ShowComments = () => {
    const [cookie, setCookie] = useCookies(["bearer_token"]);
    const [comments, setComments] = useState<Comment[]>([]);
    const commentRepository = new CommentRepository();
    const showCommentsUseCase = new ShowCommentsUseCase(commentRepository);

    const fetchComments = async () => {
        const result = await showCommentsUseCase.execute(cookie.bearer_token);
        if (result) {
            setComments(result.data as Comment[]);
            alert("自分の投稿を読み込みました");
        }
    }
    useEffect(() => {
        fetchComments();
    }, []);
    return (
        <>
            <h1>コメント一覧</h1>
                <li className="w-3/12 overflow-y-scroll">
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.id}>
                                <h3>{comment.content}</h3>
                                <button type="button">詳細</button>
                            </li>
                        ))}
                    </ul>
                </li>
        </>
    );
}

export default ShowComments;
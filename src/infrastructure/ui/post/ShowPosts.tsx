import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Post from "../../../domain/entities/Post";
import PostRepository from "../../../adapters/gateways/HttpPostRepository";
import ShowPostsUseCase from "../../../usecases/post/ShowPostsUseCase";

const ShowPosts = () => {
    const [cookie, setCookie] = useCookies(["bearer_token"]);
    const [posts, setPosts] = useState<Post[]>([]);
    const postRepository = new PostRepository();
    const showPostsUseCase = new ShowPostsUseCase(postRepository);
    const fetchPosts = async () => {
        const result = await showPostsUseCase.execute(cookie.bearer_token);
        if (result) {
            setPosts(result.data);
            alert("自分の投稿を読み込みました");
        }
    }
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            自分の投稿一覧
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </>
    );
}

export default ShowPosts;
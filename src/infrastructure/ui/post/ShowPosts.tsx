import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Post from "../../../domain/entities/Post";
import ShowPostsUseCase from "../../../usecases/post/ShowPostsUseCase";
import PostRepository from "../../../adapters/gateways/HttpPostRepository";
import PostDetail from "./PostDetail";


const ShowPosts = () => {
    const [cookie, setCookie] = useCookies(["bearer_token"]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);
    const [viewModal, setViewModal] = useState<boolean>(false);
    const postRepository = new PostRepository();
    const showPostsUseCase = new ShowPostsUseCase(postRepository);

    const fetchPosts = async () => {
        const result = await showPostsUseCase.execute(cookie.bearer_token);
        if (result) {
            setPosts(result.data as Post[]);
            alert("自分の投稿を読み込みました");
        }
    }
    const selectPost = (post: Post) => {
        setViewModal(true);
        setSelectedPost(post);
    }
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <>
            {viewModal && selectedPost ? <PostDetail post={selectedPost} viewModal={viewModal} setViewModal={setViewModal} /> : null }
            自分の投稿一覧
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <input type="button" value="詳細" onClick={()=> selectPost(post)} />
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ShowPosts;
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Post from "../../../domain/entities/Post";
import ShowPostsUseCase from "../../../usecases/post/ShowPostsUseCase";
import PostRepository from "../../../adapters/gateways/HttpPostRepository";
import PostDetail from "./PostDetail";


const ShowPosts = () => {
    const [cookie, setCookie] = useCookies(["bearer_token"]);
    const [posts, setPosts] = useState<Post[]>([]);
    const [selectedPost, setSelectedPost] = useState<Post>(new Post());
    const [viewDetail, setViewDetail] = useState<boolean>(false);
    const postRepository = new PostRepository();
    const showPostsUseCase = new ShowPostsUseCase(postRepository);

    const fetchPosts = async () => {
        const result = await showPostsUseCase.execute(cookie.bearer_token);
        if (result) {
            setPosts(result.data as Post[]);
            alert("自分の投稿を読み込みました");
        }
        if (result?.status !==200) {
            alert("投稿の読み込みに失敗しました。ログインしてください");
            window.location.href = "/login";
        }
    }
    const selectPost = (post: Post) => {
        setViewDetail(true);
        setSelectedPost(post);
    }
    useEffect(() => {
        fetchPosts();
    }, []);
    useEffect(() => {
    }, [selectedPost]);

    return (
        <>
            <ul className="flex flex-row max-h-96">
                <li className="w-3/12 overflow-y-scroll">
                    <ul>
                        {posts.map((post) => (
                            <li key={post.id}>
                                <h3>{post.title}</h3>
                                <button type="button" onClick={()=> selectPost(post)}>詳細</button>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="w-9/12">
                    {viewDetail ? (<PostDetail post={selectedPost}/>) : (<div>投稿を選択してください</div>)}
                </li>
            </ul>
        </>
    );
}

export default ShowPosts;
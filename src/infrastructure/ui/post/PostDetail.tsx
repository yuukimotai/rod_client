import React,{useState, useEffect, use} from "react";
import { useCookies } from 'react-cookie';

import Post from "../../../domain/entities/Post";
import PostRepository from "../../../adapters/gateways/HttpPostRepository";
import UpdatePostUseCase from "../../../usecases/post/UpdatePostUseCase";
import DeletePostUseCase from "../../../usecases/post/DeletePostUseCase";

type Props ={
    post: Post;
}

const PostDetail: React.FC<Props> = ({post}) => {
    const [cookie, setCookie] = useCookies(["bearer_token"]);
    const [currentPost, setCurrentPost] = useState<Post>();
    const [id , setId] = useState<number>(0);
    const [title, setTitle] = useState<string>(post.title ?? "No Title");
    const [content, setContent] = useState<string>(post.content ?? "No Content");

    const inputTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value);
    }
    const inputContentChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setContent(e.target.value);
    }
    const handleUpdate = async (e) => {
        e.preventDefault();
        console.log(currentPost)
        const postRepository = new PostRepository();
        const updatePostUseCase = new UpdatePostUseCase(postRepository);   
        const result = await updatePostUseCase.execute(cookie.bearer_token, id, title, content, "");
        
        if (result.status === 200 ) {
            alert("更新されました")
            window.location.reload();
        }
    }
    const handleDelete = async () => {
        const postRepository = new PostRepository();
        const deletePostUseCase = new DeletePostUseCase(postRepository);
        const result = await deletePostUseCase.execute(cookie.bearer_token, id);
        
        if (result.status === 204 ) {
            alert("削除されました")
            window.location.reload();
        }
    }
    useEffect(()=>{
        setCurrentPost(post);
        setId(post.id ?? 0);
        setTitle(post.title ?? "読み込みに失敗しました")
        setContent(post.content ?? "読み込みに失敗しました")
    },[post]);

    return (
        <>
            <div className={'fixed flex flex-col'}>
                <p>{post.title}</p>
                <p className='flex flex-col rounded'>
                    <input onChange={inputTitleChange} name="title"
                            value={title} type='text' className='rounded border border-lime-500 mb-5 text-white'/>
                    <input onChange={inputContentChange} name="content"
                            value={content} type='text' className='rounded border border-lime-500 mb-14 text-white'/>
                    <button type="button" onClick={handleUpdate} >更新</button>
                    <button type="button" onClick={handleDelete} >削除</button>
                </p>
            </div>
        </>
    );
};

export default PostDetail;


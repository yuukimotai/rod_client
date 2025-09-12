import React,{useState, useEffect, use} from "react";
import Post from "../../../domain/entities/Post";

type Props ={
    post: Post;
}

const PostDetail: React.FC<Props> = ({post}) => {
    const [title, setTitle] = useState<string>(post.title ?? "No Title");
    const [content, setContent] = useState<string>(post.content ?? "No Content");

    const inputTitleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setTitle(e.target.value);
    }
    const inputContentChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setContent(e.target.value);
    }
    const handleUpdate = () => {
        console.log("更新されました")
    }
    const handleDelete = () => {
        console.log("削除されました")
    }
    useEffect(()=>{
        post.title = title;
        post.content = content;
        post.priority_emoji = "";
    },[title, content]);

    return (
        <>
                <div className={'fixed flex flex-col'}>
                    <p>{post.title}</p>
                    <p className='flex flex-col rounded'>
                        <input onChange={inputTitleChange} name="title"
                                value={title} type='text' className='rounded border border-lime-500 mb-5 text-white'/>
                        <input onChange={inputContentChange} name="content"
                                value={content} type='text' className='rounded border border-lime-500 mb-14 text-white'/>
                        <input type="button" onClick={handleUpdate} value="更新" />
                        <input type="button" onClick={handleDelete} value="削除" />
                    </p>
                </div>

        </>
    );
};

export default PostDetail;


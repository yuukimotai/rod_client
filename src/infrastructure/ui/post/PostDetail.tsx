import React,{useState, useEffect, use} from "react";
import Post from "../../../domain/entities/Post";

type Props = {
    post: Post;
    viewModal: boolean;
    setViewModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const PostDetail: React.FC<Props> = ({post, viewModal, setViewModal}) => {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");

    const inputTitleChange = () =>{
        setTitle(title);
    }
    const inputContentChange = () =>{
        setContent(content);
    }
    const handleUpdate = () => {
        console.log("更新されました")
    }
    const handleDelete = () => {
        console.log("削除されました")
    }
    const clickBackground = () => {
        setViewModal(false);
    };
    useEffect(()=>{
        post.title = title;
        post.content = content;
        post.priority_emoji = "";
    },[title, content]);

    return (
        <>
                <div className={'fixed flex flex-col items-center justify-center overflow-hidden bg-gray-500/50 transition-all ' +
                                (viewModal ? ' top-0 left-0 h-screen w-screen ' : ' top-1/2 left-1/2 h-0 w-0 ')}
                                onClick={clickBackground}>
                    <p>{post.title}</p>
                    <p className='flex flex-col rounded bg-lime-700 border border-lime-500 p-20'>
                        <input onChange={inputTitleChange} name="title"
                                value={post.title} type='text' className='rounded border border-lime-500 mb-5 text-white'/>
                        <input onChange={inputContentChange} name="content"
                                value={post.content} type='text' className='rounded border border-lime-500 mb-14 text-white'/>
                        <input type="button" onClick={handleUpdate} value="更新" />
                        <input type="button" onClick={handleDelete} value="削除" />
                    </p>
                </div>

        </>
    );
};

export default PostDetail;


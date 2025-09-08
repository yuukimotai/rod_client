import {useState, useRef} from 'react';
import EmojiPicker from 'emoji-picker-react';

import PostRepository from '../../../adapters/gateways/HttpPostRepository.ts'
import CreatePostUseCase from '../../../usecases/post/CreatePostUseCase.ts';
import Post from '../../../domain/entities/Post.ts';

function CreatePost() {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [chosedEmoji, setEmoji] = useState();
    const [isShowPicker, setIsShowPicker] = useState(false);

    const inputTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };
    const inputContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value);
    };
    const inputEmojiChange = (event: React.ChangeEvent<HTMLInputElement>, emojiObject) => {
        setEmoji(emojiObject);
    };
    const handlePicker = (e) => {
        console.log("絵文字選択が押されました")
        setIsShowPicker(true);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const postRepository = new PostRepository();
        const createPostUsecase = new CreatePostUseCase(postRepository);
        const post = new Post();
        //念のための型チェック
        post.title = title;
        post.content = content;
        //post.priority_emoji = emoji;
        const result = await createPostUsecase.execute(post.title, post.content, "");
        if (result.status === 200) {
            alert('新しい投稿を作成しました');
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className='flex flex-col rounded bg-lime-700 border border-lime-500 p-20'>
                <input onChange={inputTitleChange} name="title"
                        value={title} type='text' className='rounded border border-lime-500 mb-5 text-white'/>
                <input onChange={inputContentChange} name="content"
                        value={content} type='text' className='rounded border border-lime-500 mb-14 text-white'/>
                <button type="submit">作成</button>
            </form>
            <div>
                {isShowPicker ? <EmojiPicker />: null}
                <button onClick={handlePicker}>絵文字選択</button>
            </div>
        </>
    );
}

export default CreatePost;
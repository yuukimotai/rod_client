import { useState } from 'react';
import { useCookies } from 'react-cookie';
import AuthRepository from '../../../adapters/gateways/HttpAuthRepository.ts'
import CloseAccountUseCase from '../../../usecases/auth/CloseAccountUseCase.ts';
import User from '../../../domain/entities/User.ts'

const CloseAccount = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['bearer_token']);
    const [password, setPassword] = useState<string>("");

    const inputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const authRepository = new AuthRepository();
        const closeAccountUseCase = new CloseAccountUseCase(authRepository);
        const user = new User();
        //念のための型チェック
        user.password = password;
        const result = await closeAccountUseCase.execute(cookies.bearer_token, user.password);
        if (result.status === 200) {
            alert('アカウントを停止しました。ご利用ありがとうございました。');
            // ログイン画面に戻るナビゲート
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col rounded bg-lime-700 border border-lime-500 p-20'>
            <input onChange={inputPasswordChange} name="password"
                    value={password} type='password' className='rounded border border-lime-500 mb-14 text-white'/>
            <button type="submit">退会</button>
        </form>
    );
}

export default CloseAccount;
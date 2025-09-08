import { useState } from 'react';
import { useCookies } from 'react-cookie';

import AuthRepository from '../../../adapters/gateways/HttpAuthRepository.ts'
import LoginUsecase from '../../../usecases/auth/LoginUseCase.ts'
import User from '../../../domain/entities/User.ts'

function Login() {
    const [cookie, setCookie] = useCookies(["bearer_token"])
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const inputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const inputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const authRepository = new AuthRepository();
        const loginUsecase = new LoginUsecase(authRepository);
        const user = new User();
        //念のための型チェック
        user.email = email;
        user.password = password;
        const result = await loginUsecase.execute(user.email, user.password);
        if (result.status === 200) {
            // Postへのナビゲートとアラートメッセージ忘れず
            setCookie("bearer_token", result.jwt)
            alert('ログインしました');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col rounded bg-lime-700 border border-lime-500 p-20'>
            <input onChange={inputEmailChange} name="email"
                    value={email} type='email' className='rounded border border-lime-500 mb-5 text-white'/>
            <input onChange={inputPasswordChange} name="password"
                    value={password} type='password' className='rounded border border-lime-500 mb-14 text-white'/>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import AuthRepository from '../../adapters/gateways/AuthRepository.ts'
import CloseAccountUseCase from '../../usecases/CloseAccountUseCase.ts';

function CloseAccount() {
    const [cookies, setCookie, removeCookie] = useCookies(['bearer_token']);
    const [password, setPassword] = useState<string>("");

    const inputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const authRepository = new AuthRepository();
        const closeAccountUseCase = new CloseAccountUseCase(authRepository);
        const result = await closeAccountUseCase.execute(cookies.bearer_token, password);
        if (result.status === 200) {
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
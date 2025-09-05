import { useState } from 'react';

import AuthRepository from '../../adapters/gateways/AuthRepository.ts'
import CreateAccountUseCase from '../../usecases/CreateAccountUseCase.ts';

function CreateAccount() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirm, setConfirm] = useState<string>("");

    const inputEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const inputPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };
    const inputConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirm(e.target.value);
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        const authRepository = new AuthRepository();
        const createAccountUsecase = new CreateAccountUseCase(authRepository);
        const result = await createAccountUsecase.execute(email, password, confirm);
        console.log(result)
        if (result.status === 200) {
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col rounded bg-lime-700 border border-lime-500 p-20'>
            <input onChange={inputEmailChange} name="email"
                    value={email} type='email' className='rounded border border-lime-500 mb-5 text-white'/>
            <input onChange={inputPasswordChange} name="password"
                    value={password} type='password' className='rounded border border-lime-500 mb-14 text-white'/>
            <input onChange={inputConfirmChange} name="password"
                    value={confirm} type='password' className='rounded border border-lime-500 mb-14 text-white'/>
            <button type="submit">Login</button>
        </form>
    );
}

export default CreateAccount;
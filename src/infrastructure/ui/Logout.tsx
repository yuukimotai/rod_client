import { useState } from 'react';
import { useCookies } from 'react-cookie';

import AuthRepository from '../../adapters/gateways/AuthRepository.ts'
import LogoutUsecase from '../../usecases/LogoutUseCase.ts';

function Logout() {
    const [cookies, setCookie, removeCookie] = useCookies(['bearer_token']);

    const handleLogout = async (e) => {
        e.preventDefault();
        const authRepository = new AuthRepository();
        const logoutUseCase = new LogoutUsecase(authRepository);
        const result = await logoutUseCase.execute(cookies.bearer_token);
        if (result.status === 200) {
            removeCookie('bearer_token');
            window.location.href = '/login';
        } else {
            alert('ログアウトに失敗しました。時間をおいて再度お試しください。');
        }
    };

    return (
        <>
            <div>
                <button onClick={handleLogout}>ログアウト</button>
            </div>
        </>
    );
}

export default Logout;
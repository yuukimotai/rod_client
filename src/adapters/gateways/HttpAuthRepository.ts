import type {AuthRepository} from '../../domain/repositories/AuthRepository.ts';

import httpClient from '../../infrastructure/adapter/httpClient.ts';

class HttpAuthRepository implements AuthRepository {
    async createAccount(email: string, password: string, confirm_password: string): Promise<{status: number, jwt: string}> {
        try {
            const response = await httpClient.post('/create-account', { email, password, confirm_password });
            const token = response.headers['authorization'];
            return { status: response.status, jwt: token };
        } catch (error) {
            console.error(`${error}: サーバーに接続できませんでした`);
            return { status: 500, jwt: '' };
        }
    }
    async login(email: string, password: string): Promise<{status: number, jwt: string}> {
        try {
            const response = await httpClient.post('/login', { email, password });
            const token = response.headers['authorization'];
            return { status: response.status, jwt: token };
        } catch (error) {
            console.error(`${error}: サーバーに接続できませんでした`);
            return { status: 500, jwt: '' };
        }   
    }
    async logout(jwt: string): Promise<{ status: number}> {
        try {
            const response = await httpClient.post('/logout',
                { headers:{"Content-Type": "application/json", Authorization: `Bearer ${ jwt }`,}});
            return { status: response.status};
        } catch (error) {
            console.error(`${error}: サーバーに接続できませんでした`);
            return { status: 500};
        }   
    }
    async closeAccount(jwt: string, password: string): Promise<{ status: number}> {
        try {
                const response = await httpClient.post('/close-account',
                    { headers: { Authorization: `Bearer ${jwt}`, "Content-Type": "application/json"},
                      password: password});
                console.log(response)
                return { status: response.status };
        } catch (error) {
            console.error(`${error}: サーバーに接続できませんでした`);
            return { status: 500 };
        }   
    }
}

export default HttpAuthRepository;
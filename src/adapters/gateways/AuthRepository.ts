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
    async logout(): Promise<{ status: number, msg: string }> {
        console.log('Account creation logic will go here.');

        return Promise.resolve({ status: 200, msg: 'mock-jwt-token' });
    }
    async closeAccount(): Promise<{ status: number, msg: string }> {
        console.log('Account creation logic will go here.');

        return Promise.resolve({ status: 200, msg: 'mock-jwt-token' });
    }
}

export default HttpAuthRepository;
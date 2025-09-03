interface IAuthRepository {
  createAccount(): Promise<{status: number, jwt: string}>;
  login(): Promise<{ status: number, jwt: string }>;
  logout(): Promise<{ status: number, msg: string }>;
  closeAccount(): Promise<{status: number, msg: string}>;
}
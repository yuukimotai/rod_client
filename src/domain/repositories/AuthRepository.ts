export interface AuthRepository {
  createAccount(email: string, password: string, confirm: string): Promise<{status: number, jwt: string}>;
  login(email: string, password: string): Promise<{ status: number, jwt: string }>;
  logout(): Promise<{ status: number, msg: string }>;
  closeAccount(): Promise<{status: number, msg: string}>;
}
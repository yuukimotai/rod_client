import type { IAuthRepository } from '../domain/repositories/IAuthRepository';

class LoginUseCase {
  constructor(private authRepo: IAuthRepository) {}

  async execute(email: string, password: string): Promise<{ status: number; jwt: string }> {
    // Repositoryに処理を委譲
    return await this.authRepo.login(email, password); // 実際はemail/password渡すように修正する
  }
}

export default LoginUseCase;
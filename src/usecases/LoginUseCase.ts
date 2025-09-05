import type { AuthRepository } from '../domain/repositories/AuthRepository';

class LoginUsecase {
  constructor(private authRepo: AuthRepository) {}

  async execute(email: string, password: string): Promise<{ status: number; jwt: string }> {
    return await this.authRepo.login(email, password);
  }
}

export default LoginUsecase;
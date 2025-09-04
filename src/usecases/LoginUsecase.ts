import type { AuthRepository } from '../domain/repositories/AuthRepository';

class LoginUseCase {
  constructor(private authRepo: AuthRepository) {}

  async execute(email: string, password: string): Promise<{ status: number; jwt: string }> {
    return await this.authRepo.login(email, password);
  }
}

export default LoginUseCase;
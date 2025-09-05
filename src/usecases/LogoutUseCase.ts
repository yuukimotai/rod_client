import type {AuthRepository} from '../domain/repositories/AuthRepository.ts';

class LogoutUseCase {
  constructor(private authRepo: AuthRepository) {}

  async execute(jwt: string): Promise<{ status: number;}> {
    // Repositoryに処理を委譲
    return await this.authRepo.logout(jwt); // 実際はemail/password渡すように修正する
  }
}

export default LogoutUseCase;
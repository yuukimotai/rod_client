import type {AuthRepository} from '../../domain/repositories/AuthRepository.ts';

class CreateAccountUseCase {
  constructor(private authRepo: AuthRepository) {}

  async execute(email: string, password: string, confirm: string): Promise<{ status: number; jwt: string }> {
    // Repositoryに処理を委譲
    return await this.authRepo.createAccount(email, password, confirm); // 実際はemail/password渡すように修正する
  }
}

export default CreateAccountUseCase;
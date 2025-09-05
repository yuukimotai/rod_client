import type {AuthRepository} from '../domain/repositories/AuthRepository.ts';

class CloseAccountUseCase {
  constructor(private authRepo: AuthRepository) {}

  async execute(jwt: string , password: string): Promise<{ status: number}> {
    // Repositoryに処理を委譲
    return await this.authRepo.closeAccount(jwt, password);
  }
}

export default CloseAccountUseCase;
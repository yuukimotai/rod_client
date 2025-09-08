import type {AuthRepository} from '../../domain/repositories/AuthRepository.ts';

class LogoutUseCase {
  constructor(private authRepo: AuthRepository) {}

  async execute(jwt: string): Promise<{ status: number;}> {
    return await this.authRepo.logout(jwt);
  }
}

export default LogoutUseCase;
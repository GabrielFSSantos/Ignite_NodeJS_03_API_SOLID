import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckInUseCase } from '../validade-check-in'

export function makeValidateCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsRepository()

  const authenticateUseCase = new ValidateCheckInUseCase(checkInsRepository)

  return authenticateUseCase
}

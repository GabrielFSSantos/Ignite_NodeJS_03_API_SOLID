import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { SearchGymsUseCase } from '../search-gyms'

export function makeSearchGymsUseCase() {
  const gymsRepository = new PrismaGymsRepository()

  const authenticateUseCase = new SearchGymsUseCase(gymsRepository)

  return authenticateUseCase
}

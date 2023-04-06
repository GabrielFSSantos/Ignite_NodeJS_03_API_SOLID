import { beforeEach, describe, expect, it } from 'vitest'
import { FetchNearbyGymsUseCase } from './fetch-nearby-gyms'
import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'

let gymsRepository: InMemoryGymsRepository
let sut: FetchNearbyGymsUseCase

describe('Fetch Nearby Gyms Use Case', () => {
  beforeEach(async () => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new FetchNearbyGymsUseCase(gymsRepository)
  })

  it('should be able to fetch user nearby gyms', async () => {
    await gymsRepository.create({
      title: 'Near Gym',
      description: 'Near Gym',
      phone: '(00)00000-0000',
      latitude: 0,
      longitude: 0,
    })

    await gymsRepository.create({
      title: 'Far Gym',
      description: 'Far Gym',
      phone: '(00)00000-0000',
      latitude: 12.0,
      longitude: 12.0,
    })

    const { gyms } = await sut.execute({
      userLatitude: 0,
      userLongitude: 0,
    })

    expect(gyms).toHaveLength(1)
    expect(gyms).toEqual([expect.objectContaining({ title: 'Near Gym' })])
  })
})

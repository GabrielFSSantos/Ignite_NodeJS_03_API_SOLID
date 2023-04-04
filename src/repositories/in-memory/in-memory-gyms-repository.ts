import { Gym, Prisma } from '@prisma/client'
import { GymsRepository } from '../gyms-repository'
import { randomUUID } from 'node:crypto'
import { Decimal } from '@prisma/client/runtime/library'

export class InMemoryGymsRepository implements GymsRepository {
  public items: Gym[] = []

  async create(data: Prisma.GymCreateInput) {
    const gym: Gym = {
      id: randomUUID(),
      title: data.title,
      description: data.description || null,
      phone: data.phone || null,
      latitude: new Decimal(Number(data.latitude)),
      longitude: new Decimal(Number(data.longitude)),
    }

    this.items.push(gym)

    return gym
  }

  async findById(id: string) {
    const gym = this.items.find((item) => item.id === id)

    if (!gym) {
      return null
    }

    return gym
  }
}

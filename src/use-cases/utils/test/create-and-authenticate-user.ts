import { FastifyInstance } from 'fastify'
import request from 'supertest'

interface CreateAndAuthenticateUserResponse {
  token: string
}

export async function createAndAuthenticateUser(
  app: FastifyInstance,
): Promise<CreateAndAuthenticateUserResponse> {
  await request(app.server).post('/users').send({
    name: 'Jhon Doe',
    email: 'jhondoe@exemple.com',
    password: '123456',
  })

  const authResponse = await request(app.server).post('/sessions').send({
    email: 'jhondoe@exemple.com',
    password: '123456',
  })

  const { token } = authResponse.body

  return { token }
}

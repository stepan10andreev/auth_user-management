import { PrismaClient } from '@prisma/client'
import { TUserProps } from '../../data/users';

const prisma = new PrismaClient();

export const PRISMA_SERVICE = {
  async update(id: string, prop: TUserProps, value: boolean | string | Date) {
    await prisma.user.update({
      where: { id },
      data: { [prop]: value },
    })
  }
}

import { PrismaClient } from '@prisma/client'
import { IUser, TUserProps } from '../../data/users';

const prisma = new PrismaClient();

export const PRISMA_SERVICE = {
  async update(id: string, prop: TUserProps, value: boolean | string | Date) {
    await prisma.user.update({
      where: { id },
      data: { [prop]: value },
    })
  },
  async getUsers() {
    try {
      const users = await prisma.user.findMany();
      const usersWithoutPasswords = users.map(user => {
        const { password, updatedAt, ...rest } = user;
        return rest;
      })
      return usersWithoutPasswords;
    } catch (err) {
      console.log(err);
      // return err;
    }
  },
  async delete(id: string) {
    try {
      const user = await prisma.user.delete({
        where: { id }
      })
      return user
    } catch (err) {
      console.log(err);
      // return err;
    }
  },
  async login(id: string) {
    try{
      const res = await prisma.user.update({
        where: { id },
        data: { lastLogin: new Date() },
      })
      return res;
    } catch (err) {
      console.log(err);
      // return err;
    }
  }
}

import { getDateString } from "@/utils/getDateString";
import { IUser } from "../../data/users";


export const USER_SERVICE = {
  async register(data: unknown): Promise<any> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `${process.env.API_ROUTES_SECRET}`,
      },
      body: JSON.stringify(data)
    });
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/users`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json',
    //     'Authorization': `${process.env.API_ROUTES_SECRET}`,
    //   },
    //   body: JSON.stringify(data)
    // });

    const result = await res.json();
    console.log(result)
    return result;
  },

  async getUsers(): Promise<IUser[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/users?key=${process.env.API_ROUTES_SECRET}`);

    const data = await res.json();

    return data;
  },

  async login(id: string): Promise<any> {
    const lastLogin = getDateString();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/users`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `${process.env.API_ROUTES_SECRET}`,
      },
      body: JSON.stringify({
        id: id,
        lastLogin: lastLogin,
      }),
    })

    const data = await res.json();

    return data;
  },

  async changeStatus(id: string, status: string): Promise<any> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/users`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `${process.env.API_ROUTES_SECRET}`,
      },
      body: JSON.stringify({
        id: id,
        isBlocked: status,
      }),
    })

    const data = await res.json();

    return data;
  },

  async delete(id: string): Promise<any> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/users`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `${process.env.API_ROUTES_SECRET}`,
      },
      body: JSON.stringify({
        id: id,
      }),
    })

    const data = await res.json();

    return data;
  }
}

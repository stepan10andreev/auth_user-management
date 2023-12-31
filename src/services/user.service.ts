import { IUser } from "../../data/users";
import { NextResponse } from "next/server";

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

    const result = await res.json();
    return result;
  },

  async getUsers(): Promise<IUser[]> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/users`, { cache: 'no-store' });

    const data = await res.json();
    // console.log(data)
    return data;
  },

  async login(id: string): Promise<any> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/users`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `${process.env.API_ROUTES_SECRET}`,
      },
      body: JSON.stringify({
        id: id,
        lastLogin: true,
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

  async delete(id: string): Promise<NextResponse<{
    message: string;
    id: string;
  }>> {
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

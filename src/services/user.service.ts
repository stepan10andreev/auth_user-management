

export const USER_SERVICE = {
  async register(data: unknown): Promise<any> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/users`, {
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

  async getUsers() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASIC_URL}/api/users?key=${process.env.API_ROUTES_SECRET}`);


  }
}

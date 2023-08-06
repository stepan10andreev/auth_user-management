import { deleteCookie } from "cookies-next"

export const deleteNextAuthCookies = () => {
  console.log('here')
  deleteCookie('next-auth.session-token')
  deleteCookie('next-auth.callback-url')
  deleteCookie('next-auth.csrf-token')
}

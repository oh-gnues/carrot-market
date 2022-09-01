import { withIronSessionApiRoute } from 'iron-session/next'

declare module 'iron-session' {
  interface IronSessionData {
    user?: {
      id: number
    }
  }
}

const cookieOptions = {
  cookieName: 'carrotsession',
  password: process.env.COOKIE_PASSWORD!,
}

// default를 하지 않는 이유: 함수를 2개 만들 것 같아서
// 함수 1 : API route에서 세션을 받아오기 위한 함수
export function withApiSession(fn: any) {
  return withIronSessionApiRoute(fn, cookieOptions)
}

// 함수 2 : 페이지를 렌더링할 때 Next.js의 서버 사이드 렌더링에서 세션을 받아오는 함수

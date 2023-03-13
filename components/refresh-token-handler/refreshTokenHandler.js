import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export const RefreshTokenHandler = ({ setInterval }) => {
  const { data: session } = useSession()
  useEffect(() => {
    if (!!session) {
      const timeRemaining = Math.round(
        ((session.expires - 30) * 60 * 1000 - Date.now()) / 1000,
      )
      setInterval(timeRemaining > 0 ? timeRemaining : 0)
    }
  }, [session])
  return null
}

import { authClient } from '@/lib/auth-client'
import { redirect } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

const Logout = () => {

    async function logout() {
        await authClient.signOut()
        redirect('/signin')
    }

  return (
   <Button onClick={logout} variant={'secondary'}> logout </Button>
  )
}

export default Logout
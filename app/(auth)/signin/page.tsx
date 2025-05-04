import SignIn from '@/components/signin'
import { Card, CardContent } from '@/components/ui/card'
import { auth } from '@/lib/auth'
import { authClient } from '@/lib/auth-client'
import User_login from '@/lib/user'
import { redirect } from 'next/navigation'

const page = () => {
  
 const user = User_login()


  return (
    
    <div className='  flex items-center justify-center min-h-screen'>

<div className='w-full items-center justify-center max-w-md'>


    <SignIn/>
</div>
    </div>
      
  )
}

export default page
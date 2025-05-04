import { redirect } from "next/navigation"
import { auth } from "./auth"
import { useSession } from "./auth-client"

const User_login = async()=>{
    try{
      const usercredential = await auth.api.getSession
        if(usercredential.length === 2 || usercredential.length >0){
            return redirect('/signup')
        }
        return usercredential
    }catch(err){
        console.log(err)
        
    }
   
}
export default User_login
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import {dbConnect} from "../../../../util/index"
import UserSchema from "models/UserSchema"
import bcrypt from "bcrypt"


export const authOptions = {
  
    providers: [
        //Google Provider
      GoogleProvider ({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_KEY,
      }),

      CredentialsProvider ({
        name : "credentials",
        async authorize(credentials,req){
         dbConnect()

         //check User existance

         let userExist = await UserSchema.findOne({email : credentials.email})

         if(!userExist) throw new Error("No User found with This Email")
         
        //compare Password
          
        let verifyUser = await bcrypt.compare(credentials.password,userExist.password)
        if(!verifyUser) throw new Error("Invalid Password")
        
         return userExist
        }
      })
   
    ],

    callbacks: {
      
      async jwt({ token, user, account, profile, isNewUser }) {
        
        return {...token, ...user}
      },

        async session({ session, user, token }) {
    
          session.user.role = token._doc?.role
          
          return session
        }
    }
  }
  export default NextAuth(authOptions)
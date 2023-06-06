'use client';
import { UserButton, UserProfile, currentUser, useAuth, useUser } from "@clerk/nextjs";

export default async function page() {
    // const user = await currentUser();
    const { isLoaded, userId, sessionId, getToken } = useAuth();
    const { isSignedIn, user } = useUser()
  return (
    <div>Product page
        
  {/* if (!user){
     <div>Not logged in</div>
  }  */}
<UserButton afterSignOutUrl="/"/>
<div>Hello, {userId}</div>
<UserProfile path="/user-profile" routing="path" />
{/* <div>Hello {user?.firstName}</div>; */}
    </div>
  )
}

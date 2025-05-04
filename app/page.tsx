
'use client';

import Logout from '@/components/auth/logout';
import { authClient } from '@/lib/auth-client';


import React from 'react';


const Page = () => { // Renamed component to follow convention (PascalCase)



 

  return (
    <div className="text-center mx-auto flex flex-col h-full w-full items-center justify-center p-4">
      hii
      <Logout/>
    </div>
  );
}

export default Page 
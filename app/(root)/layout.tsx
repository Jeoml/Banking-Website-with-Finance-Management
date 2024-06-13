// we are using another layout.tsx in the root folder because the pages apart from the authentication pages (login and sign up) will

import React from 'react';
import Sidebar from '@/components/ui/Sidebar'; // Adjust the import path according to your file structure

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Adrian', lastName: 'JSM'};
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn} />
        {children}
    </main>
  );
}


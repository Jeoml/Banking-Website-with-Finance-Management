// we are using another layout.tsx in the root folder because the pages apart from the authentication pages (login and sign up) will
// share the same layout different from those of the authentication pages
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
        SIDEBAR
        {children}
    </main>
  );
}

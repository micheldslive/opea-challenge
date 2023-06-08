import { type Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Opea - Frontend Challenge',
  description: 'A CRUD for Opea Challenge'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang='en'>
        <link rel='icon' href='\favicon.png' sizes='any' />
        <body>{children}</body>
      </html>
    </>
  );
}

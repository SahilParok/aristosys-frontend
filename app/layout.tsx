export const metadata = {
  title: 'Aristosys - AI Recruitment Screening',
  description: 'AI-powered recruitment screening platform'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{margin: 0, padding: 0, fontFamily: 'Arial, sans-serif'}}>{children}</body>
    </html>
  );
}

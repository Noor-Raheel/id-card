// app/layout.tsx
import './globals.css'; // Importing global styles
import React from 'react';

export const metadata = {
  title: 'Student ID Cards',
  description: 'A page displaying student ID cards',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        {children}
      </body>
    </html>
  );
}

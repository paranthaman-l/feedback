import "./globals.css";
import { Alata } from 'next/font/google'

export const metadata = {
  title: "Page",
  description: "Created by Paranthaman",
};

const alata = Alata({
  weight: "400",
  subsets: ['latin']
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${alata.className}`}>
        {children}
      </body>
    </html>
  );
}
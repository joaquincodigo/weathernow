import "./globals.css";

export const metadata = {
  title: "Weather Now",
  description: "Weather in {Todo: Montevideo}",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-roboto antialiased">
        {children}
      </body>
    </html>
  );
}

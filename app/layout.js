import "./globals.css";

export const metadata = {
  title: "Weather Now",
  description: "Weather in {Todo: Montevideo}",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-roboto antialiased bg-mosaic-pattern bg-cover min-h-screen bg-[size:250px_250px]">
        {children}
      </body>
    </html>
  );
}

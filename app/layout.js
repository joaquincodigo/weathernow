import "./globals.css";

export const metadata = {
  title: "Weather Now",
  description: "Weather in {Todo: Montevideo}",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-600">
        <header className="bg-blue-300 flex justify-between"></header>
        {children}
        <div className="bg-orange-200">
          I am footer
          <div>i am config icon </div>
        </div>
      </body>
    </html>
  );
}

import './globals.css';

export const metadata = {
  title: 'Chimichanga Dashboard',
  description: 'Explore the best chimichangas in Doral!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

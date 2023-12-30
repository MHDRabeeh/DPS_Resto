import Header from "@/app/Components/Common/Header";
import SideBar from "@/app/Components/Common/SideBar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      <SideBar />
      {children}
    </div>
  );
}

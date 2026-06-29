import LeftSideBar from "@/components/Dashboard/LeftSideBar/LeftSideBar";

export default function DashboardLayout({ children }) {
  return (
    <main className="flex flex-col md:flex-row max-w-7xl px-4 sm:px-6 mx-auto">
      <LeftSideBar />
      <div className="flex-1 w-full">{children}</div>
    </main>
  );
}

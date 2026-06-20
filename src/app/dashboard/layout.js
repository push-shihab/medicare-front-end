import LeftSideBar from "@/components/Dashboard/LeftSideBar/LeftSideBar";

export default function PatientLayout({ children }) {
  return (
    <main className="md:flex max-w-7xl px-4 sm:px-6 mx-auto">
      <LeftSideBar></LeftSideBar>
      <div className="flex-1">{children}</div>
    </main>
  );
}

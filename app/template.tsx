import Navigation from "@/components/common/Navigation";
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}

import MainDetails from "./MainDetails";
import Nav from "./Nav";
export default function Home() {
  return (
      <div
          className="min-h-screen bg-[#222222]"
          style={{
              backgroundImage: `
      repeating-linear-gradient(90deg, rgba(48,48,48, 0.1), rgba(229, 231, 235, 0.1) 1px, transparent 1px, transparent 35px),
      repeating-linear-gradient(0deg, rgba(48,48,48, 0.1), rgba(229, 231, 235, 0.1) 1px, transparent 1px, transparent 93px)
    `,
          }}
      >
          <Nav/>
          <MainDetails/>
      </div>

  );
}

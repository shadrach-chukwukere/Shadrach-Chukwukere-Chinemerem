import Logo from "./ui/Logo";

export default function Suspenses() {
  return (
    <div className="loader-container overflow-hidden">
      <div className="spinner">
        <div className="logo-wrapper">
          <Logo />
        </div>
      </div>
    </div>
  );
}

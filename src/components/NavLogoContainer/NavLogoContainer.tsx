"use client";
import Logo from "@/src/assets/svg/logo.svg";
import { useRouter } from "next/navigation";

const NavLogoContainer = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="w-12">
      <div className="logo" onClick={handleClick}>
        <img src={Logo.src} alt="logo" />
      </div>
    </div>
  );
};

export default NavLogoContainer;

import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "@/widgets/header";

import { Footer } from "@/widgets/footer";
import { ScrollToTopBtn } from "@/shared/scroll";

export const Layout = () => {
  const [active, setActive] = useState(true);

  return (
    <>
      <Navbar active={active} setActive={setActive} />
      <main>
        <Outlet /> 
      </main>
      
     <ScrollToTopBtn />
      
      <Footer />
    </>
  );
};

export default Layout;
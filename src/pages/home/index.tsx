import { useEffect } from "react";
import { About } from "./components/about";
import { Banner } from "./components/banner";
import { Services } from "./components/services";
import { Store } from "./components/store";

export function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Banner />
      <Services />
      <Store />
      <About />
    </main>
  );
}

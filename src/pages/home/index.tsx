import { Banner } from "./components/banner";
import { Services } from "./components/services";
import { Store } from "./components/store";

export function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <Store />
    </main>
  );
}

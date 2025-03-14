import { BuildPage } from "./components/Build";
import { Header } from "./components/Header";
import { OptionsForU } from "./components/OptionsForU";

export default function Home() {
  return (
    <div>
    <Header/>
    <BuildPage/>
    <OptionsForU/>
    </div>
  )
}

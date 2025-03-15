import { BuildPage } from "./components/Build";
import { Header } from "./components/Header";
import { Invest } from "./components/Invest";
import { MakingPass } from "./components/MakingPass";
import { OptionsForU } from "./components/OptionsForU";

export default function Home() {
  return (
    <div>
    <Header/>
    <BuildPage/>
    <OptionsForU/>
    <MakingPass/>
    <Invest/>
    </div>
  )
}

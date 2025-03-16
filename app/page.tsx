import { BuildPage } from "./components/Build";
import { Device } from "./components/device";
import { Header } from "./components/Header";
import { Invest } from "./components/Invest";
import { MakingPass } from "./components/MakingPass";
import { OptionsForU } from "./components/OptionsForU";
import { Payment } from "./components/Payment";
import { WhyInvest } from "./components/WhyInvest";

export default function Home() {
  return (
    <div>
    <Header/>
    <BuildPage/>
    <OptionsForU/>
    <MakingPass/>
    <Invest/>
    <WhyInvest/>
    <Device/>
    <Payment/>
    </div>
  )
}

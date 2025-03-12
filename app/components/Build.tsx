export function BuildPage () {
    return (
        <section className=" bg-black/75">
<div className="relative w-full h-screen overflow-hidden">
  <div
    className="absolute w-70 h-70 bg-gradient-to-br from-pink-400/80 to-transparent rounded-full blur-3xl animate-moveAndBlink"
    style={{ top: '10%', left: '20%', animationDuration: '10s' }}
  ></div>
  <div
    className="absolute w-90 h-90 bg-gradient-to-br from-blue-400/80 to-transparent rounded-full blur-3xl animate-moveAndBlink"
    style={{ top: '50%', left: '70%', animationDuration: '8s', animationDelay: '3s' }}
  ></div>
  <div
    className="absolute w-50 h-50 bg-gradient-to-br from-green-400/80 to-transparent rounded-full blur-3xl animate-moveAndBlink"
    style={{ top: '80%', left: '40%', animationDuration: '12s', animationDelay: '5s' }}
  ></div>

  {/* Ваш контент */}
  <div className="relative z-10 mt-20 max-w-screen-2xl w-full mx-auto">
    <h1 className="text-4xl font-bold">We are bringing the world onchain to</h1>
  </div>
</div>
        </section>
    )
}
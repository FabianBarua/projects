export const Credits = () => {
  return (
    <div className=" lg:fixed mb-4 lg:mb-0 w-[96%] lg:w-max mx-auto lg:bottom-4 lg:left-4 z-50 ">
      <article className="font-mono py-3 border border-stone-800 bg-stone-900 mt-8 relative flex p-2 rounded-2xl bg-default-100/50 shadow-xl">
        <a
          className="relative my-auto size-16 min-h-16 flex justify-center"
          href="https://fabianbarua.vercel.app/"
        >
          <img
            className="hover:saturate-150 border-2 border-[#fff0] hover:border-rickBlue transition-all rounded-full w-full h-full"
            src="https://fb-rick-and-morty.vercel.app/avatar.png"
          />
        </a>
        <header className="ml-2 text-sm">
          <h3 className="text-sm text-default-300">Autor</h3>
          <h2 className="text-xl">Fabian Barua</h2>
          <p className="text-sm w-full text-end  text-default-400 capitalize">
            Diciembre 21, 2024
          </p>
        </header>
      </article>
    </div>
  )
}

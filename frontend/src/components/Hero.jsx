
export default function Hero() {
return (
    <>

<div>

  <div aria-hidden="true" className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
    <div className="bg-gradient-to-r from-pink-700/50 to-pink-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]"></div>
    <div className="bg-gradient-to-tl from-pink-600 via-red-100 to-pink-50 blur-3xl w-[60rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem]"></div>
  </div>

  <div className="relative z-10">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
      <div className="max-w-2xl text-center mx-auto">
        <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-pink-600 to-pink-500 text-transparent">
          GitIgnore Templates: Simplify Your Workflow
        </p>

        <div className="mt-5 max-w-2xl">
          <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
            The Ultimate Collection of .gitignore Templates
          </h1>
        </div>

        <div className="mt-5 max-w-3xl">
          <p className="text-lg text-gray-600">Find the perfect .gitignore template for your project. Save time and ensure your repository is clean and efficient.</p>
        </div>

      </div>
    </div>
  </div>
</div>

    </>
  )
}

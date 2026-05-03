import Layout from "../components/layouts/containerLayouts/Layout"

function Classifieds() {
  return (
    <Layout>
      <section className="classifieds-section xl:container xl:mx-auto h-[120vh]">
        <div className="wrapper flex flex-col rounded bg-gray-200 py-4 h-full shadow">
          <div className="head px-2 flex flex-col gap-4 sm:flex-row justify-between">
            <header className="text-blue-900 text-2xl font-bold">Оголошення</header>
            <div className="cta bg-blue-900 flex flex-wrap items-center rounded cursor-pointer">
              <span className="border-r border-gray-400 text-2xl px-2 py-1 text-white">+</span>
             <span className="px-3 text-white font-semibold text-md">Додати оголошення</span>
            </div>
          </div>

            <div className="h-full w-full bg-amber-500">
                <div className="h-full w-full flex flex-wrap">
                  <div className="flex-2 bg-white">
                    <div className="wrapper mx-2 p-4 flex flex-col h-full gap-2">
                      <div className="flex flex-row justify-between items-end">
                        <div>
                          <span className="font-bold text-2xl text-gray-600">Filters</span>
                        </div>
                        <div className="cursor-pointer">
                          <span className="text-blue-600 font-bold hover:underline">Clear All</span>
                        </div>
                      </div>
                      <form action="" className="h-full" method="get">
                        <div className="main-form h-full flex flex-col">
                            <div className="InputContainer h-10 w-full flex items-center justify-between px-3  rounded overflow-hidden shadow border border-gray-300">
                                  <input
                                    placeholder="Search.."
                                    id="input"
                                    className="input h-full w-full border-0 outline-0 text-[1rem] relative"
                                    name="text"
                                    type="text"
                                  />

                                  <label className="labelforsearch py-0" htmlFor="input">
                                    <svg className="searchIcon w-5" viewBox="0 0 512 512">
                                      <path
                                        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                                      ></path>
                                    </svg>
                                  </label>
                                </div>

                            <div className="category-container h-full bg-red-400 w-full">
                              <div className="flex flex-col">
                                <div><span className="font-bold text-xl text-black/70">Category</span></div>
                              </div>
                            </div>

                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="flex-3 bg-red-500"></div>
                  <div className="flex-1 bg-amber-950"></div>
                </div>
            </div>
            


        </div>
      </section>
    </Layout>
  )
}

export default Classifieds
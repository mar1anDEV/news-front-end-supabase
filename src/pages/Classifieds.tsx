
import Layout from "../components/layout/Layout"
function Classifieds() {
  return (
    <Layout>
      <section className="classifieds-section xl:container xl:mx-auto">
        <div className="wrapper flex flex-col rounded bg-blue-50 py-4">
          <div className="head px-2 flex flex-col gap-4 xl:flex-row justify-between">
            <header className="text-blue-900 text-2xl font-bold">Оголошення</header>
            <div className="cta bg-blue-900 flex flex-wrap items-center rounded cursor-pointer">
              <span className="border-r border-gray-400 text-2xl px-2 py-1 text-white">+</span>
             <span className="px-3 text-white font-semibold text-md">Додати оголошення</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Classifieds
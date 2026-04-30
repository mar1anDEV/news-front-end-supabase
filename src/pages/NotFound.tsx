
import { Link } from "react-router";
import Layout from "../components/layout/Layout"
function NotFound() {
  return (
    <Layout>
      <section className="h-screen">
     
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <h1 className="text-6xl text-blue-900 font-extrabold text-center mt-20">404 - Сторінку не знайдено</h1>
        <p className="text-center mt-4 text-gray-600">Сторінка, яку ви шукаєте, не існує.</p>
          <Link to="/" className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all duration-300">
            На головну
          </Link>
      </div>
    </section>
    </Layout>
  )
}

export default NotFound
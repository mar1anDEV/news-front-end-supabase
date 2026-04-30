
import Banner from "../components/layout/Banner"
import Layout from "../components/layout/Layout"
import SidebarLayout from "../components/layout/SidebarLayout"



function Homepage() {

  return (
    <Layout>
      <section className="w-full mb-6">
        <Banner /> 
      </section>
      <SidebarLayout />
    </Layout>
  )
}

export default Homepage
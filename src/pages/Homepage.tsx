
import Banner from "../components/layout/Banner"
import Layout from "../components/layout/Layout"
import SidebarLayout from "../components/layout/SidebarLayout"
import AdsRowHomepage from "../components/ui/AdsRowHomepage"
import SecondDesktopAdUI from "../components/ui/SecondDesktopAdsUI"

function Homepage() {

  return (
    <Layout>
      <section className="w-full mb-6">
        <Banner /> 
      </section>
      <SidebarLayout/>
      <AdsRowHomepage/>
      <SecondDesktopAdUI/>
    </Layout>
  )
}

export default Homepage
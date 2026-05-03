
import Banner from "../components/layouts/banners/Banner"
import Layout from "../components/layouts/containerLayouts/Layout"
import SidebarLayout from "../components/layouts/sidebars/SidebarLayout"
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
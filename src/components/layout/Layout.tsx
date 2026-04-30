import Navbar from "../../components/layout/Navbar"
import Footer from "../../components/layout/Footer"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      
      <main className="min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </main>
      
    </>
  )
}

export default Layout
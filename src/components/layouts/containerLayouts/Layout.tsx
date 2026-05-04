import Navbar from "../navbar/Navbar"
import Footer from "../footer/Footer"

function PageContainer({ children}: { children: React.ReactNode}) {
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

export default PageContainer
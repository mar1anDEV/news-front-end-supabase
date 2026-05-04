
import Layout from "../components/layouts/containerLayouts/Layout"
import ListingPageLayout from "../components/layouts/containerLayouts/ListingPageLayout"
import FiltersSidebar from "../components/layouts/sidebars/filters/FiltersSidebar"
import PageHeader from "../components/layouts/header/Header"

function Classifieds() {
  return (
    <Layout>
     
      <ListingPageLayout containerName="classifieds-container sm:my-4">
        <div className="w-full h-full transition-all duration-300 shadow-md">
          <div className="flex flex-col h-full">
              <PageHeader 
              title={'Оголошення'}
              description="Купуйте, продавайте та знаходьте найкращі пропозиції у вашому регіоні"
              actionLabel="Додати оголошення"
              hasButton={true}
              hasIcon={true}
              path="/post"
              />
              
            <div className="grid gap-6 mt-4 grid-cols-1 md:grid-cols-[240px_minmax(0,1fr)] xl:grid-cols-[260px_minmax(0,1fr)_280px]">
                <FiltersSidebar
                
                
                />
            </div>


          </div>
        </div>
      </ListingPageLayout>
     
    </Layout>
  )
}

export default Classifieds
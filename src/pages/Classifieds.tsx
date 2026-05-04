import React from "react"
import CategoryListingUI from "../components/ui/filters/CategoryListingUI"
import Layout from "../components/layouts/containerLayouts/Layout"
import ListingPageLayout from "../components/layouts/containerLayouts/ListingPageLayout"
import FiltersSidebar from "../components/layouts/sidebars/filters/FiltersSidebar"
import PageHeader from "../components/layouts/header/Header"
import ListingPanel from "../components/layouts/panels/ListingPanel"
import ListingsToolbar from "../components/ui/filters/ListingToolBar"
import FilterSideBarHeader from "../components/ui/filters/FilterSideBarHeader"
import SearchFilter from "../components/ui/filters/searchUI/SearchFilter"
import { fakeClassifiedsDataListing } from "../data/fakeClassifiedsDataListing"
function Classifieds() {


  const [isItemActive, setItemActive] = React.useState(fakeClassifiedsDataListing[0].id)

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
              
            <div className="mx-4 mb-4 grid gap-6 mt-4 grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)_280px] h-full">
                <FiltersSidebar>
                  <FilterSideBarHeader title="Filters" ariaActionLabel="Reset"/>

                <SearchFilter/>

                <CategoryListingUI listing={fakeClassifiedsDataListing} title="Category"/>


                </FiltersSidebar>
                
                <ListingPanel>
                  <ListingsToolbar/>
                </ListingPanel>
                <FiltersSidebar>
                  <FilterSideBarHeader title="Promoted" ariaActionLabel="View All"/>
                  
                </FiltersSidebar>
                
            </div>


          </div>
        </div>
      </ListingPageLayout>
     
    </Layout>
  )
}

export default Classifieds
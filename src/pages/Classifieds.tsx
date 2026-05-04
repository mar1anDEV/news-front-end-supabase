
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
import PriceRangeFilter from "../components/ui/PriceRangeFilter"
import FilterLocation from "../components/ui/filters/FilterLocation"
import { fakeCities } from "../data/fakeDataLocations"
import ConditionFilter from "../components/ui/filters/ConditionFilter"
import { fakeDataCondtition } from "../data/fakeDataCondition"
import BtnClassifieds from "../components/ui/buttons/BtnClassifieds"
function Classifieds() {


  const [isItemActive, setItemActive] = React.useState(fakeClassifiedsDataListing[0].id)

  console.log(isItemActive)

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

                <CategoryListingUI onItemClick={setItemActive} listing={fakeClassifiedsDataListing} title="Category"/>

                <PriceRangeFilter range={100} title="Price Range"/>

                <FilterLocation defaultOptionCity="All locations" location={fakeCities} title="Location"/>
                <ConditionFilter conditions={fakeDataCondtition} title="Condition"/>

                <div className="mt-4 mx-2">
                  <BtnClassifieds classCustom="w-full" actionLabel="Apply Filters"/>
                </div>

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

  
import { Link } from "react-router"
import Layout from "../components/layouts/containerLayouts/Layout"
import { useState} from "react"
import NewsLayout from "../components/layouts/newsLayout/NewsLayout"
import CardNews from "../components/ui/cards/CardNews"
//import { useLocation } from "react-router"
import {fakeArticles} from "../data/fakeData"
import { formatDate } from "../utils/formateDate"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock} from "@fortawesome/free-solid-svg-icons"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function News() {

   const newsCategories = [
  { id: 1, name: "Всі", ref: 'all', value: "all" },
  { id: 2, name: "Топ", ref: 'top',value: "top" },
  { id: 3, name: "Бізнес", ref: 'business',value: "business" },
  { id: 4, name: "Спорт", ref: 'sports',value: "sports" },
  { id: 5, name: "Розваги", ref: 'entartainment',value: "entertainment" },
  { id: 6, name: "Технології", ref: 'technology',value: "technology" },
  { id: 7, name: "Середовище", ref: 'enviroment',value: "environment" }
]



const [isPillActive, setPillActive] = useState(newsCategories[0].value)

//const [page, setPage] = useState(1)


//const handlePageChange = (event,value)=>{
        //setPage(value)
    //}

  

 


  return (
    <Layout>
      <section className="xl:container xl:mx-auto bg-blue-50 xl:mt-4 mb-4 rounded shadow">
        <div className="news-container pt-4 py-2 xl:mb-6">
          <div className="news-wrapper flex flex-col">
            <div className="text-black font-bold text-2xl ml-6">Новини</div>
            <nav className="nav-pills py-2 xl:ml-4 hidden xl:block">
              <ul className="pills flex flex-row gap-2">
                 {newsCategories.map((pill)=>(
                  <li onClick={()=>setPillActive(pill.value)} key={pill.id} className={`pill-${pill.id} rounded transition-colors duration-300 hover:text-white hover:bg-blue-600 font-bold cursor-pointer px-4 py-1 ${isPillActive === pill.value ? 'active bg-blue-600 text-white rounded': 'text-black bg-gray-200'}`}>
                    <span className="text-md">{pill.name}</span>
                  </li>
                ))}
              </ul>
            </nav>

              
              <NewsLayout>
                {fakeArticles.map((article)=>(
                  <CardNews title={article.title} description={article.description} pubTime={article.pubTime} imageURL={article.image_url} key={article.article_id}/>
                ))}
              </NewsLayout>

          </div>
        </div>
        <div className="pagination p-4 my-2">
              <div className="w-fit mx-auto my-2">
                <Stack spacing={2}>
                  <Pagination count={10} variant="outlined" shape="rounded" />
                </Stack>
              </div>
        </div>
      </section>
    </Layout>
  )
}

export default News



            
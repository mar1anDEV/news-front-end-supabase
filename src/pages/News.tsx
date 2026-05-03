import { Link } from "react-router"
import Layout from "../components/layout/Layout"
import { useState,useEffect } from "react"
import { useLocation } from "react-router"
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

const [isArticlenView, seArticleinView] = useState(false)
const [page, setPage] = useState(1)


const handlePageChange = (event,value)=>{
        setPage(value)
    }

const location = useLocation().pathname


      useEffect(() => {
        if(location === '/news'){
          seArticleinView(true)
        }
        else return null
      },[location])

  
  

 


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

              <div className="cards-container mt-4">
                <nav className="cards">
                  <ul className="flex flex-col md:grid grid-cols-2 xl:grid-cols-1 gap-2">
                    {fakeArticles.map((article)=> (
                      <li key={article.article_id} className={`hidden shadow xl:block transition duration-300 bg-white w-[98%] rounded mx-auto py-4 px-4 ${isArticlenView ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                        <Link to={article.link} target="_blank">
                        <div className="article">
                          <div className="flex flex-row">
                            <div className="img-holder w-80 h-40">
                              <img src={article.image_url} className="h-full w-full object-cover object-center" loading="lazy" alt={article.title}/>
                            </div>

                              <div className="info-card w-full">
                                <div className="ml-4 flex flex-col">
                                  <span className="text-black text-xl font-bold">{article.title}</span>
                                  <div className="flex flex-row items-center text-gray-500">
                                    <span className="text-md text-gray-500 mt-4">{`${formatDate(article.pubDate)}`}</span>
                                    <div className="flex flex-row">
                                      <FontAwesomeIcon icon={faClock} className="text-gray-400 text-sm ml-4 mt-3" />
                                      <p className="mt-2 ml-1">{article.pubTime}</p>
                                    </div>
                                      
                                  </div>
                                </div>
                              </div>

                          </div>
                        </div>
                        
                        </Link>
                      </li>
                    ))}


                                          {fakeArticles.map((article) => (
                                                  <div key={article.article_id} className="block xl:hidden mt-4 mx-2 p-4 bg-white rounded">
                                                        <div className="flex flex-col gap-4 w-full">
                                                            <div className="img-holder w-full relative h-40">
                                                                <img src={article.image_url} className="h-full w-full object-cover object-center overflow-hidden" alt="" />
                                                                <div className="absolute bottom-0 right-0 bg-blue-900">
                                                                  <div className="flex flex-row gap-1 px-2 py-2">
                                                                    <FontAwesomeIcon icon={faClock} className="text-white text-sm mt-1 " />
                                                                    <p className="text-white">{article.pubTime}</p>
                                                                  </div>
                                                                </div>
                                                            </div>
                                                            <div className="info flex flex-col gap-y-3">
                                                                <div className="title">
                                                                    <h3 className="text-blue-900 font-bold text-xl">{article.title}</h3>
                                                                </div>
                                                                <div className="flex flex-row items-center text-gray-500">
                                                                  <span className="text-md text-gray-500 ">{`${formatDate(article.pubDate)}`}</span>
  
                                                                </div>
                                                              
                                                                    
                                                            </div>
                                                        </div>
                                                  </div>
                                            ))}
                  </ul>
                </nav>
              </div>


          </div>
        </div>
        <div className="pagination p-4 my-2">
              <div className="w-fit mx-auto my-2">
                <Stack spacing={2}>
                  <Pagination count={10} variant="outlined" shape="rounded" onChange={handlePageChange} />
                </Stack>
              </div>
        </div>
      </section>
    </Layout>
  )
}

export default News



            
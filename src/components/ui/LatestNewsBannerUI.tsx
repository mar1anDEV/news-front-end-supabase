
import { Link } from "react-router"
import { fakeArticles } from '../../data/fakeData'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faCalendar } from "@fortawesome/free-solid-svg-icons"





function latestNewsBannerUI() {
  return (
    <main className="latest-news h-auto md:flex-1">
                <div className="flex flex-col h-full gap-4 items-start justify-between">
                    <header className="text-2xl text-blue-900 font-bold mb-4">Останні новини</header>
                    <div className="h-full w-full relative rounded">
                        <ul className="md:absolute md:inset-0 md:overflow-y-scroll flex flex-col items-start gap-3 ">
                            {fakeArticles.map((articleLatest)=>(
                                <li key={articleLatest.article_id} className="w-full">
                                    <div className="card-wrapper relative h-64  rounded-lg overflow-hidden shadow-md group">
                                        <div className="img-wrapper w-full h-full relative">
                                            <img src={articleLatest.image_url} alt={articleLatest.title} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                                            <div className="overlay absolute inset-0 bg-black/20"></div>
                                        </div>
                                        <div className="wrapper absolute inset-0">
                                            <div className="flex h-full w-full justify-end items-end">
                                                <div className="ui w-full p-4 bg-blue-900/80">
                                                    <div className="flex flex-col gap-y-8">
                                                        <div className="info flex flex-col">
                                                            <div className="title">
                                                                <h3 className="text-lg font-bold text-white w-fit">{articleLatest.title}</h3>
                                                            </div>
                                                            <div className="description hidden md:block">
                                                                <p className="text-sm font-bold text-gray-300">{articleLatest.description?.slice(0, 100)}..</p>
                                                            </div>
                                                            
                                                        </div>
                                                        <div className="flex flex-row justify-between">
                                                                    <div className="cta-btn's mb-2">
                                                                    <Link to={articleLatest.link} className="bg-white w-fit text-blue-900 font-bold py-[0.55rem] px-4 rounded hover:bg-gray-300 transition-colors duration-300">
                                                                        Детальніше
                                                                    </Link>
                                                                </div>


                                                                <div className="posted-at-time">
                                                                    <div className="date hidden mr-4">
                                                                        <FontAwesomeIcon icon={faCalendar} className="text-gray-300 text-sm mr-1 inline-block" />
                                                                        <span className="text-gray-300 text-md font-medium inline-block"><article>{articleLatest.pubDate}</article></span>
                                                                    </div>
                                                                    <FontAwesomeIcon icon={faClock} className="text-gray-300 text-sm mr-1 inline-block" />
                                                                    <span className="text-gray-300 text-md font-medium inline-block"><article>{articleLatest.pubTime}</article></span>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button className="mt-4 w-fit mx-auto md:mx-0">
                        <Link className="px-4 py-3 bg-blue-900 rounded text-white font-bold transition-colors duration-300 hover:bg-blue-700" to="/news">Переглянути всі новини</Link>
                    </button>
                </div>
            </main>
  )
}

export default latestNewsBannerUI
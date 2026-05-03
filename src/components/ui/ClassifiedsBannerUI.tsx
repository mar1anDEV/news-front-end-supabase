
import { Link } from "react-router"
import {fakeClassifieds} from "../../data/fakeData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons"


function classifiedsBannerUI() {
  return (
    <aside className="sidebar-classifieds flex-1">
                <div className="flex flex-col gap-4">
                    <header className="text-2xl text-blue-900 font-bold mb-4">Оголошення</header>
                    <div className="flex flex-col gap-4">
                        {fakeClassifieds.map((ad) => (
                              <div key={ad.ad_id} className="hidden xl:block p-4 bg-white rounded md:hover:scale-105 transition-transform duration-300">
                                    <div className="flex flex-row gap-x-4 w-full">
                                        <div className="img-holder w-35">
                                            <img src={ad.image_url} className="h-full w-full object-cover rounded shadow-md" alt="" />
                                        </div>
                                        <div className="info flex flex-col gap-y-3">
                                            <div className="title">
                                                <h3 className="text-blue-900 font-bold text-xl">{ad.title}</h3>
                                            </div>
                                            <div className="description max-w-md">
                                                <p className="text-gray-400 font-bold text-md">{ad.description}</p>
                                            </div>
                                            <div className="details flex flex-row items-center gap-2">
                                                <FontAwesomeIcon className="text-gray-400 font-bold text-md" icon={faLocation}></FontAwesomeIcon>
                                                <p className="text-gray-400 font-bold text-md">{ad.location} - <span className="text-blue-900/80">{ad.price}</span></p>
                                            </div>
                                                        <Link to={ad.link} className="bg-blue-500 w-fit text-white py-1 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
                                                        Детальніше
                                                    </Link>
                                        </div>
                                    </div>
                              </div>
                        ))}






                            {fakeClassifieds.map((ad) => (
                              <div key={ad.ad_id} className="block xl:hidden p-4 bg-white rounded md:hover:scale-105 transition-transform duration-300">
                                    <div className="flex flex-col gap-4 w-full">
                                        <div className="img-holder w-full h-40">
                                            <img src={ad.image_url} className="h-full w-full object-cover rounded shadow-md overflow-hidden" alt="" />
                                        </div>
                                        <div className="info flex flex-col gap-y-3">
                                            <div className="title">
                                                <h3 className="text-blue-900 font-bold text-xl">{ad.title}</h3>
                                            </div>
                                            <div className="description max-w-md">
                                                <p className="text-gray-400 font-bold text-md">{ad.description}</p>
                                            </div>
                                            <div className="details flex flex-row items-center gap-2">
                                                <FontAwesomeIcon className="text-gray-400 font-bold text-md" icon={faLocation}></FontAwesomeIcon>
                                                <p className="text-gray-400 font-bold text-md">{ad.location} - <span className="text-blue-900/80">{ad.price}</span></p>
                                            </div>
                                                        <Link to={ad.link} className="bg-blue-900 w-full text-center text-md font-bold text-white p-4 rounded hover:bg-blue-600 transition-colors duration-300">
                                                        Детальніше
                                                    </Link>
                                        </div>
                                    </div>
                              </div>
                        ))}










                    </div>
                    <button className="mt-6 md:mt-4 w-fit mx-auto md:mx-0">
                        <Link className="px-4 py-3 bg-blue-900 rounded text-white font-bold transition-colors duration-300 hover:bg-blue-700" to="/classifieds">Переглянути всі оголошення</Link>
                    </button>
                </div>
            </aside>
  )
}

export default classifiedsBannerUI
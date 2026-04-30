
import { Link } from "react-router"
import {fakeClassifieds} from "../../data/fakeData";




function classifiedsBannerUI() {
  return (
    <aside className="sidebar-classifieds flex-1">
                <div className="flex flex-col gap-4">
                    <header className="text-2xl text-blue-900 font-bold mb-4">Оголошення</header>
                    <div className="flex flex-col gap-4">
                        {fakeClassifieds.map((ad) => (
                            <div key={ad.ad_id} className="h-50 md:h-auto w-full rounded-lg bg-white shadow-md p-4">
                                <div className="flex flex-row gap-2 h-full">
                                    <div className="img-holder w-30 rounded overflow-hidden">
                                        <img src={ad.image_url} className="w-full h-full object-cover object-center bg-no-repeat" alt={ad.title} />
                                    </div>
                                    <div className="info flex flex-col gap-2 justify-around">
                                        <h3 className="text-lg font-bold text-blue-900 w-fit">{ad.title}</h3>
                                        <p className="text-gray-700 w-fit">{ad.description?.slice(0, 50)}...</p>
                                        <p className="text-sm text-gray-500 w-fit">{ad.price} - {ad.location}</p>
                                        <Link to={ad.link} className="bg-blue-500 w-fit text-white py-1 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
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
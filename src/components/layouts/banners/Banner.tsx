//import { NEWS_API_KEY} from "../../../config/config";
//import { useQuery } from "@tanstack/react-query";
import Carousel from "../carousel/Carousel";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router";
import { fakeArticles } from "../../../data/fakeData";
//interface Article {
  //title: string;
  //description: string;
  //image_url: string;
  //link: string;
  //pubDate: string;
  //source_name: string;
//}

function Banner() {
  //const {data} = useQuery({
    //queryKey: ["news"],
    //queryFn: async () => {
     // const response = await fetch(
      //  `https://newsdata.io/api/1/latest?apikey=${NEWS_API_KEY}&country=ua&language=uk&image=1&category=top`
      //);
      //if (!response.ok) throw new Error("Network response was not ok");
      //return response.json();
    //},
    //staleTime: 1000 * 60 * 60,
  //});
  

    //const cleanData: Article[] = data?.results?.filter(
  //(article: Article) => article.image_url && article.title && article.description
//) || [];


  return (
    <section className="banner">
      <div className="aspect-square md:aspect-video xl:container xl:aspect-21/9 xl:rounded xl:mx-auto relative">
        <div className="absolute inset-0">
         <Carousel>
        {fakeArticles.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="bg-amber-400 w-full h-full relative">
              <img src={article.image_url} className="w-full h-full object-cover object-center bg-no-repeat" alt={article.title} />
              <div className="absolute inset-0 bg-black/50">
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/55 to-transparent" />
                <div className="absolute inset-0 p-4 ">
                    <div className="info-wrapper md:mx-8 flex flex-col justify-end space-y-4 h-[90%]">
                      <div className="title md:max-w-2xl xl:max-w-4xl mb-4">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl line-clamp-2 font-bold mb-2 text-white">{article.title}</h2>
                      </div>
                      <div className="description">
                        <p className="text-sm md:text-base lg:font-bold text-white/90 max-w-prose">{article.description.slice(0, 200)}..</p>
                      </div>
                        <div className="cta mt-2 gap-2 flex flex-row items-center">
                          <Link to={article.link} target="_blank" rel="noopener noreferrer" className="bg-blue-900 transition duration-300 hover:bg-white hover:text-blue-900 text-white font-bold py-2 px-4 rounded">
                            Докладніше
                          </Link>
                            <p className="text-gray-300 font-bold ml-2">Джерело: {article.source_name.slice(0, 30)}...</p>
                        </div>
                    </div>
                    
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}




          
            </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Banner;
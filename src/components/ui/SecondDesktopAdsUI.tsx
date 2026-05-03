
import homeworkSvg from '../../assets/images/undraw_homework-research_kufa.svg'
import learningSvg from '../../assets/images/undraw_continuous-learning_a1ld.svg'
import careerSvg from '../../assets/images/undraw_career-progress_vfq5.svg'
import { Link } from 'react-router'

export const fakeCourses = [
  {
    id: 1,
    name: "Навчання онлайн",
    description: "Онлайн навчання у зручний для вас час",
    students: "2 400",
    media_url: homeworkSvg
  },
  {
    id: 2,
    name: "Курси англійської",
    description: "Вивчай англійську з носіями мови",
    students: "5 100",
    media_url: learningSvg
  },
  {
    id: 3,
    name: "Опануй професію",
    description: "Здобудь нову професію та знайди роботу",
    students: "8 700",
    media_url: careerSvg
  }
]




function secondDesktopAdUI() {

     const fakeCourses = [
  {
    id: 1,
    name: "Навчання онлайн",
    description: "Онлайн навчання у зручний для вас час",
    students: "Понад 2 400 студентів",
    media_url: homeworkSvg
  },
  {
    id: 2,
    name: "Курси англійської",
    description: "Вивчай англійську з носіями мови",
    students: "Понад 5 100 студентів",
    media_url: learningSvg
  },
  {
    id: 3,
    name: "Опануй професію",
    description: "Опануй нову професію та знайди роботу",
    students: "Понад 8 700 студентів",
    media_url: careerSvg
  }
]


  return (
    <section className='ad-ui-row xl:container xl:mx-auto py-8 bg-gray-200 mt-8 mb-8 rounded'>
        <header className='text-blue-900 font-bold text-2xl pl-4 mb-8'>Навчайся та заробляй</header>
        <div className='flex flex-col px-4 gap-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
              {fakeCourses.map((ad)=>(
                <Link to={'/'} className='flex flex-1' key={ad.id}>
                  <div className='bg-white px-2 py-4 rounded w-full h-full transition-all duration-200 hover:scale-105 hover:translate-y-2' key={ad.id}>
                    <div className='flex-col items-start justify-center h-full'>
                      <div className='wrapper flex flex-row h-full'>
                        <div className=''>
                          <div className='img-holder w-18 h-full'>
                            <img src={ad.media_url} className='w-full h-full object-contain' alt={ad.name} />
                          </div>
                        </div>
                        <div className='ml-2'>
                          <div className="info">
                            <div className="flex flex-col">
                              <span className='text-blue-900 text-xl font-bold'>{ad.name}</span>
                              <span className='text-blue-900/90 text-md font-bold mt-1'>{ad.description}</span>
                              <span className='text-gray-400 text-sm font-bold mt-2'>{ad.students}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <Link to={'/'} className='bg-blue-900 text-md text-white font-bold px-6 py-2 rounded hover:bg-blue-700 transition-colors duration-300 mt-4 w-xs text-center mx-auto'>
              Навчатись
            </Link>
        </div>
          
    </section>
  )
}

export default secondDesktopAdUI
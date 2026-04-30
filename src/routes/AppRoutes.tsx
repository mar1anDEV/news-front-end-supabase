import { Suspense} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Homepage'
import News from '../pages/News'
import Classifieds from '../pages/Classifieds'
import Jobs from '../pages/Jobs'
import Business from '../pages/Business'
import Advertising from '../pages/Advertiser'
import Community from '../pages/Community'
import Contact from '../pages/Contacts'
import Education from '../pages/Education'
import NotFound from '../pages/NotFound'
import Admin from '../pages/Admin'
function App() {
  

  return (
    <>
      
       <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/news' element={<News />} />
                  <Route path='/news/:id' element={<News />} />
                  <Route path='/classifieds' element={<Classifieds />} />
                  <Route path='/jobs' element={<Jobs />} />
                  <Route path='/business' element={<Business />} />
                  <Route path='/advertising' element={<Advertising />} />
                  <Route path='/community' element={<Community />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/education' element={<Education />} />
                  <Route path='*' element={<NotFound />} />
                  <Route path='/news-paper/admin' element={<Admin />} />
              </Routes>
          </Suspense>
       </BrowserRouter>
      
    </>
  )
}

export default App

import { Link } from "react-router"
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {

  type LinkItemMenu = {
    name: string;
    path: string;
}

 const navigationData: LinkItemMenu[] = [
    {name: 'Головна', path: '/'},
    {name: 'Новини', path: '/news'},
    {name: 'Спільнота', path: '/community'},
    {name: 'Контакти', path: '/contact'},
];

const servicesData: LinkItemMenu[] = [
    {name: 'Оголошення', path: '/classifieds'},
    {name: 'Робота', path: '/jobs'},
    {name: 'Бізнес', path: '/business'},
    {name: 'Реклама', path: '/advertising'},
    {name: 'Освіта', path: '/education'},
];




  return (
    <footer className="bg-blue-900 border-t border-white/10">
            <div className="container mx-auto px-4 py-10">
              <div className="flex flex-wrap gap-10 justify-between">

                <div className="flex flex-col gap-4 max-w-xs">
                  <div>
                    <h2 className="text-white text-2xl font-extrabold">Вісті Водолажчини</h2>
                    <p className="text-gray-400 text-sm italic mt-1">ваша місцева громадська газета</p>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Місцеві новини, оголошення та події для громади Водолажчини.
                  </p>
                  <ul className="flex flex-row gap-4">
                    <li><Link to="/" aria-label="Facebook" className="text-gray-400 hover:text-white transition duration-300"><FontAwesomeIcon icon={faFacebook} size="lg" /></Link></li>
                    <li><Link to="/" aria-label="Twitter" className="text-gray-400 hover:text-white transition duration-300"><FontAwesomeIcon icon={faTwitter} size="lg" /></Link></li>
                    <li><Link to="/" aria-label="Instagram" className="text-gray-400 hover:text-white transition duration-300"><FontAwesomeIcon icon={faInstagram} size="lg" /></Link></li>
                  </ul>
                </div>

                <nav className="flex flex-col gap-2">
                  <p className="text-white font-bold text-sm uppercase tracking-wider mb-2">Навігація</p>
                  {navigationData.map((link) => (
                    <Link key={link.name} to={link.path} className="text-gray-400 hover:text-white text-sm transition duration-300">
                      {link.name}
                    </Link>
                  ))}
                </nav>

                <nav className="flex flex-col gap-2">
                  <p className="text-white font-bold text-sm uppercase tracking-wider mb-2">Сервіси</p>
                  {servicesData.map((link) => (
                    <Link key={link.name} to={link.path} className="text-gray-400 hover:text-white text-sm transition duration-300">
                      {link.name}
                    </Link>
                  ))}
                </nav>

              </div>

              <div className="border-t border-white/40 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
                <p className="text-white font-bold text-sm">
                  &copy; {new Date().getFullYear()} Вісті Водолажчини. Усі права захищені.
                </p>
                <Link to="https://github.com/mar1anDEV" target="_blank" className="text-white hover:text-white font-bold text-sm transition duration-300">
                  Built by mar1anDEV
                </Link>
              </div>

            </div>
    </footer>
  )
}

export default Footer
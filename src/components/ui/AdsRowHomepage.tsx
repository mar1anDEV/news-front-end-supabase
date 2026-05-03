function AdsRowHomepage() {
  const ads = [
    {
      id: 1,
      label: "Авто сервіс",
      name: "СТО «Форсаж»",
      tagline: "Ремонт та обслуговування авто",
      phone: "+38 (067) 123 45 67",
      location: "вул. Центральна, 14",
      bg: "from-slate-900 via-slate-800 to-zinc-900",
      accent: "bg-amber-400",
      icon: "🔧"
    },
    {
      id: 2,
      label: "Будматеріали",
      name: "«Будівельник»",
      tagline: "Все для ремонту та будівництва",
      phone: "+38 (050) 987 65 43",
      location: "вул. Промислова, 3",
      bg: "from-blue-950 via-blue-900 to-indigo-950",
      accent: "bg-blue-400",
      icon: "🏗️"
    },
    {
      id: 3,
      label: "Аптека",
      name: "Аптека «Здоров'я»",
      tagline: "Ліки, вітаміни, медтехніка",
      phone: "+38 (063) 456 78 90",
      location: "вул. Шкільна, 7",
      bg: "from-emerald-950 via-emerald-900 to-teal-950",
      accent: "bg-emerald-400",
      icon: "💊"
    }
  ]

  return (
    <section className="ads-section-row mt-8">
      <div className="xl:container xl:mx-auto px-4">
        <header className="text-blue-900 text-2xl font-bold mb-4">Рекламні оголошення</header>
        <div className="flex flex-col lg:flex-row gap-4">
          {ads.map((ad) => (
            <div
              key={ad.id}
              className={`flex-1 bg-linear-to-br ${ad.bg} rounded-xl p-6 flex flex-col justify-between min-h-48 relative overflow-hidden`}
            >
              
              <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full opacity-10 bg-white"></div>
              <div className="absolute -right-2 -bottom-8 w-48 h-48 rounded-full opacity-5 bg-white"></div>

              <div className="flex flex-col gap-3 z-10">
                <span className={`${ad.accent} text-xs font-bold px-2 py-1 rounded w-fit text-black uppercase tracking-wider`}>
                  {ad.label}
                </span>
                <div className="text-4xl">{ad.icon}</div>
                <h3 className="text-white text-xl font-extrabold">{ad.name}</h3>
                <p className="text-gray-400 text-sm">{ad.tagline}</p>
              </div>

              <div className="mt-4 z-10 flex flex-col gap-1">
                <p className="text-gray-300 text-sm font-bold">{ad.phone}</p>
                <p className="text-gray-500 text-xs">{ad.location}</p>
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  )
}

export default AdsRowHomepage

import latestNewsBannerUI from "../ui/latestNewsBannerUI";
import classifiedsBannerUI from "../ui/classifiedsBannerUI";

function SidebarLayout() {




  return (
    <div className="xl:container mx-auto px-4 py-8 bg-gray-200 rounded my-2">
        <div className="flex flex-col md:flex-row gap-6 space-y-6 h-auto md:space-y-0">
            {latestNewsBannerUI()}
            {classifiedsBannerUI()}
        </div>
    </div>
  )
}

export default SidebarLayout
                                
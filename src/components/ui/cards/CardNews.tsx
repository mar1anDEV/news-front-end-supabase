import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faClock } from "@fortawesome/free-solid-svg-icons";

interface Props {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  hrefLink: string;
  pubDate: string;
  pubTime: string;
  nameSRC: string;
}

function CardNews({
  id,
  title,
  description,
  imageURL,
  hrefLink,
  pubDate,
  pubTime,
  nameSRC,
}: Props) {
  return (
    <a
      href={hrefLink}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full"
    >
      <article
        id={id}
        className="
          news-card
          w-full
          max-w-[980px]
          mx-auto
          bg-white
          rounded-2xl
          shadow-sm
          hover:shadow-lg
          border
          border-gray-100
          overflow-hidden
          transition-all
          duration-300
          hover:-translate-y-1
          p-4
        "
      >
        <div className="flex flex-col lg:flex-row gap-4">
          <div
            className="
              relative
              w-full
              lg:w-[340px]
              xl:w-[380px]
              h-48
              lg:h-[220px]
              shrink-0
              overflow-hidden
              rounded-xl
            "
          >
            <img
              src={imageURL}
              className="h-full w-full object-cover object-center"
              alt={`${title} - Image`}
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-2 right-0 bg-blue-900 py-1 px-3 rounded-l">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faClock} className="text-white text-sm" />
                <span className="text-white text-sm font-medium">
                  {pubTime}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between flex-1 min-h-[220px]">
            <div>
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                <FontAwesomeIcon icon={faCalendarDay} />
                <span>{pubDate}</span>
              </div>

              <h3 className="text-blue-900 text-xl xl:text-2xl font-bold leading-tight line-clamp-3">
                {title}
              </h3>

              <p className="mt-3 text-gray-500 text-sm xl:text-base font-medium leading-relaxed line-clamp-3">
                {description}
              </p>
            </div>

            <div className="mt-4 flex flex-row items-center">
              <div className="w-8 h-8 bg-amber-300 rounded-full shrink-0"></div>

              <div className="ml-2">
                <span className="text-gray-600 text-sm font-medium">
                  {nameSRC}
                </span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </a>
  );
}

export default CardNews;

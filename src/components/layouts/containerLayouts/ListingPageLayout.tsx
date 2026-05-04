import React from 'react'

interface Props {
  children?: React.ReactNode
  className?: string
  containerName?: string
}

function ListingPageLayout({
          children,
          className = 'xl:container xl:mx-auto h-screen w-full',
          containerName = ''
        }: Props) {
          return (
            <section
            aria-label=''
              className={`${className} ${containerName} transition-all duration-300`}>
              
              {children}
            </section>
          )
}

export default ListingPageLayout

import React from 'react';



export default function ResponsiveGrid({children}: {children: React.ReactNode}) {
  return (
    <div className="grid md:grid-cols-[repeat(auto-fit,minmax(320px,1fr))] xl:grid-cols-1 gap-4">
        {children}
        </div>
  );
}

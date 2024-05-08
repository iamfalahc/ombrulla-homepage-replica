import React from 'react'

const Title = ({title}) => {
  return (
    <div>
           <div className="flex items-center gap-4">
            <span className="w-2 h-2 bg-sky-700"></span>
            <span className="xl:font-medium">
           {title}
            </span>
          </div>
    </div>
  )
}

export default Title

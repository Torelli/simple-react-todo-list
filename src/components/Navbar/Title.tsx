import React from 'react'

export default function Title({title} : {title: string}) {
  return (
    <div>
        <h1 className="font-bold text-2xl">{title}</h1>
        <span className="text-xs text-slate-500">By</span>
        <div className="ml-1 text-xs group relative inline">
          <a
            className="text-indigo-600 rounded hover:text-indigo-700 active:bg-indigo-700/10 transition-all"
            href="https://github.com/Torelli"
            target="_blank"
          >
            Giovanni Torelli
          </a>
          <div className="opacity-0 -translate-x-1 whitespace-nowrap bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-center text-base rounded-lg py-2 absolute z-10 group-hover:translate-x-0 group-hover:opacity-100 -top-3 left-24 px-3 pointer-events-none transition-all">
            Check out my GitHub!
            <svg
              className="absolute text-gray-900 dark:text-white h-2 -left-2 bottom-4 rotate-90"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
      </div>
  )
}

import ApexCharts from 'apexcharts'
import { useEffect, useState } from 'react'
import ReactLogo from '../../assets/img/stack-svg/react.svg';

const Skills = () => {
    const mainSvgThumbFilenames = ["react", "javascript", "css-3", "html-5", "sass", "tailwindcss-icon", 
      "python", "mongodb-icon", "nodejs-icon", "git-icon",]
    const otherSvgThumbFilenames = ["go", "digital-ocean-icon", "mysql-icon", "numpy", "pandas-icon",
      "seaborn-icon", "java", "c", "jupyter", "r-lang"]

    return (
        <div id="skills" className="container flex flex-col max-w-7xl mx-auto items-center justify-center mt-16 px-12 lg:px-16">
          <div className="mb-16">
            <div className="container flex flex-col">
                <h1 className="text-primary text-5xl text-left mb-8 lg:mb-12  w-full border-b border-neutral font-semibold">Main Stack</h1>
            </div>
            <div className="flex w-full flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              {mainSvgThumbFilenames.map((iconName) => {
                const iconPath = require(`../../assets/img/stack-svg/${iconName}.svg`)
                return <img className="size-16 md:size-24 lg:size-28" alt={iconName} src={iconPath} />
              })}
            </div>
          </div>
            
          <div>
            <div className="container flex flex-col">
                <h1 className="text-primary text-5xl text-left mb-8 lg:mb-12 w-full border-b border-neutral font-semibold">Other Skills</h1>
            </div>
            <div className="flex w-full flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
              {otherSvgThumbFilenames.map((iconName) => {
                const iconPath = require(`../../assets/img/stack-svg/${iconName}.svg`)
                return <img className="size-16 md:size-24 lg:size-28" alt={iconName} src={iconPath} />
              })}
            </div>
          </div>
        </div>
    )
}

export default Skills;
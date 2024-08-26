import { Banner } from "../layout/Banner"

const Skills = () => {
    const mainSvgThumbFilenames = ["react", "javascript", "css-3", "html-5", "sass", "tailwindcss-icon", 
      "python", "mongodb-icon", "nodejs-icon", "git-icon",]
    const otherSvgThumbFilenames = ["go", "digital-ocean-icon", "mysql-icon", "numpy", "pandas-icon",
      "seaborn-icon", "java", "r-lang"]

    const combinedSvgThumbFilenames = mainSvgThumbFilenames.concat(otherSvgThumbFilenames)

    const mainImages = mainSvgThumbFilenames.map((iconName, index) => ({
      id: iconName,
      image: require(`../../assets/img/stack-svg/${iconName}.svg`)
    }));

    const otherImages = otherSvgThumbFilenames.map((iconName, index) => ({
      id: iconName,
      image: require(`../../assets/img/stack-svg/${iconName}.svg`)
    }));

    const combinedImages = combinedSvgThumbFilenames.map((iconName, index) => ({
      id: iconName,
      image: require(`../../assets/img/stack-svg/${iconName}.svg`)
    }));

    return (
        <div id="skills" className="container flex flex-col max-w-8xl mx-auto items-center justify-center mt-16 px-8 lg:px-16">
          <div className="mb-16 w-full">
            <div className="container flex flex-col">
                <h1 className="text-primary text-5xl text-left mb-8 lg:mb-12  w-full border-b border-neutral font-semibold">Skills</h1>
            </div>
            <div className="w-full hidden lg:block">
              <Banner images={combinedImages} speed={10000} />
            </div>
            <div className="w-full flex flex-col gap-5 lg:hidden">
              <Banner images={mainImages} dir={"right"} speed={10000} />
              <Banner images={otherImages} dir={"left"} speed={8000} />
            </div>
          </div>
        </div>
    )
}

export default Skills;
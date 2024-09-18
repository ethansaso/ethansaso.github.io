import Reveal from "../util/Reveal"

const Skills = () => {
    const group1Filenames = ["react", "css-3", "html-5", "sass", "tailwindcss-icon", "bootstrap"]
    const group2Filenames = ["javascript", "mongodb-icon", "nodejs-icon", "go", "digital-ocean-icon", "mysql-icon", "git-icon"]
    const group3Filenames = ["java", "python", "seaborn-icon", "r-lang", "numpy", "pandas-icon"]

    const group1Images = group1Filenames.map((iconName, index) => ({
      id: iconName,
      image: require(`../../assets/img/stack-svg/${iconName}.svg`)
    }));

    const group2Images = group2Filenames.map((iconName, index) => ({
      id: iconName,
      image: require(`../../assets/img/stack-svg/${iconName}.svg`)
    }));

    const group3Images = group3Filenames.map((iconName, index) => ({
      id: iconName,
      image: require(`../../assets/img/stack-svg/${iconName}.svg`)
    }));

    const renderImageGroup = (imageGroup) => {
      return (
        <div className="flex justify-start gap-4 flex-wrap">
          {imageGroup.map((image) => (
          <div className="size-12">
            <img className="object-contain h-full w-full" alt={image.id} id={image.id} src={image.image}/>
          </div>
          ))}
        </div>
      );
    }

    return (
        <div id="skills" className="container flex flex-col max-w-7xl mx-auto items-center justify-center mt-24 mb-16 lg:mb-32">
          <div className="container flex flex-col">
              <h1 className="text-primary text-3xl text-left mb-8 w-full font-semibold">Skills</h1>
          </div>
          <div className="skills-cards h-auto max-w-6xl">
            <Reveal width='100%' from='bottom'>
              <div className="md:columns-2 gap-6">
                <div className="glass-low rounded-2xl w-full p-8">
                  <h1 className="text-4xl font-semibold text-secondary mb-2">Frontend</h1>
                  <p className="h2 text-lg mb-4">I'm passionate about crafting interactive, user-friendly sites that leave a lasting impression.</p>
                  {renderImageGroup(group1Images)}
                </div>
                <div className="glass-low rounded-2xl mt-6 w-full p-8">
                  <h1 className="text-4xl font-semibold text-secondary mb-2">Backend</h1>
                  <p className="h2 text-lg mb-4">I love designing complex systems and take pride in engineering reliable, scalable solutions.</p>
                  {renderImageGroup(group2Images)}
                </div>
                <div className="glass-low rounded-2xl mt-6 md:mt-[6rem] w-full break-before-column p-8">
                  <h1 className="text-4xl font-semibold text-secondary mb-2">Data/Software</h1>
                  <p className="h2 text-lg mb-4">I believe in leveraging data to solve diverse problems and drive real-world impact.</p>
                  {renderImageGroup(group3Images)}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
    )
}

export default Skills;
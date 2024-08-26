import { Banner } from "../layout/Banner"

const Skills = () => {
    const group1Filenames = ["react", "css-3", "html-5", "sass", "tailwindcss-icon"]
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

    const imageGroupArray = [group1Images, group2Images, group3Images];

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
        <div id="skills" className="container flex flex-col max-w-7xl mx-auto items-center justify-center mt-32 px-8 lg:px-16 mb-32">
          <div className="container flex flex-col">
              <h1 className="text-primary text-5xl text-center mb-16 w-full font-semibold">Skills</h1>
          </div>
          <div className="skills-cards h-auto md:columns-2 gap-6 w-full">
            <div className="glass-card w-full p-8">
              <h1 className="text-4xl font-semibold text-secondary">Frontend</h1>
              <p className="h2 text-lg mb-4">I'm passionate about crafting interactive, user-friendly websites that leave a lasting impression.</p>
              {renderImageGroup(group1Images)}
            </div>
            <div className="glass-card mt-6 w-full p-8">
              <h1 className="text-4xl font-semibold text-secondary">Backend</h1>
              <p className="h2 text-lg mb-4">I love designing complex systems and take pride in engineering reliable, scalable solutions.</p>
              {renderImageGroup(group2Images)}
            </div>
            <div className="glass-card mt-6 md:mt-[6rem] w-full break-before-column p-8">
              <h1 className="text-4xl font-semibold text-secondary">Data/Software</h1>
              <p className="h2 text-lg mb-4">I believe in leveraging data to solve diverse problems and drive real-world impact.</p>
              {renderImageGroup(group3Images)}
            </div>
          </div>
          {/*
          <div className="skills-card flex flex-col w-full h-96 border rounded-2xl border-neutral">
            <div className="flex w-full py-4 border border-transparent border-b-neutral justify-around">
              <p className="flex items-center justify-center ">
                Front-End
              </p>
              <p className="flex items-center justify-center">
                Back-End
              </p>
              <p className="flex items-center justify-center">
                Data
              </p>
            </div>
            Come back to this later to better distribute the skills throughout the container. For right now, kind of got nothing.
            <div name="skills container" className="w-full flex h-full flex-row flex-wrap flex-shrink justify-center">
              {imageGroupArray.map((group) => (
                <div name="skill group" className="flex flex-col flex-wrap max-h-full justify-center content-center">
                  {group.map((image) => (
                    <div className="h-24 w-24">
                      <img className="h-full w-full" alt={image.id} id={image.id} src={image.image}/>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          */}
        </div>
    )
}

export default Skills;
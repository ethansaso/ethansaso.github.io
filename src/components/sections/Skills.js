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
          <div key={image.id} className="size-12">
            <img className="object-contain h-full w-full" alt={image.id} id={image.id} src={image.image}/>
          </div>
          ))}
        </div>
      );
    }

    return (
      <div className="w-full py-24 bg-base-300 my-24 lg:mb-32 border-y-base-100 border border-x-0">
        <div id="skills" className="container flex flex-col mx-auto items-center justify-center px-8 2xl:px-32">
          <div className="mb-8 w-full">
              <h1 className="text-3xl text-left font-bold mb-4">Skills</h1>
              <div className="flex items-end flex-col md:flex-row">
                  <p className="text-lg text-neutral-content max-w-3xl">I'm always exploring new skills and technologies to enhance my work. As I learn, I discover more innovative and effective solutions for every project.</p>
              </div>
          </div>
          <div className="skills-cards h-auto">
            <Reveal width='100%' from='bottom'>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex flex-col justify-between border border-neutral bg-base-200 rounded-2xl w-full p-8">
                  <div>
                    <h1 className="text-4xl font-semibold text-primary mb-2">Frontend</h1>
                    <p className="h2 mb-4">I'm passionate about crafting interactive, user-friendly sites that leave a lasting impression.</p>
                  </div>
                  {renderImageGroup(group1Images)}
                </div>
                <div className="flex flex-col justify-between border border-neutral bg-base-200 rounded-2xl w-full p-8">
                  <div>
                    <h1 className="text-4xl font-semibold text-primary mb-2">Backend</h1>
                    <p className="h2 mb-4">I love designing complex systems and take pride in engineering reliable, scalable solutions.</p>
                  </div>
                  {renderImageGroup(group2Images)}
                </div>
                <div className="flex flex-col justify-between border border-neutral bg-base-200 rounded-2xl w-full p-8">
                  <div>
                    <h1 className="text-4xl font-semibold text-primary mb-2">Data/Software</h1>
                    <p className="h2 mb-4">I believe in leveraging data to solve diverse problems and drive real-world impact.</p>
                  </div>
                  {renderImageGroup(group3Images)}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    )
}

export default Skills;
import { iconMap } from "../../util/iconMap";

interface Icon {
  id: string;
  image: string; // SVG url
}

const group1Filenames = ["react", "css-3", "html-5", "sass", "tailwindcss-icon", "bootstrap"]
const group2Filenames = ["javascript", "mongodb-icon", "nodejs-icon", "go", "digital-ocean-icon", "mysql-icon", "git-icon"]
const group3Filenames = ["java", "python", "seaborn-icon", "r-lang", "numpy", "pandas-icon"]

const Skills = () => {
  const makeIcons = (names: string[]): Icon[] =>
    names.map((id) => ({
      id,
      image: iconMap[id] ?? '',  // fallback if misspelled
    }));
  
  const group1Images = makeIcons(group1Filenames);
  const group2Images = makeIcons(group2Filenames);
  const group3Images = makeIcons(group3Filenames);

  const renderIconGroup = (imageGroup: Icon[]) => {
    return (
      <div className="flex justify-start gap-4 flex-wrap">
        {imageGroup.map((image) => (
        <div key={image.id} className="size-8">
          <img className="object-contain h-full w-full" alt={image.id} id={image.id} src={image.image}/>
        </div>
        ))}
      </div>
    );
  }

  return (
    <section className="w-full py-24 bg-base-300 mt-24 border-y-base-100 border border-x-0 relative">
      <div className="absolute top-0 h-px inset-x-7 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute bottom-0 h-px inset-x-7 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div id="skills" className="container flex flex-col mx-auto items-center justify-center px-8 2xl:px-32 font-medium">
        <div className="mb-8 w-full">
            <h1 className="text-3xl text-left font-bold mb-6">Skills</h1>
            <div className="text-md font-medium flex items-end flex-col md:flex-row leading-relaxed">
                <p className="text-neutral-content max-w-2xl">I'm always exploring new skills and technologies to enhance my work. As I learn, I discover more innovative and effective solutions for every project.</p>
            </div>
        </div>
        <div className="skills-cards h-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col border border-neutral bg-base-200 rounded-2xl w-full p-8">
              <div>
                <h1 className="text-2xl font-semibold mb-4">Frontend</h1>
                <p className="h2 mb-6 text-neutral-content text-[16px]">I'm passionate about crafting interactive, user-friendly sites that leave a lasting impression.</p>
              </div>
              {renderIconGroup(group1Images)}
            </div>
            <div className="flex flex-col border border-neutral bg-base-200 rounded-2xl w-full p-8">
              <div>
                <h1 className="text-2xl font-semibold mb-4">Backend</h1>
                <p className="h2 mb-6 text-neutral-content text-[16px]">I love designing complex systems and take pride in engineering scalable solutions.</p>
              </div>
              {renderIconGroup(group2Images)}
            </div>
            <div className="flex flex-col border border-neutral bg-base-200 rounded-2xl w-full p-8">
              <div>
                <h1 className="text-2xl font-semibold mb-4">Data/Software</h1>
                <p className="h2 mb-6 text-neutral-content text-[16px]">I believe in leveraging data to solve diverse problems and drive real-world impact.</p>
              </div>
              {renderIconGroup(group3Images)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
import ApexCharts from 'apexcharts'
import { useEffect, useState } from 'react'

const Skills = () => {
    const [options, setOptions] = useState({
        series: [
          {
            name: "Skills",
            color: "var(--fallback-s, oklch(var(--s)/var(--tw-text-opacity)))",
            data: [4, 4, 4, 4, 3, 3],
          }
        ],
        chart: {
          sparkline: {
            enabled: false,
          },
          type: "bar",
          width: "100%",
          height: 400,
          toolbar: {
            show: false,
          }
        },
        fill: {
          opacity: 1,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: "100%",
            borderRadiusApplication: "end",
            borderRadius: 6,
            dataLabels: {
              position: "top",
            },
          },
        },
        legend: {
          show: true,
          position: "bottom",
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          enabled: false,
        },
        xaxis: {
          labels: {
            show: true,
            style: {
              fontFamily: "Inter, sans-serif",
              cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            },
          },
          categories: ["React",  "JavaScript", "CSS","HTML", "Sass", "Tailwind"],
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
        },
        yaxis: {
            stepSize: 1,
            min: 0,
            max: 5,
            labels: {
                show: true,
                style: {
                    fontFamily: "Inter, sans-serif",
                    cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                },
            },
        },
        grid: {
          show: true,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: -20
          },
        },
    });

    useEffect(() => {
        let chart;
      
        if (document.getElementById("bar-chart") && typeof ApexCharts !== 'undefined') {
          chart = new ApexCharts(document.getElementById("bar-chart"), options);
          chart.render();
        }

        console.log(options);
      
        // Cleanup the chart instance when the component unmounts or when options change
        return () => {
          if (chart) {
            chart.destroy();
          }
        };
    }, [options]);

    const frontEndSkills = {
        svgThumbs: ["react", "javascript", "css-3", "html-5", "sass", "tailwindcss-icon"],
        data: [4, 4, 4, 4, 3, 3],
        xaxis: { 
            categories: ["React",  "JavaScript", "CSS","HTML", "Sass", "Tailwind"],
        }
    }

    const backEndSkills = {
        svgThumbs: ["python", "javascript", "mongodb-icon", "go", "digital-ocean-icon", "mysql-icon", "nodejs-icon"],
        data: [5, 4, 3, 3, 3, 3],
        xaxis: { 
            categories: ["Python", "JavaScript", "MongoDB", "Golang", "Digital Ocean", "MySQL", "NodeJS"],
        }
    }

    const otherSkills = {
        svgThumbs: ["python", "numpy", "pandas-icon", "seaborn-icon", "git-icon", "go", "java", "c", "jupyter", "r-lang"],
        data: [5, 4, 4, 4, 4, 3, 3, 3, 3, 2],
        xaxis: { 
            categories: ["Python", "Numpy", "Pandas", "Seaborn", "Git", "Golang", "Java", "C", "R", "Jupyter" ],
        }
    }

    const handleDropdownClick = () => {
        setOptions(prevOptions => ({
          ...prevOptions,
          series: prevOptions.series.map(series =>
            series.name === "Income" ? { ...series, data: ["1", "2", "3", "4", "5", "6"] } : series
          )
        }));
      };

    return (
        <div id="skills" className="container flex flex-col max-w-7xl mx-auto items-center justify-center mt-16 px-16">
            <div className="container flex flex-col max-w-7xl mx-auto items-center justify-center">
                <h1 className="text-primary text-5xl text-left mb-16 w-full border-b border-neutral font-semibold">Skills</h1>
            </div>
            <div id="bar-chart">
            </div>
            
            {/*
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn m-1">Dropdown Menu</div>
                <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow h-full">
                    <li><a>Not yet implemented</a></li>
                    <li><a>Come back later</a></li>
                </ul>
            </div>
            */}
        </div>
    )
}

export default Skills;
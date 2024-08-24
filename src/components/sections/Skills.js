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
        <div id="skills" className="container flex flex-col max-w-7xl mx-auto items-center justify-center mt-16">
            <div className="container flex flex-col max-w-7xl mx-auto items-center justify-center mt-16">
                <h1 className="text-primary text-5xl text-left mb-16 w-full border-b border-neutral font-semibold">Skills</h1>
            </div>
            <div id="bar-chart">
                <div class="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
                    <div class="flex justify-between items-center pt-5">
                        <button
                        id="dropdownDefaultButton"
                        data-dropdown-toggle="lastDaysdropdown"
                        data-dropdown-placement="bottom"
                        class="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
                        type="button">
                        Last 6 months
                        <svg class="w-2.5 m-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                        </svg>
                        </button>
                        
                        <a
                        href="#"
                        class="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2">
                        Revenue Report
                        <svg class="w-2.5 h-2.5 ms-1.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="dropdown">
                <div tabindex="0" role="button" class="btn m-1">Click</div>
                <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;
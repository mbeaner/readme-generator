// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache2.0") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === "Boost1.0") {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  } else if (license === "GPL v3") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "IBM Public License Version 1.0") {
    return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)`;
  } else if (license === "BSD3") {
    return `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`;
  } else return ''
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `* [License](#license)`
  } else return ''
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return (`This project is licensed under ${data.license}.`)
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  By ${data.name}
  GitHub username: ${data.username}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation <a name='installation'></a>
  ${data.installation}

  ## Usage <a name='usage'></a>
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing <a name='contributing'></a>
  ${data.contributing}

  ## Tests <a name='tests'></a>
  ${data.tests}

  ## Questions <a name='questions'></a>
  For any questions regarding this project please feel to contact me at:
  * Email: ${data.email}
  * GitHub: https://github.com/${data.username}
`;
}

module.exports = generateMarkdown;

// TODO: Create a function that returns a license badge based on which license is passed in
// function to generate markdown for README
function licenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "Apache License 2.0") {
     licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
    };
  if (licenseType === "GNU General Public License 3.0") {
      licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    };
  return licenseString
  };



function generateMarkdown(data) {
return `# ${data.title}
  
${licenseBadge(data)}

## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#installation)
  3. [Usage](#usage)
  4. [License](#license) 
  5. [Contributing](#contributing)
  6. [Tests](#tests) 
  7. [GitHub](#gitHub)
  8. [Contact](#contact)
  9. [Other](#other)

## Description

${data.description} 

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## GitHub

Let's Connect! [${data.github}](https://www.github.com/${data.github})
## E-mail

Email Me! [${data.email}](mailto:${data.email})

## Other

${data.other}`
}

module.exports.generateMarkdown = generateMarkdown;

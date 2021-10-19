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
## License
${licenseBadge(data)}
## Table of Contents:
  1. [Description](#description) 
  2. [Installation](#Installation)
  3. [Usage](#Usage) 
  4. [License](#License) 
  5. [Contributing](#Contributing)
  6. [Tests](#Tests) 
  7. [GitHub](#GitHub)
  8. [Contact & Qustions](#contact)



## Description
${data.description} 
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
If you have any questions, please reach out to me!
${data.tests}
## GitHub
[Link to Personal Github](${data.github})
## E-mail
[Link to Personal E-mail](${data.email})`
}

module.exports.generateMarkdown = generateMarkdown;

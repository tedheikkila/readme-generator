// function returns a license badge based on which license is passed in
// if no license, returns an empty string
function renderLicenseBadge(data) {
  if (data.license === "MIT") {
    var license = "https://img.shields.io/badge/License-MIT-yellow.svg"
  } else if (data.license === "Apache") {
    var license = "https://img.shields.io/badge/License-Apache%202.0-blue.svg"
  } else if (data.license === "Mozilla") {
    var license = "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg"
  } else if (data.license === "None") {
    var license = ""
  }
  return license

}

// function returns the relevant license link;
// if there is no license, returns an empty string
function renderLicenseLink(data) {
  if (data.license === "MIT") {
    var license = "https://opensource.org/licenses/MIT"
  } else if (data.license === "Apache") {
    var license = "https://opensource.org/licenses/Apache-2.0"
  } else if (data.license === "Mozilla") {
    var license = "https://opensource.org/licenses/MPL-2.0"
  } else if (data.license === "None") {
    var license = ""
  }
  return license
}

// returns the license section of README; 
// if there is no license, return an empty string
function renderLicenseSection(data) {
  if (data.license === "MIT") {
    var license = "Click on license button above to review license"
  } else if (data.license === "Apache") {
    var license = "Click on license button above to review license"
  } else if (data.license === "Mozilla") {
    var license = "Click on license button above to review license"
  } else if (data.license === "None") {
    var license = ""
  }
  return license
}

// generates markdown for README
function generateMarkdown(data) {
  return `
  
# ${data.title}

  ## Table of Contents

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation

  To install npm dependencies, please use this command >>  ${data.installation}

  ## Usage

  Here's the essentials for what you need to know to use this app: 
  ${data.usage}

  ## Contributing

  To contribute to this app, please follow these instructions: 
  ${data.contributing}

  ## License

  [![License: ${data.license}](${renderLicenseBadge(data)})](${renderLicenseLink(data)})
  
  ${renderLicenseSection(data)}

  ## Tests

  To properly test the app, use this command >>  ${data.tests}
  
  ## Questions

  -If you have any questions/concerns regarding the app, please contact me at: ${data.email}

  -Additionally, you can find me on GitHub here: https://github.com/${data.username}

`
;
}


module.exports = {
  generateMarkdown
}

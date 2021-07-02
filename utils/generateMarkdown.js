// function returns a license badge based on which license is passed in
// if no license, returns an empty string
function renderLicenseBadge(license) {
  if (license === MIT) {
    license = `https://img.shields.io/badge/License-MIT-yellow.svg`
  } else if (license === Apache) {
    license = `https://img.shields.io/badge/License-Apache%202.0-blue.svg`
  } else if (license === Mozilla) {
    license = `https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg`
  } else if (license === None) {
    license = ``
  }
}

// function returns the relevant license link;
// if there is no license, returns an empty string
function renderLicenseLink(license) {}

// returns the license section of README; 
// if there is no license, return an empty string
function renderLicenseSection(license) {}

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

  ${renderLicenseBadge}
  ${renderLicenseLink}
  ${renderLicenseSection}

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

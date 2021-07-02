// function returns a license badge based on which license is passed in
// if no license, returns an empty string
function renderLicenseBadge(license) {}

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
  - [Tests](#test)
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contributing}

  ## License

  ${data.license}

  ## Tests

  ${data.tests}
  
  ## Questions

  -If you have any questions regarding the app, please contact me at: ${data.email}

  -Additionally, you can find me at my GitHub profile here: https://github.com/${data.username}

`;
}

module.exports = {
  generateMarkdown
}


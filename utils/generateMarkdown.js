// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [Test](#test)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)

  ## Description:
  ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")n\
    ${data.description}
  ## Installation:
    ${data.installation}
  ## Usage:
    ${data.usage}
  ## Contributors:
    ${data.contributors}
  ## Test:
    ${data.test}
  ## Credits:
    ${data.credits}
  ## License:
      For additional information about the License, click the link below.
  - [License](https://opensource.org/licenses/${data.license})

  ## Questions:
      If you have any questions about the ${data.title} project, you can follow the link below to navigate to my GitHub page:
  - [GitHub Profile](https://github.com/${data.username})

For further information on this project, if you'd like to discuss changes or work together - please reach out directly to: ${data.email}.    
`;
}

module.exports = generateMarkdown;
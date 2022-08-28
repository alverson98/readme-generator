function declareSelectedBadges(licenses) {
  if (licenses === []) {
    return "";
  } else {
    var licenseMarkdown = "";

    responses.licenses.forEach((licenseChoice) => {
      licenseMarkdown +
        `[![License: ${licenseChoice.licenseName}](${licenseChoice.badgeImageURL})](${licenseChoice.licenseLink})`;
    });
    generateLicenseBadge(licenseMarkdown);
    return licenseMarkdown;
  }
}

function generateLicenseBadge(licenseMarkdown) {
  return licenseMarkdown;
}

function generateSection(name, content) {
  return `## ${name} 

${content}`;
}

function generateTitle(content) {
  return `## ${content}`;
}

function generateTableOfContents(name) {
  return `## ${name}

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenses) {
  return;
}

function generateQuestionSection(
  name,
  fullName,
  email,
  gitHub,
  contactInstructions
) {
  return `## ${name}

${contactInstructions}

${fullName}
Email: ${email}
GitHub Profile - [Link](${gitHub})
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  return `${generateLicenseBadge(responses.licenses)}
  
  ${generateTitle(responses.title)}

  ${generateSection("Description", responses.description)}

${generateTableOfContents("Table of Contents")}

${generateSection("Installation", responses.install)}

${generateSection("Usage", responses.usage)}

${generateSection("Contributing", responses.contribute)}

${generateSection("Tests", responses.test)}

${generateQuestionSection(
  "Questions",
  responses.fullName,
  responses.email,
  responses.gitHub,
  responses.contactInstructions
)}
  `;
}

module.exports = generateMarkdown;

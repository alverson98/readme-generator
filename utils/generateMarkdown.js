// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

function generateSection(name, content) {
  return `## ${name} 

${content}`;
}

function generateTitle(content) {
  return `## ${content}`;
}

function generateTableOfContents(name) {
  return `## ${name}

- Installation
- Usage
- License
- Contributing
- Tests
- Questions`;
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
  return `${generateTitle(responses.title)}

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

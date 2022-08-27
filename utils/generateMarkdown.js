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
- Questions`
}

function generateQuestionSection(name, fullName, email, gitHub, contactInstructions) {
return `## ${name}

${contactInstructions}

${fullName}
Email: ${email}
GitHub Profile - [Link](${gitHub})
`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses) {
  //title
  generateTitle(responses.title);
  //description
  generateSection("Description", responses.description);
  //table of contents
  generateTableOfContents("Table of Contents")
  //installation
  generateSection("Installation", responses.install);
  //usage
  generateSection("Usage", responses.usage);
  //license
  //contributing
  generateSection("Contributing", responses.contribute);
  //tests
  generateSection("Tests", responses.test);
  //questions
  generateQuestionSection("Questions", responses.fullName, responses.email, responses.gitHub, responses.contactInstructions)

  return `# ${responses.title}
`;
}

module.exports = generateMarkdown;

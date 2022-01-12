module.exports = {
  tagFormat: '${version}',
  branches: ['main'],
  repositoryUrl: 'https://github.com/emulsify-ds/compound.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};

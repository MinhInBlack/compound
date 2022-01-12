module.exports = {
  tagFormat: '${version}',
  branches: ['minhtytest'],
  repositoryUrl: 'https://github.com/MinhInBlack/compound.git',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};

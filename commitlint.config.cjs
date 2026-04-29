module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'refactor', 'chore', 'docs', 'test', 'perf']
    ],
    'header-max-length': [2, 'always', 72],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never']
  }
};

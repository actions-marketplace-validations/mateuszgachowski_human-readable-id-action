const core = require('@actions/core');
const github = require('@actions/github');
const { hri } = require('human-readable-ids');

try {
  const generatedId = hri.random();
  core.setOutput('id', generatedId);
} catch (error) {
  core.setFailed(error.message);
}
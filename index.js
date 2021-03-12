const core = require('@actions/core');
const github = require('@actions/github');
const { hri } = require('human-readable-ids');

try {
  const generatedId = hri.random();
  core.setOutput('generated-id', generatedId);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The id: ${generatedId}`);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
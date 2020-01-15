const boardStatuses = require('./lib/board-statuses');
const buildStatuses = require('./lib/build-statuses');
const pipelineStatuses = require('./lib/pipeline-statuses');
const pipelineTypes = require('./lib/pipeline-types');
const taskStatuses = require('./lib/task-statuses');
const verbosityLevels = require('./lib/verbosity-levels');
const buildTypes = require('./lib/build-types');
const retryPolicy = require('./lib/retry-policy');

module.exports = {
    boardStatuses,
    buildStatuses,
    pipelineStatuses,
    pipelineTypes,
    taskStatuses,
    verbosityLevels,
    buildTypes,
    retryPolicy
};

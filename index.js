const boardStatuses = require('./lib/board-statuses');
const buildStatuses = require('./lib/build-statuses');
const buildTypes = require('./lib/build-types');
const graphEdgeTypes = require('./lib/graph-edge-types');
const pipelineStatuses = require('./lib/pipeline-statuses');
const pipelineTypes = require('./lib/pipeline-types');
const retryPolicy = require('./lib/retry-policy');
const stateType = require('./lib/state-type');
const taskStatuses = require('./lib/task-statuses');
const verbosityLevels = require('./lib/verbosity-levels');

module.exports = {
    boardStatuses,
    buildStatuses,
    buildTypes,
    graphEdgeTypes,
    pipelineStatuses,
    pipelineTypes,
    retryPolicy,
    stateType,
    taskStatuses,
    verbosityLevels
};

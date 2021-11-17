const boardStatuses = require('./lib/board-statuses');
const { statuses: devenvStatuses, types: devenvTypes } = require('./lib/devenvs');
const buildStatuses = require('./lib/build-statuses');
const buildTypes = require('./lib/build-types');
const graphEdgeTypes = require('./lib/graph-edge-types');
const pipelineKind = require('./lib/pipeline-kind');
const nodeKind = require('./lib/node-kind');
const pipelineStatuses = require('./lib/pipeline-statuses');
const pipelineTypes = require('./lib/pipeline-types');
const retryPolicy = require('./lib/retry-policy');
const stateType = require('./lib/state-type');
const taskStatuses = require('./lib/task-statuses');
const verbosityLevels = require('./lib/verbosity-levels');
const logModes = require('./lib/logModes');

module.exports = {
    boardStatuses,
    devenvStatuses,
    devenvTypes,
    buildStatuses,
    buildTypes,
    graphEdgeTypes,
    pipelineKind,
    nodeKind,
    pipelineStatuses,
    pipelineTypes,
    retryPolicy,
    stateType,
    taskStatuses,
    verbosityLevels,
    logModes
};

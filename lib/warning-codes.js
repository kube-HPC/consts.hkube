module.exports = {
    INVALID_VOLUME: 1001, // Invalid or missing volume
    RESOURCES: 1002, // Insufficient resources (CPU, memory, etc.)
    JOB_CREATION_FAILED: 1003, // When _createJob fails in task executor (K8S job failure)
    KAI: 1004, // KAI Scheduler (run-ai)
};

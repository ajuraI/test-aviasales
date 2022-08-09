export const isAllTransferFilters = (transferFilters) => {
    return Object.values(transferFilters).every((filter) => filter);
};
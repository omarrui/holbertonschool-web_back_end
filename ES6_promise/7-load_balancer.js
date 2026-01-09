// Export this function as the default export of this module
export default function loadBalancer(chinaDownload, USDownload) {
    // Use Promise.race() to return whichever promise (chinaDownload or USDownload) resolves first
    return Promise.race([chinaDownload, USDownload]);
}
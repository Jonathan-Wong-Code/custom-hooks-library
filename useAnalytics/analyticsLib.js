export function setUtagForViews(analyticData) {
  if (window.utag && window.utag.view) {
    const analyticsDataCopy = { ...analyticData };
    const pageError = { page_error: analyticsDataCopy.page_error };
    delete analyticsDataCopy.page_error;
    window.utag_data = { ...window.utag_data, ...analyticsDataCopy };
    window.utag.view(pageError);
  }
}

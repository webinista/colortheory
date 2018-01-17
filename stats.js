const idSite = 1;
const piwikTrackingApiUrl = 'https://analytics.webinista.com/data/piwik.php';

let _paq = _paq || [];
_paq.push(['setDocumentTitle', document.title]);
_paq.push(['setTrackerUrl', piwikTrackingApiUrl]);
_paq.push(['setSiteId', idSite]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);

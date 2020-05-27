import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { setUtagForViews } from './analyticsLib';
import {
  PAGE_LANGUAGE,
  PAGE_SECTION,
  SITE_NAME,
  MAINTENANCE,
  MAINTENANCE_CODE,
  ERROR,
  ERROR_CODE,
  USER_LOGIN_STATE,
} from './constants';

import pkg from '../../../../package.json';

const useAnalytics = pagePurpose => {
  const location = useLocation();

  function callAnalytics() {
    const utagData = {};

    utagData.page_purpose = pagePurpose;
    utagData.page_section = PAGE_SECTION;
    utagData.page_language = PAGE_LANGUAGE;
    utagData.site_name = SITE_NAME;
    utagData.page_canonical_url = `https://shop.shawmobile.ca${location.pathname}`;
    utagData.site_version = pkg.version;
    utagData.user_login_state = USER_LOGIN_STATE;

    if (utagData.page_name === MAINTENANCE) {
      utagData.page_error = MAINTENANCE_CODE;
    } else if (utagData.page_name === ERROR) {
      utagData.page_error = ERROR_CODE;
    }

    setUtagForViews(utagData);
  }

  useEffect(() => {
    // if (process.env.NODE_ENV === 'development') return;
    callAnalytics();
  }, []);
};

export default useAnalytics;

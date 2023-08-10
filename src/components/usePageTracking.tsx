import { useEffect } from "react";
import TagManager from "react-gtm-module";
import { useLocation } from "react-router-dom";

const usePageTracking = () => {
  const location = useLocation();

  const tagManagerArgs = {
    gtmId: import.meta.env.VITE_GTM_ID,
  };

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, [location]);
};

export default usePageTracking;


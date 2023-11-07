import "../styles/index.css";
import React from "react";
import Script from "next/script";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const App = ({ Component, pageProps }) => {
  return (
    <Theme>
      <React.Fragment>
        <Component {...pageProps} />
        {/* <Script src="https://scripts.simpleanalyticscdn.com/latest.js" /> */}
        {/* <Script src="https://scripts.simpleanalyticscdn.com/auto-events.js" /> */}
        <noscript>
          {/* eslint-disable @next/next/no-img-element */}
          <img
            src="https://queue.simpleanalyticscdn.com/noscript.gif"
            alt=""
            referrerPolicy="no-referrer-when-downgrade"
          />
        </noscript>
      </React.Fragment>
    </Theme>
  );
};

export default App;

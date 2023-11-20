import "../styles/index.css";
import React from "react";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const App = ({ Component, pageProps }) => {
  return (
    <Theme>
      <React.Fragment>
        <Component {...pageProps} />
        <noscript>
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

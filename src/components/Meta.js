import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
const Meta = (props) => {
  let { title } = props;
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet='utf-8' />
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
    </>
  );
};

export default Meta;

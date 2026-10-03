// import { Helmet } from 'react-helmet-async';

// function SEO({ title, description, url, image }) {
//   const defaultTitle = "Sandip Prasad Kushwaha | Full Stack Developer";
//   const defaultDescription = "Full Stack Developer specializing in React, Node.js, MongoDB, and Express.";
//   const defaultUrl = "https://www.sandipprasadkushwaha.com.np/";
//   const defaultImage = "https://www.sandipprasadkushwaha.com.np/assets/sandip_image.png";

//   return (
//     <Helmet>
//       {/* Standard Metadata */}
//       <title>{title ? `${title} | Sandip Prasad Kushwaha` : defaultTitle}</title>
//       <meta name="description" content={description || defaultDescription} />

//       {/* Open Graph Tags */}
//       <meta property="og:title" content={title || defaultTitle} />
//       <meta property="og:description" content={description || defaultDescription} />
//       <meta property="og:url" content={url || defaultUrl} />
//       <meta property="og:image" content={image || defaultImage} />
//     </Helmet>
//   );
// }

// export default SEO;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SEO = ({ title, description, url, image }) => {
  const location = useLocation();

  // image
  const defaultImage =
    "https://www.sandipprasadkushwaha.com.np/assets/sandip_image.png";
  const ogImage = image || defaultImage;

  useEffect(() => {
    if (
      location.pathname === "/" &&
      url !== "https://www.sandipprasadkushwaha.com.np/"
    ) {
      return;
    }

    if (title) document.title = title;

    if (description) {
      setMetaTag("name", "description", description);
      setMetaTag("property", "og:description", description);
      setMetaTag("name", "twitter:description", description);
    }

    if (title) {
      setMetaTag("property", "og:title", title);
      setMetaTag("name", "twitter:title", title);
    }

    if (url) setMetaTag("property", "og:url", url);

    // Open Graph and Twitter Image 
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("name", "twitter:image", ogImage);
  }, [title, description, url, ogImage, location.pathname]);

  return null;
};

const setMetaTag = (attrType, attrValue, content) => {
  let element = document.querySelector(`meta[${attrType}="${attrValue}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attrType, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
};

export default SEO;

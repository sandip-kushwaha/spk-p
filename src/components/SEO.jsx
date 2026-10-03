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

const SEO = ({ title, description, url }) => {
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/" &&
      url !== "https://www.sandipprasadkushwaha.com.np/"
    ) {
      return;
    }

    // 2. Title 
    if (title) {
      document.title = title;
    }

    // 3. Description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }

    // 4. Open Graph Meta Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle && title) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    if (ogDescription && description) {
      ogDescription.setAttribute("content", description);
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl && url) {
      ogUrl.setAttribute("content", url);
    }
  }, [title, description, url, location.pathname]);

  return null;
};

export default SEO;

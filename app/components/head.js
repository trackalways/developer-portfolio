export default function CustomHead() {
  return (
    <>
      {/* Block all social media link previews completely */}
      <meta name="robots" content="noai, noimageai, nofollow, noindex, nositelinkssearchbox, notranslate" />
      <meta name="googlebot" content="noindex, nofollow, noarchive, notranslate, noimageindex, nosnippet" />
      <meta name="bingbot" content="noindex, nofollow, noarchive, notranslate, noimageindex, nosnippet" />
      <meta name="facebookbot" content="noindex" />
      <meta name="whatsapp" content="noindex" />
      
      {/* OG tags that explicitly declare no images should be used */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Iwashu Jain's Portfolio" />
      <meta property="og:description" content="Designer & Content Creator" />
      <meta property="og:image" content="" />
      <meta property="og:image:url" content="" />
      <meta property="og:image:secure_url" content="" />
      <meta property="og:image:height" content="0" />
      <meta property="og:image:width" content="0" />
      <meta property="og:image:alt" content="" />
      <meta property="og:site_name" content="" />
      
      {/* Twitter card with no image */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Iwashu Jain's Portfolio" />
      <meta name="twitter:description" content="Designer & Content Creator" />
      <meta name="twitter:image" content="" />
      
      {/* Explicitly no-op for bots and crawlers */}
      <meta name="pinterest" content="nopin" />
      <meta name="thumbnail" content="none" />
      <meta name="format-detection" content="telephone=no, address=no, email=no" />
      <meta name="referrer" content="no-referrer" />
    </>
  );
}

export default function CustomHead() {
  return (
    <>
      {/* Meta tags to prevent link previews with images on WhatsApp and other platforms */}
      <meta property="og:image:width" content="1" />
      <meta property="og:image:height" content="1" />
      <meta property="og:image" content="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" />
      <meta name="thumbnail" content="none" />
      <meta name="pinterest" content="nopin" />
    </>
  );
}

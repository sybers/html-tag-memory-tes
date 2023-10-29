export const HTMLElementDescriptions = {
  html: "The <html> HTML element represents the root (top-level element) of an HTML document, so it is also referred to as the root element. All other elements must be descendants of this element.",
  base: "Specifies the base URL to use for all relative URLs in a document. There can be only one such element in a document.",
  head: "Contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.",
  link: 'Specifies relationships between the current document and an external resource. This element is most commonly used to link to CSS but is also used to establish site icons (both "favicon" style icons and icons for the home screen and apps on mobile devices) among other things.',
  meta: "Represents metadata that cannot be represented by other HTML meta-related elements, like <base>, <link>, <script>, <style> and <title>.",
  script:
    "Used to embed executable code or data; this is typically used to embed or refer to JavaScript code. The <script> element can also be used with other languages, such as WebGL's GLSL shader programming language and JSON.",
  style:
    "Contains style information for a document or part of a document. It contains CSS, which is applied to the contents of the document containing this element.",
  title:
    "Defines the document's title that is shown in a browser's title bar or a page's tab. It only contains text; tags within the element are ignored.",
  body: "represents the content of an HTML document. There can be only one such element in a document.",
  address:
    "Indicates that the enclosed HTML provides contact information for a person or people, or for an organization.",
  article:
    "Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., in syndication). Examples include a forum post, a magazine or newspaper article, a blog entry, a product card, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.",
  aside:
    "Represents a portion of a document whose content is only indirectly related to the document's main content. Asides are frequently presented as sidebars or call-out boxes.",
  footer:
    "Represents a footer for its nearest ancestor sectioning content or sectioning root element. A <footer> typically contains information about the author of the section, copyright data, or links to related documents.",
  header:
    "Represents introductory content, typically a group of introductory or navigational aids. It may contain some heading elements but also a logo, a search form, an author name, and other elements.",
  h1: "Represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.",
  h2: "Represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.",
  h3: "Represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.",
  h4: "Represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.",
  h5: "Represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.",
  h6: "Represent six levels of section headings. <h1> is the highest section level and <h6> is the lowest.",
  hgroup:
    "Represents a heading grouped with any secondary content, such as subheadings, an alternative title, or a tagline.",
  main: "Represents the dominant content of the body of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.",
  nav: "Represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.",
  section:
    "Represents a generic standalone section of a document, which doesn't have a more specific semantic element to represent it. Sections should always have a heading, with very few exceptions.",
  search:
    "Represents a part that contains a set of form controls or other content related to performing a search or filtering operation.",
  blockquote:
    "Indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation. A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element.",
  cite: "Used to mark up the title of a cited creative work. The reference may be in an abbreviated form according to context-appropriate conventions related to citation metadata.",
  dd: "Provides the description, definition, or value for the preceding term (<dt>) in a description list (<dl>).",
  dt: "Specifies a term in a description or definition list, and as such must be used inside a <dl> element. It is usually followed by a <dd> element; however, multiple <dt> elements in a row indicate several terms that are all defined by the immediate next <dd> element.",
  dl: "Represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).",
  div: "The generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g., styling is directly applied to it, or some kind of layout model like flexbox is applied to its parent element).",
  figure:
    "Represents self-contained content, potentially with an optional caption, which is specified using the <figcaption> element. The figure, its caption, and its contents are referenced as a single unit.",
  figcaption:
    "Represents a caption or legend describing the rest of the contents of its parent <figure> element.",
  hr: "Represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.",
  ul: "Represents an unordered list of items, typically rendered as a bulleted list.",
  ol: "Represents an ordered list of items — typically rendered as a numbered list.",
  li: "Represents an item in a list. It must be contained in a parent element: an ordered list (<ol>), an unordered list (<ul>), or a menu (<menu>). In menus and unordered lists, list items are usually displayed using bullet points. In ordered lists, they are usually displayed with an ascending counter on the left, such as a number or letter.",
  p: "Represents a paragraph. Paragraphs are usually represented in visual media as blocks of text separated from adjacent blocks by blank lines and/or first-line indentation, but HTML paragraphs can be any structural grouping of related content, such as images or form fields.",
  pre: "Represents preformatted text which is to be presented exactly as written in the HTML file. The text is typically rendered using a non-proportional, or monospaced, font. Whitespace inside this element is displayed as written.",
  a: "Together with its href attribute, creates a hyperlink to web pages, files, email addresses, locations within the current page, or anything else a URL can address.",
  abbr: "Represents an abbreviation or acronym.",
  b: "Used to draw the reader's attention to the element's contents, which are not otherwise granted special importance. This was formerly known as the Boldface element, and most browsers still draw the text in boldface. However, you should not use <b> for styling text or granting importance. If you wish to create boldface text, you should use the CSS font-weight property. If you wish to indicate an element is of special importance, you should use the strong element.",
  bdi: "Tells the browser's bidirectional algorithm to treat the text it contains in isolation from its surrounding text. It's particularly useful when a website dynamically inserts some text and doesn't know the directionality of the text being inserted.",
  bdo: "Overrides the current directionality of text, so that the text within is rendered in a different direction.",
  br: "Produces a line break in text (carriage-return). It is useful for writing a poem or an address, where the division of lines is significant.",
  code: "Displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent's default monospace font.",
  data: "Links a given piece of content with a machine-readable translation. If the content is time- or date-related, the<time> element must be used.",
  time: "Represents a specific period in time. It may include the datetime attribute to translate dates into machine-readable format, allowing for better search engine results or custom features such as reminders.",
  dfn: "Used to indicate the term being defined within the context of a definition phrase or sentence. The ancestor <p> element, the <dt>/<dd> pairing, or the nearest section ancestor of the <dfn> element, is considered to be the definition of the term.",
  em: "Marks text that has stress emphasis. The <em> element can be nested, with each nesting level indicating a greater degree of emphasis.",
  i: "Represents a range of text that is set off from the normal text for some reason, such as idiomatic text, technical terms, and taxonomical designations, among others. Historically, these have been presented using italicized type, which is the original source of the <i> naming of this element.",
  kbd: "Represents a span of inline text denoting textual user input from a keyboard, voice input, or any other text entry device. By convention, the user agent defaults to rendering the contents of a <kbd> element using its default monospace font, although this is not mandated by the HTML standard.",
  mark: "Represents text which is marked or highlighted for reference or notation purposes due to the marked passage's relevance in the enclosing context.",
  q: "Indicates that the enclosed text is a short inline quotation. Most modern browsers implement this by surrounding the text in quotation marks. This element is intended for short quotations that don't require paragraph breaks; for long quotations use the <blockquote> element.",
  ruby: "Represents small annotations that are rendered above, below, or next to base text, usually used for showing the pronunciation of East Asian characters. It can also be used for annotating other kinds of text, but this usage is less common.",
  rp: "Used to provide fall-back parentheses for browsers that do not support the display of ruby annotations using the <ruby> element. One <rp> element should enclose each of the opening and closing parentheses that wrap the <rt> element that contains the annotation's text.",
  rt: "Specifies the ruby text component of a ruby annotation, which is used to provide pronunciation, translation, or transliteration information for East Asian typography. The <rt> element must always be contained within a <ruby> element.",
  s: "Renders text with a strikethrough, or a line through it. Use the <s> element to represent things that are no longer relevant or no longer accurate. However, <s> is not appropriate when indicating document edits; for that, use the del and ins elements, as appropriate.",
  del: 'Represents a range of text that has been deleted from a document. This can be used when rendering "track changes" or source code diff information, for example. The <ins> element can be used for the opposite purpose: to indicate text that has been added to the document.',
  ins: "Represents a range of text that has been added to a document. You can use the <del> element to similarly represent a range of text that has been deleted from the document.",
  samp: "Used to enclose inline text which represents sample (or quoted) output from a computer program. Its contents are typically rendered using the browser's default monospaced font (such as Courier or Lucida Console).",
  small:
    "Represents side-comments and small print, like copyright and legal text, independent of its styled presentation. By default, it renders text within it one font size smaller, such as from small to x-small.",
  span: "A generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a div element, but div is a block-level element whereas a <span> is an inline-level element.",
  strong:
    "Indicates that its contents have strong importance, seriousness, or urgency. Browsers typically render the contents in bold type.",
  sub: "Specifies inline text which should be displayed as subscript for solely typographical reasons. Subscripts are typically rendered with a lowered baseline using smaller text.",
  sup: "Specifies inline text which is to be displayed as superscript for solely typographical reasons. Superscripts are usually rendered with a raised baseline using smaller text.",
  u: "Represents a span of inline text which should be rendered in a way that indicates that it has a non-textual annotation. This is rendered by default as a simple solid underline but may be altered using CSS.",
  var: "Represents the name of a variable in a mathematical expression or a programming context. It's typically presented using an italicized version of the current typeface, although that behavior is browser-dependent.",
  wbr: "Represents a word break opportunity—a position within text where the browser may optionally break a line, though its line-breaking rules would not otherwise create a break at that location.",
  area: "Defines an area inside an image map that has predefined clickable areas. An image map allows geometric areas on an image to be associated with hyperlink.",
  map: "Used with <area> elements to define an image map (a clickable link area).",
  audio:
    "Used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the source element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.",
  source:
    "Specifies multiple media resources for the picture, the audio element, or the video element. It is a void element, meaning that it has no content and does not have a closing tag. It is commonly used to offer the same media content in multiple file formats in order to provide compatibility with a broad range of browsers given their differing support for image file formats and media file formats.",
  img: "Embeds an image into the document.",
  track:
    "Used as a child of the media elements, audio and video. It lets you specify timed text tracks (or time-based data), for example to automatically handle subtitles. The tracks are formatted in WebVTT format (.vtt files)—Web Video Text Tracks.",
  video:
    "Embeds a media player which supports video playback into the document. You can also use <video> for audio content, but the audio element may provide a more appropriate user experience.",
  embed:
    "Embeds external content at the specified point in the document. This content is provided by an external application or other source of interactive content such as a browser plug-in.",
  iframe:
    "Represents a nested browsing context, embedding another HTML page into the current one.",
  object:
    "Represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.",
  picture:
    "Contains zero or more <source> elements and one <img> element to offer alternative versions of an image for different display/device scenarios.",
  canvas:
    "Container element to use with either the canvas scripting API or the WebGL API to draw graphics and animations.",
  noscript:
    "Defines a section of HTML to be inserted if a script type on the page is unsupported or if scripting is currently turned off in the browser.",
  caption: "Specifies the caption (or title) of a table.",
  col: "Defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a <colgroup> element.",
  colgroup: "Defines a group of columns within a table.",
  table:
    "Represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.",
  tbody:
    "Encapsulates a set of table rows (<tr> elements), indicating that they comprise the body of the table (<table>).",
  tr: "Defines a row of cells in a table. The row's cells can then be established using a mix of <td> (data cell) and <th> (header cell) elements.",
  td: "Defines a cell of a table that contains data. It participates in the table model.",
  tfoot: "Defines a set of rows summarizing the columns of the table.",
  th: "Defines a cell as a header of a group of table cells. The exact nature of this group is defined by the scope and headers attributes.",
  thead: "Defines a set of rows defining the head of the columns of the table.",
  button:
    "An interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it performs an action, such as submitting a form or opening a dialog.",
  datalist:
    "Contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls.",
  fieldset:
    "Used to group several controls as well as labels (<label>) within a web form.",
  label: "Represents a caption for an item in a user interface.",
  form: "Represents a document section containing interactive controls for submitting information.",
  input:
    "Used to create interactive controls for web-based forms to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.",
  legend: "Represents a caption for the content of its parent <fieldset>.",
  meter:
    "Represents either a scalar value within a known range or a fractional value.",
  optgroup: "Creates a grouping of options within a <select> element.",
  select: "Represents a control that provides a menu of options.",
  option:
    "Used to define an item contained in a select, an <optgroup>, or a <datalist> element. As such, <option> can represent menu items in popups and other lists of items in an HTML document.",
  output:
    "Container element into which a site or app can inject the results of a calculation or the outcome of a user action.",
  progress:
    "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  textarea:
    "Represents a multi-line plain-text editing control, useful when you want to allow users to enter a sizeable amount of free-form text, for example, a comment on a review or feedback form.",
  details:
    'Creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state. A summary or label must be provided using the <summary> element.',
  dialog:
    "Represents a dialog box or other interactive component, such as a dismissible alert, inspector, or subwindow.",
  menu: "A semantic alternative to <ul>, but treated by browsers (and exposed through the accessibility tree) as no different than <ul>. It represents an unordered list of items (which are represented by <li> elements).",
  summary:
    "Specifies a summary, caption, or legend for a details element's disclosure box. Clicking the <summary> element toggles the state of the parent <details> element open and closed.",
  slot: "Part of the Web Components technology suite, this element is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.",
  template:
    "A mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.",
  svg: "Container defining a new coordinate system and viewport. It is used as the outermost element of SVG documents, but it can also be used to embed an SVG fragment inside an SVG or HTML document.",
  math: "The top-level element in MathML. Every valid MathML instance must be wrapped in it. In addition, you must not nest a second <math> element in another, but you can have an arbitrary number of other child elements in it.",
};

export const HTMLElements = Object.keys(HTMLElementDescriptions);

export function isValidHTMLelement(el) {
  return HTMLElements.includes(el);
}

export function getHTMLElementDescription(elementName) {
  return HTMLElementDescriptions[elementName];
}

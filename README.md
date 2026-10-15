# Studio Pixel

Buildless, multipage HTML/CSS/vanilla JavaScript portfolio. Start with `npm start` and open `http://localhost:8080`. All HTML pages and the assets folder are directly in the project root. No framework, backend or runtime dependency is required.

The written brief was provided without its reference screenshot. This implementation follows the specified palette, typography, content and section sequence; an exact screenshot match has not been verified. All six branding compositions are original, locally bundled SVG artwork. Brands, sample experience and testimonials are fictional and identified in the interface.

## Demo behavior

- Portfolio: combined search/category/year filters, sort, pagination and favorites.
- Projects: image lightbox, keyboard navigation, related projects and previous/next links.
- Journal: search, category filtering, pagination and individual articles.
- Contact: native validation and local inquiry persistence; no email is sent.
- Admin: use any email and a made-up password of at least six characters at `login.html`. This only opens a local demonstration session. It is not secure authentication. Passwords are not persisted.
- Management: project CRUD, draft/publication status, category CRUD, inquiry review/deletion, testimonial/article CRUD, contact profile and contrast preferences.
- Resume: Print / Save as PDF opens the browser print dialog.
- Newsletter: local subscription storage only.

Local storage is isolated to each browser and origin. Clearing site data resets the demo. Do not enter sensitive information. Configure actual contact information in Profile and social handles in Settings. Google Fonts is the only remote design dependency; system fallbacks are provided.

`generate.py` regenerates HTML, CSS, artwork and seed data. JavaScript application files are maintained separately. Run `npm run check` for JavaScript syntax validation.

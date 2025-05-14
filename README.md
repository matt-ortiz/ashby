# 7512 Ashby Ln Unit E - Property Landing Page

This repository contains a static website for the property listing at 7512 Ashby Ln Unit E, Alexandria, VA 22315. The site is designed for lead generation and scheduling tours.

## Features

- Responsive design that works on mobile, tablet, and desktop devices
- Property details and photo gallery
- Lead capture form for requesting information
- Tour scheduling form
- Interactive photo gallery
- Google Maps integration
- Agent information section

## Hosting on GitHub Pages

To host this site using GitHub Pages, follow these steps:

1. Create a new repository on GitHub
2. Upload all the files from this directory to your repository
3. Go to the repository settings
4. Scroll down to the "GitHub Pages" section
5. Select the branch you want to deploy (usually `main` or `master`)
6. Click "Save"
7. Your site will be published at `https://[your-username].github.io/[repository-name]/`

## Form Submission Setup

The contact forms are set up to use Formspree, a free service that allows you to collect form submissions via email without any server-side code. To set up the forms:

1. Go to [Formspree.io](https://formspree.io) and create an account
2. Create two forms (one for lead capture, one for tour scheduling)
3. Copy the form IDs from Formspree
4. Replace "your-formspree-id" in both forms in the index.html file with your actual Formspree form IDs

Example:
```html
<form id="lead-form" action="https://formspree.io/f/abc123xyz" method="POST">
```

## File Structure

- `index.html` - Main HTML file
- `styles.css` - CSS styling
- `script.js` - JavaScript functionality
- `images/` - Directory for property photos and agent image
  - `main-photo.jpg` - Main property photo
  - `photo1.jpg`, `photo2.jpg`, etc. - Property thumbnails
  - `agent-photo.jpg` - Agent photo
  - `header-bg.jpg` - Hero section background image

## Customizing Images

1. Add your property photos to the `images/` directory
2. Update the image references in the HTML file to match your photo filenames

## Customizing Content

1. Update the property details in the HTML file
2. Replace the Google Maps iframe with the correct location
3. Update agent information
4. Adjust contact form fields if needed

## Browser Support

This website is designed to work on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Credits

- Font Awesome for icons
- Google Fonts for the Poppins font
- Google Maps for the map embed

## License

This project is licensed under the MIT License.

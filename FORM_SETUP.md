# Setting Up Form Submission with Formspree

This document provides step-by-step instructions for setting up form submission using Formspree for your property website.

## What is Formspree?

[Formspree](https://formspree.io) is a form backend, API, and email service for HTML forms. It allows you to set up form submissions without any server-side code or database. When someone submits a form on your website, Formspree will forward the submission to your email address.

## Setting Up Formspree

### Step 1: Create a Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up for a free account (you can also use GitHub or Google to sign up)

### Step 2: Create Forms

You'll need to create two forms:

#### Lead Capture Form

1. Log in to your Formspree account
2. Click "New Form"
3. Name your form (e.g., "7512 Ashby - Lead Form")
4. Select your preferred plan (the free plan allows up to 50 submissions per month)
5. Click "Create Form"
6. On the next page, you'll see your form's endpoint URL, which looks like `https://formspree.io/f/xrgdopqa`

#### Tour Scheduling Form

1. Repeat the steps above
2. Name this form (e.g., "7512 Ashby - Tour Form")
3. Note the second form's endpoint URL

### Step 3: Update HTML Forms

Now that you have your form endpoints, you need to update the forms in your HTML:

1. Open `index.html` in a text editor
2. Find the lead capture form (search for `id="lead-form"`)
3. Replace the `action` attribute with your lead form endpoint:

```html
<form id="lead-form" action="https://formspree.io/f/YOUR_LEAD_FORM_ID" method="POST">
```

4. Find the tour scheduling form (search for `id="tour-form"`)
5. Replace the `action` attribute with your tour form endpoint:

```html
<form id="tour-form" action="https://formspree.io/f/YOUR_TOUR_FORM_ID" method="POST">
```

### Step 4: Test Your Forms

1. Deploy your website (either locally or to GitHub Pages)
2. Submit test entries through both forms
3. Check that you receive the submissions in your email
4. Verify that the success modal appears after submission

## Customizing Form Behavior

### Email Notifications

By default, form submissions are sent to the email you registered with Formspree. You can customize this:

1. Go to your form settings in Formspree
2. Under "Email Notifications," you can add additional recipients

### Spam Filtering

Formspree includes spam filtering by default, but you can adjust the settings:

1. Go to your form settings
2. Under "Spam Protection," you can enable reCAPTCHA or adjust spam thresholds

### Form Success/Error Pages

Instead of using our JavaScript modal, you can configure Formspree to redirect to a custom page:

1. Go to your form settings
2. Under "Success/Error Pages," enter the URLs for your custom pages

## Upgrading to Paid Plans

If you need more submissions or additional features, Formspree offers paid plans that include:

- More monthly submissions
- File uploads
- Webhooks for integrating with other services
- Custom SMTP for sending from your domain

Visit [Formspree Pricing](https://formspree.io/plans) for more details.

## Troubleshooting

### Form Submissions Not Working

1. Check if your form endpoint is correct
2. Make sure all required fields have the `required` attribute
3. Check the browser console for any JavaScript errors
4. Verify your Formspree account is active

### Not Receiving Emails

1. Check your spam folder
2. Verify the email address in your Formspree account
3. Add your domain to your email provider's allowlist

For more help, visit [Formspree's Documentation](https://help.formspree.io/).

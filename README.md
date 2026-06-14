# Pavishya Janakiraman — Portfolio Website

**Live URL:** https://pavishya.netlify.app ← update after Netlify deploy

Single-page portfolio site built with plain HTML/CSS/JS. No frameworks, no build step.  
Deployed via Netlify (auto-deploys on git push to main).

## Deploy to Netlify

1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Select this repo → deploy settings are auto-detected (no build command needed)
4. Set custom domain (optional): `pavishya.netlify.app` is assigned automatically

## After Publishing Tableau Dashboard

Update the "Live Dashboard" link in `index.html`:

```html
<!-- Find this line in the Project 2 card footer -->
<a href="#" ... id="tableauLink">Live Dashboard ↗</a>

<!-- Replace # with your Tableau Public URL, e.g.: -->
<a href="https://public.tableau.com/views/PersonalFinanceDashboard-PavishyaJanakiraman/..." ...>
```

## After Creating GitHub Repo

Update all GitHub links in `index.html` from `https://github.com/pavishya/...`
to your actual GitHub username.

## Customise

- `assets/images/` — add headshot (optional), project screenshots
- `css/style.css` — colour variables at `:root` are easy to adjust
- Add Google Analytics or Hotjar script tag before `</body>` if desired

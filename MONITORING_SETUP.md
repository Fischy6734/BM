# Visitor Tracking Setup

This monitoring system uses GitHub Actions and your repository to track website visitors in real-time.

## What's included:

1. **visitor-data.json** - Stores current visitor count and historical data
2. **.github/workflows/track-visitors.yml** - GitHub Actions workflow that updates visitor count
3. **.github/scripts/update-visitors.js** - Script to process visitor data
4. **monitor.html** - Real-time dashboard showing live visitor numbers
5. **tracking-snippet.html** - Snippet to add to your website

## How to use:

### Step 1: Add to your website
Include the tracking code in your HTML files:
```html
<script src="https://raw.githubusercontent.com/Fischy6734/BM/main/tracking-snippet.html"></script>
```

Or copy the script directly into your pages.

### Step 2: View the dashboard
Open `monitor.html` on any device to see real-time visitor counts:
```
https://Fischy6734.github.io/BM/monitor.html
```

### Step 3: How it works
- When someone visits your site, the tracking script logs a session
- GitHub Actions processes the data every hour
- The dashboard fetches live data from `visitor-data.json`
- Visitor counts are updated in real-time

## Real-time Features:
- ✅ Current active visitors
- ✅ Total visit count
- ✅ Peak visitors today
- ✅ Hourly activity chart
- ✅ 30-day history
- ✅ Auto-refresh dashboard
- ✅ No external services needed

All data stays on GitHub!

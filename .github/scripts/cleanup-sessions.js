const fs = require('fs');
const path = require('path');

const dataFile = path.join(process.cwd(), 'visitor-data.json');

function cleanupSessions() {
  if (!fs.existsSync(dataFile)) return;

  let data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
  
  // Keep only last 30 days of history
  if (Array.isArray(data.hourly_data)) {
    data.hourly_data = data.hourly_data.slice(-30);
  }

  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
  console.log('Cleanup complete');
}

cleanupSessions();

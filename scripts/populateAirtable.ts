import { ecosystemDetails } from '../src/data/ecosystemDetails.js';

// --- CONFIGURATION ---
// Replace these with your actual Airtable details or set them as environment variables
const AIRTABLE_PAT = process.env.AIRTABLE_PAT;
const BASE_ID = process.env.BASE_ID || 'applFy7vhFdQjaaxa';
const TABLE_NAME = process.env.TABLE_NAME || 'Ecosystem';

async function populateAirtable() {

  const endpoint = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;

  // Convert our object to an array of records expected by Airtable
  const records = Object.values(ecosystemDetails).map(entity => {
    // We remove undefined values (like logo if it doesn't exist)
    const fields: Record<string, string> = {};
    for (const [key, value] of Object.entries(entity)) {
      if (value) {
        fields[key] = value;
      }
    }
    return { fields };
  });

  // Airtable allows a max of 10 records per POST request
  const CHUNK_SIZE = 10;
  for (let i = 0; i < records.length; i += CHUNK_SIZE) {
    const chunk = records.slice(i, i + CHUNK_SIZE);

    console.log(`Sending records ${i + 1} to ${i + chunk.length}...`);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_PAT}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ records: chunk, typecast: true })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Airtable API Error (${response.status}): ${errorText}`);
      }

      const data = await response.json();
      console.log(`Successfully inserted ${data.records.length} records.`);
    } catch (error) {
      console.error('Failed to insert records:', error);
      break;
    }
  }

  console.log('Finished uploading data!');
}

populateAirtable();

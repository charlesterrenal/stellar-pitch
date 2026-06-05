

// The hardcoded milestones from Timeline.tsx
const milestones = [
  { date: 'Early 2020s', event: 'StellarPH founded in Cebu',            desc: 'Workshops and community events for Filipino entrepreneurs.' },
  { date: 'Jun 2024',    event: 'Academy & BMC series launches',        desc: 'Free educational content for founders goes live.' },
  { date: 'Aug 2024',    event: 'Xavier Marzan joins as co-founder',    desc: 'Former CEO of GCash strengthens the leadership bench.' },
  { date: 'Oct 2024',    event: 'PH100 announced for the first time',   desc: '100 brightest Filipino minds under 30, recognized.' },
  { date: 'Apr 2025',    event: 'Partnership with Foxmont Capital',     desc: 'Co-authored view of the PH startup scene.' },
  { date: 'May 2025',    event: 'PH100 2025 applications open',        desc: 'Expanding nationwide beyond Cebu.' },
  { date: 'Aug 2025',    event: 'MOA signed with DOST Region VII',     desc: 'Government partnership formalized.' },
  { date: 'Sep 2025',    event: 'PH100 2025 class announced',          desc: 'Second cohort officially recognized.' },
  { date: 'Oct 2025',    event: 'Island Retreat & Stellar Spark Radio', desc: 'Flagship retreat + weekly podcast launch.' },
  { date: 'Nov 2025',    event: 'GOAB & Soft Landing Bootcamp',        desc: 'Regional acceleration across Filipino cities.' },
  { date: 'Feb 2026',    event: 'Fundraising content series',           desc: 'Academy becomes a top PH founder resource.' },
  { date: 'May 2026',    event: 'Safe Space Pitch Event',              desc: 'Ecosystem spotlights with KMC & 917Ventures.' },
  { date: 'Jun 2026',    event: 'PH100 2026 applications open',        desc: 'Third edition with strongest backing yet.', isNow: true },
]

// --- CONFIGURATION ---
// I am using the write PAT provided previously. If using env vars, we read from process.env
const AIRTABLE_PAT = process.env.AIRTABLE_PAT;
const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID || 'applFy7vhFdQjaaxa';
const TABLE_NAME = 'Timeline';

async function populateTimeline() {
  const endpoint = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
  
  const records = milestones.map((m, index) => {
    return {
      fields: {
        date: m.date,
        event: m.event,
        desc: m.desc,
        isNow: m.isNow || false
      }
    };
  });

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
        body: JSON.stringify({ records: chunk, typecast: true }) // Using typecast just in case
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

  console.log('Finished uploading Timeline data!');
}

populateTimeline();

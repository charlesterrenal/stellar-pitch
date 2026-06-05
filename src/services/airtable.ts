import type { EcosystemEntity } from '../data/ecosystemDetails'

// Ensure we have access to the timeline milestone interface
export interface TimelineMilestone {
  date: string
  event: string
  desc: string
  isNow?: boolean
}

const PAT = import.meta.env.VITE_AIRTABLE_PAT;
const BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = import.meta.env.VITE_AIRTABLE_TABLE_NAME;

export async function fetchEcosystemData(): Promise<Record<string, EcosystemEntity>> {
  if (!PAT || !BASE_ID || !TABLE_NAME) {
    console.warn('Airtable credentials not found in environment variables. Falling back to static data.');
    return {};
  }

  const endpoint = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`;
  let allRecords: any[] = [];
  let offset: string | undefined = undefined;

  try {
    do {
      const url = new URL(endpoint);
      if (offset) {
        url.searchParams.append('offset', offset);
      }

      const response = await fetch(url.toString(), {
        headers: {
          'Authorization': `Bearer ${PAT}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Airtable API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      allRecords = allRecords.concat(data.records);
      offset = data.offset;
    } while (offset);

    const ecosystemMap: Record<string, EcosystemEntity> = {};

    // MOCK DATA GENERATOR: Remove this once Airtable is populated!
    // If a company has no MilestoneDate, we assign it one randomly just to show off the animation.
    const tempTimelineDates = [
      'Early 2020s', 'Jun 2024', 'Aug 2024', 'Oct 2024', 
      'Apr 2025', 'May 2025', 'Aug 2025', 'Sep 2025', 
      'Oct 2025', 'Nov 2025', 'Feb 2026', 'May 2026', 'Jun 2026'
    ];

    allRecords.forEach((record: any) => {
      const fields = record.fields;
      if (fields.name) {
        
        let assignedDate = fields.MilestoneDate;
        if (!assignedDate) {
          // Temporarily assign a random date if empty
          const randomIdx = Math.floor(Math.random() * tempTimelineDates.length);
          assignedDate = tempTimelineDates[randomIdx];
        }

        ecosystemMap[fields.name] = {
          name: fields.name || '',
          location: fields.location || '',
          category: fields.category || 'Other',
          role: fields.role || '',
          whatTheyDo: fields.whatTheyDo || '',
          focusArea: fields.focusArea || '',
          programs: fields.programs || '',
          lifecycleStage: fields.lifecycleStage || '',
          logo: fields.logo || undefined,
          milestoneDate: assignedDate,
        };
      }
    });

    return ecosystemMap;
  } catch (error) {
    console.error('Failed to fetch data from Airtable:', error);
    return {};
  }
}

export async function fetchTimelineData(): Promise<TimelineMilestone[]> {
  if (!PAT || !BASE_ID) {
    console.warn('Airtable credentials not found in environment variables. Falling back to static timeline data.');
    return [];
  }

  const endpoint = `https://api.airtable.com/v0/${BASE_ID}/Timeline`;
  let allRecords: any[] = [];
  let offset: string | undefined = undefined;

  try {
    do {
      const url = new URL(endpoint);
      if (offset) {
        url.searchParams.append('offset', offset);
      }
      
      // We could add a sort parameter here if needed, but for now we'll just fetch all

      const response = await fetch(url.toString(), {
        headers: {
          'Authorization': `Bearer ${PAT}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Airtable API Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      allRecords = allRecords.concat(data.records);
      offset = data.offset;
    } while (offset);

    const milestones: TimelineMilestone[] = allRecords.map((record: any) => ({
      date: record.fields.date || '',
      event: record.fields.event || '',
      desc: record.fields.desc || '',
      isNow: record.fields.isNow || false,
    }));

    return milestones;
  } catch (error) {
    console.error('Failed to fetch timeline data from Airtable:', error);
    return [];
  }
}

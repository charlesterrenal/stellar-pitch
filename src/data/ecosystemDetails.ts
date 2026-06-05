export interface EcosystemEntity {
  name: string
  location: string
  category: string
  role: string
  whatTheyDo: string
  focusArea: string
  programs: string
  lifecycleStage: string
  logo?: string
  milestoneDate?: string
}

export const ecosystemDetails: Record<string, EcosystemEntity> = {
  'Filipinnovation': {
    name: 'Filipinnovation',
    location: 'Metro Manila',
    category: 'Events, Awards & Competitions',
    logo: '/Filipinovation.jpg',
    role: 'Recognizes outstanding startups, innovators, and ecosystem contributors.',
    whatTheyDo: 'Organizes annual awards to spotlight Filipino creativity and support early-stage commercialization.',
    focusArea: 'Startup excellence, recognition, community building',
    programs: 'Awards Night, Networking Events',
    lifecycleStage: 'All stages'
  },
  'PH Startup Week': {
    name: 'PH Startup Week',
    location: 'Metro Manila',
    category: 'Events, Awards & Competitions',
    role: 'The largest annual gathering for the Philippine startup community.',
    whatTheyDo: 'Hosts a week-long conference with tracks to foster networking, learning, and pitching.',
    focusArea: 'Collaboration, investment, innovation',
    programs: 'Conference, Pitching, Showcases',
    lifecycleStage: 'Early to growth-stage'
  },
  'Slingshot': {
    name: 'Slingshot',
    location: 'Metro Manila',
    category: 'Events, Awards & Competitions',
    role: 'Government-led summit connecting startups with investors and global ecosystems.',
    whatTheyDo: 'Organizes summits and pitch competitions for scaling opportunities.',
    focusArea: 'Scaling, innovation, global market access',
    programs: 'Annual summit, pitch competitions',
    lifecycleStage: 'Early and growth-stage'
  },
  'Geeks on a Beach': {
    name: 'Geeks on a Beach',
    location: 'Cebu',
    category: 'Events, Awards & Competitions',
    role: 'International tech and startup conference in a relaxed, beachside setting.',
    whatTheyDo: 'Brings together tech leaders and founders for masterclasses and panel sessions.',
    focusArea: 'Tech startups, investment, design',
    programs: 'Conference, networking, masterclasses',
    lifecycleStage: 'Early to growth-stage'
  },
  'IGNITE': {
    name: 'IGNITE',
    location: 'Metro Manila',
    category: 'Events, Awards & Competitions',
    role: 'Flagship innovation conference connecting startups, corporates, and government.',
    whatTheyDo: 'Hosts massive speaker sessions, startup pitches, and targeted business matching.',
    focusArea: 'AI, tech trends, regional expansion',
    programs: 'Conference, Wildfire Pitch (Startup World Cup PH), business matching',
    lifecycleStage: 'Early to mature stages'
  },
  'Techstars Startup Weekend': {
    name: 'Techstars Startup Weekend',
    location: 'Bohol (2025)',
    category: 'Events, Awards & Competitions',
    role: 'Grassroots event guiding participants from idea to prototype in 54 hours.',
    whatTheyDo: 'Intensive weekend of pitching ideas, forming teams, and building prototypes.',
    focusArea: 'Ideation, prototyping, team-building',
    programs: 'Workshops, mentoring, pitching',
    lifecycleStage: 'Idea-stage and pre-seed'
  },
  'She Loves Tech': {
    name: 'She Loves Tech',
    location: 'Philippines',
    category: 'Events, Awards & Competitions',
    role: 'Empowers women entrepreneurs and promotes gender diversity in tech.',
    whatTheyDo: 'Connects women-led or women-impact startups to investors and global opportunities.',
    focusArea: 'Women in tech, gender diversity',
    programs: 'Startup competition, mentorship',
    lifecycleStage: 'Early-stage (women founders)'
  },
  'KMC Startup Awards': {
    name: 'KMC Startup Awards',
    location: 'Metro Manila',
    category: 'Events, Awards & Competitions',
    role: 'Celebrates high-potential startups and enablers in the Philippines.',
    whatTheyDo: 'Fosters visibility and community engagement through recognition.',
    focusArea: 'Startup excellence, community building',
    programs: 'Awards night, networking',
    lifecycleStage: 'All stages'
  },
  'e27': {
    name: 'e27',
    location: 'Philippines',
    category: 'Events, Awards & Competitions',
    role: 'Regional platform connecting ecosystem builders across Southeast Asia.',
    whatTheyDo: 'Hosts exhibitions, startup showcases, and investor meetings.',
    focusArea: 'Investment, regional expansion',
    programs: 'Conference, pitching, expo',
    lifecycleStage: 'Early to growth-stage'
  },
  'StellarPH Community': {
    name: 'StellarPH Community',
    location: 'Cebu City (National Reach)',
    category: 'Startup Communities, Media & Resources',
    logo: '/StellarPH-ColoredLogo.svg',
    role: 'Startup enabler inspiring and educating the Filipino ecosystem.',
    whatTheyDo: 'Provides mentorship, practical resources, and collaborates with universities.',
    focusArea: 'Talent development, startup growth, education',
    programs: 'PH100, hackathons, Safe Space Pitch, university programs',
    lifecycleStage: 'All stages (students to experienced founders)'
  },
  'StartupnewsPH': {
    name: 'StartupnewsPH',
    location: 'Cebu City (National Reach)',
    category: 'Startup Communities, Media & Resources',
    role: 'Media platform amplifying founder stories and tracking ecosystem trends.',
    whatTheyDo: 'Publishes news and interviews highlighting funding rounds and innovations.',
    focusArea: 'Tech, fintech, impact, policy',
    programs: 'Content partnerships, event sponsorships',
    lifecycleStage: 'Pre-seed to Series B'
  },
  'Sinigang Valley': {
    name: 'Sinigang Valley',
    location: 'Makati',
    category: 'Startup Communities, Media & Resources',
    role: 'Digital community for startup memes, commentary, and culture.',
    whatTheyDo: 'Acts as a watchdog and hype space for Filipino tech culture.',
    focusArea: 'Transparency, community building, commentary',
    programs: 'Twitter Spaces, memes, meetups',
    lifecycleStage: 'Ideation / Ecosystem-wide'
  },
  'Rappler': {
    name: 'Rappler',
    location: 'Metro Manila',
    category: 'Startup Communities, Media & Resources',
    role: 'Major digital news outlet with a dedicated business/startup section.',
    whatTheyDo: 'Publishes investigative features and analysis on tech and economic trends.',
    focusArea: 'Business news, policy, tech',
    programs: 'News, investigative reports',
    lifecycleStage: 'All stages'
  },
  'Philippine Daily Inquirer': {
    name: 'Philippine Daily Inquirer',
    location: 'Metro Manila',
    category: 'Startup Communities, Media & Resources',
    role: 'Leading broadsheet covering the Philippine startup landscape.',
    whatTheyDo: 'Print and digital publication featuring innovation and entrepreneurship.',
    focusArea: 'Business, tech, innovation',
    programs: 'Daily news, deep dive reports',
    lifecycleStage: 'All stages'
  },
  'Esquire Philippines': {
    name: 'Esquire Philippines',
    location: 'Metro Manila',
    category: 'Startup Communities, Media & Resources',
    role: 'Lifestyle and culture magazine focusing on tech culture.',
    whatTheyDo: 'Features startup founders, new ventures, and the business of innovation.',
    focusArea: 'Entrepreneurship, lifestyle, culture',
    programs: 'Stories, founder interviews',
    lifecycleStage: 'All stages'
  },
  'GMA News': {
    name: 'GMA News',
    location: 'Metro Manila',
    category: 'Startup Communities, Media & Resources',
    role: 'Broadcast and digital news outlet covering economic developments.',
    whatTheyDo: 'Provides comprehensive mainstream coverage on tech innovations.',
    focusArea: 'News, digital trends',
    programs: 'BizTalk, digital reports',
    lifecycleStage: 'All stages'
  }
}

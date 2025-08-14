export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github: string | null;
  live: string | null;
  featured: boolean;
  icon: string;
  primaryCategory: 'web' | 'mobile' | 'api' | 'cli' | 'lib' | 'bot';
};

export const projects: Project[] = [
  {
    title: 'Remote File Manager',
    description:
      'Secure SSH file operations with 30+ API endpoints, real-time monitoring using WebSockets and TanStack Query, glassmorphism UI with dark/light themes. Reduced server management time by 60%.',
    technologies: [
      'JavaScript',
      'TypeScript',
      'Next.js',
      'React',
      'Tailwind CSS',
      'TanStack Query',
      'Node.js',
      'Express.js',
      'REST',
      'WebSockets',
      'JWT',
      'SSH2',
      'Docker',
      'Git',
      'Linux OS',
    ],
    github: 'https://github.com/4bd4ll4h/remote-file-manager',
    live: null,
    featured: true,
    icon: '🔗',
    primaryCategory: 'web',
  },
  {
    title: 'NavTube Android App (Beta)',
    description:
      'Content discovery app helping users explore beyond their usual circle. Modern Google Material guidelines implementation with coroutines and MVVM architecture.',
    technologies: ['Kotlin', 'Android Jetpack', 'MVVM', 'Material Design', 'Coroutines', 'SQLite'],
    github: 'https://github.com/4bd4ll4h/navTube',
    live: null,
    featured: true,
    icon: '📱',
    primaryCategory: 'mobile',
  },
  {
    title: 'API Based Telegram Message Sender',
    description:
      'Self-hosted Telegram API solution for phone-based messaging. PBKDF2-HMAC encrypted session storage with Docker deployment reducing setup time by 80%.',
    technologies: ['Python', 'JavaScript', 'Flask', 'React', 'REST', 'Telethon', 'PostgreSQL', 'PBKDF2-HMAC', 'JWT', 'Docker', 'Git'],
    github: 'https://github.com/4bd4ll4h/telesender',
    live: null,
    featured: true,
    icon: '📨',
    primaryCategory: 'api',
  },
  {
    title: 'AI Powered Educational Telegram Bot',
    description:
      'Natural language course material access with custom Moodle API synchronization. Achieved 87.5% user satisfaction and 94% adoption rate.',
    technologies: ['Python', 'Custom NLP', 'Google GenAI', 'OpenAI', 'REST'],
    github: 'https://github.com/skulebot/',
    live: null,
    featured: true,
    icon: '🤖',
    primaryCategory: 'bot',
  },
  {
    title: 'Disciplined Android App',
    description:
      'Productivity app with task organization, multiple notification and alarm features. Achieved 100+ downloads in 3 days with 4-5 star rating.',
    technologies: ['Java', 'Android SDK', 'MVC'],
    github: null,
    live: 'https://play.google.com/store/apps/details?id=com.abd4ll4h.disciplined',
    featured: false,
    icon: '✅',
    primaryCategory: 'mobile',
  },
  {
    title: 'Poetry Library - Java Web API',
    description:
      'Access to 1.6M+ Arabic poetry bars with team leadership and database design. Advanced filtering capabilities for comprehensive poetry search.',
    technologies: ['Java', 'Spring', 'Hibernate', 'GraphQL', 'MySQL', 'REST'],
    github: 'https://github.com/4bd4ll4h/poetryLibrary',
    live: null,
    featured: false,
    icon: '📚',
    primaryCategory: 'api',
  },
  {
    title: 'TDES Python Package',
    description: 'Triple DES encryption/decryption tool with bulk directory processing capabilities. Achieved 1K+ downloads on PyPI.',
    technologies: ['Python', 'CLI', 'Cryptography', 'Agile'],
    github: null,
    live: 'https://pypi.org/project/tdes/',
    featured: false,
    icon: '🔐',
    primaryCategory: 'cli',
  },
  {
    title: 'Android COVID-19 Tracker',
    description:
      'Real-time global statistics with home screen widget integration and Jetpack components implementation.',
    technologies: ['Java', 'Android SDK', 'Retrofit', 'Material Design', 'MVVM'],
    github: 'https://github.com/4bd4ll4h/covid19-statistics-android-app',
    live: null,
    featured: false,
    icon: '🦠',
    primaryCategory: 'mobile',
  },
  {
    title: 'EEESE HACKATHON 2022 - Classroom Scheduling',
    description:
      'Led Team "Se7en" to develop an AI-powered web application using evolutionary algorithms and genetic optimization for university timetable management.',
    technologies: ['Python', 'JavaScript', 'React', 'Genetic Algorithms', 'Evolutionary Algorithms', 'AI', 'Web Development'],
    github: null,
    live: null,
    featured: true,
    icon: '🏆',
    primaryCategory: 'web',
  },
];

export const primaryCategories: Array<Project['primaryCategory']> = ['web', 'mobile', 'api', 'cli', 'lib', 'bot'];



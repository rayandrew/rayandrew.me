import type { Experiences } from '@definitions/experience'

const experiences: Experiences = [
  {
    institution: 'University of Chicago - GIK Lab',
    title: 'Remote Research Assistant',
    link: 'https://sites.google.com/site/garudailmukomputer/people',
    projects: [
      {
        title: 'LIBROS',
        description:
          'Implementing part of cancellation mechanism using ML approach to mitigate tail latency in distributed systems',
      },
      {
        title: 'Bug Study',
        description:
          'Collecting, categorizing, and analyzing bugs in well-known distributed systems (e.g. Hadoop, Kafka, etc.)',
      },
      {
        title: 'Performance Engineering',
        description:
          'Researching about ML approaches to enhance performance of distributed (cloud) systems (e.g. predictive autoscaling)',
      },
    ],
    from: 'jan 2019',
    to: 'present',
  },
  {
    institution: 'Emmerich Research Center (EMRC)',
    title: 'Researcher',
    link: 'https://research.emmerich.co.id/',
    projects: [
      {
        title: 'Automated Tending Machine + Contamination Detection (ATM-CD)',
        description:
          'Creating IoT-systems to automatically tend to fungi and detect contaminants',
      },
      {
        title: 'Larvae Behavior Tracker',
        description:
          'Developing larvae behavior tracker using ML approaches to enhance larvae biomass production',
      },
      {
        title: 'Accounting (Journaling) Dashboard',
        description:
          'Implementing web-based system to keep track of accounting journal and to ensure the financial transparency',
      },
    ],
    from: 'aug 2019',
    to: 'present',
  },
]

export default experiences

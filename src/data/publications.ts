/* eslint-disable quotes */
import type { Publications } from '@definitions/publication'

const publications: Publications = [
  {
    title:
      "Let's Cut the Tail Together with LIBROS: \n Library, Runtime and OS Supports for Multi-Resource Storage",
    year: 2020,
    authors: [
      'Meng Wang',
      'Cesar Stuardo',
      'Daniar H. Kurniawan',
      'me',
      'Haryadi S. Gunawi',
    ],
    status: 'ready',
  },
  {
    title:
      'Notification and Prediction of Heap Management Pauses in Managed Languages for Latency Stable Systems',
    year: 2020,
    authors: [
      'Daniar H. Kurniawan',
      'Cesar Stuardo',
      'me',
      'Haryadi S. Gunawi',
    ],
    status: 'ready',
    link:
      'https://newtraell.cs.uchicago.edu/research/publications/techreports/TR-2020-11',
  },
  {
    title: 'Computer Vision-Based Palm Full Fruit Bunch Automated Grader',
    // year: 2021,
    authors: ['me', 'Jason K. Adhinarta', 'Edmund Anderson', 'Eden Steven'],
    status: 'in preparation',
  },
  {
    title: 'Indonesian Image Captioning using Semantic Compositional Networks',
    link: 'https://slide-indonesian-image-captioning.rayandrew.now.sh/',
    authors: ['me', 'Achmad Imam Kistijantoro', 'Ayu Purwarianti'],
    status: 'ready',
  },
]

export default publications

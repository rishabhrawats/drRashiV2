// Comprehensive mock data for Dr. Rashi Agrawal's medical website

export const doctorInfo = {
  name: "Dr. Rashi Agrawal",
  title: "Senior Director – Clinical Administrator & Program Coordinator",
  department: "Radiation Oncology",
  experience: "22+ Years",
  phone: "+91 926 888 0303",
  email: "digitalquery@maxhealthcare.com",
  profileImage: "https://customer-assets.emergentagent.com/job_6fa1bc13-2ded-4091-8436-9d3e22eac5d8/artifacts/vnl434rb_medium_dr_rashi_agrawal_3ddd0e8452.jpg",
  instagram: "https://www.instagram.com/drrashibestoncologistindelhi/",
  youtube: "https://www.youtube.com/@DrRashiAgrawalCancerSpecialist"
};

export const specialties = [
  "Radiation Oncology",
  "Cancer Care/Oncology",
  "Breast Cancer",
  "Thoracic Oncology",
  "Gynecologic Oncology",
  "Gastrointestinal & Hepatobiliary Oncology"
];

export const quotes = [
  "Radiotherapy experience from cobalt to proton — with special focus on brachytherapy.",
  "Advanced training across external beam radiotherapy and brachytherapy.",
  "Precision techniques used routinely: stereotactic, image-guided, and intensity-modulated approaches.",
  "Committed to cancer awareness, especially among females, through talks and camps.",
  "Actively involved in DNB teaching and oncology learning environments.",
  "Clinical practice supported by national awards and conference recognition."
];

export const hospitals = [
  {
    id: "vaishali",
    name: "Max Super Speciality Hospital",
    location: "Vaishali, Ghaziabad",
    address: "W-3, Sector 1, Vaishali, Ghaziabad, Uttar Pradesh 201012",
    type: "Primary Practice",
    hasTimings: true,
    opdTimings: [
      { day: "Monday", time: "9:00am – 5:00pm" },
      { day: "Tuesday", time: "10:00am–1:00pm / 3:00pm–4:00pm" },
      { day: "Wednesday", time: "10:00am–4:00pm" },
      { day: "Thursday", time: "10:00am–1:00pm / 3:00pm–4:00pm" },
      { day: "Saturday", time: "10:00am–1:00pm" }
    ]
  },
  {
    id: "meerut",
    name: "Max Medcentre",
    location: "Meerut",
    address: "Delhi Road, Meerut, Uttar Pradesh",
    type: "Visiting Consultant",
    hasTimings: false,
    opdTimings: []
  }
];

export const expertiseAreas = [
  {
    id: "breast",
    title: "Breast Cancer",
    description: "Comprehensive radiation therapy for all stages of breast cancer. Routinely treats using precision techniques including IMRT and brachytherapy for optimal tumor control while preserving healthy tissue.",
    icon: "Heart"
  },
  {
    id: "thoracic",
    title: "Thoracic Oncology",
    description: "Advanced treatment for lung cancer and thoracic malignancies using SBRT, IGRT, and other precision approaches for maximum effectiveness with minimal impact on surrounding structures.",
    icon: "Wind"
  },
  {
    id: "gynecologic",
    title: "Gynecologic Oncology",
    description: "Specialized care for cervical, uterine, ovarian, and other gynecological cancers with expertise in image-guided brachytherapy. Special focus on female cancer awareness and early detection.",
    icon: "Flower2"
  },
  {
    id: "gi-hepatobiliary",
    title: "Gastrointestinal & Hepatobiliary Oncology",
    description: "Expert management of cancers affecting the digestive system including esophageal, gastric, pancreatic, rectal, and liver cancers using advanced radiation techniques.",
    icon: "Activity"
  },
  {
    id: "radiation",
    title: "Radiation Oncology",
    description: "Over 22 years of experience across the full spectrum of radiotherapy — from cobalt to proton therapy. Expertise in both external beam radiotherapy and brachytherapy.",
    icon: "Zap"
  },
  {
    id: "cancer-care",
    title: "Cancer Care / Oncology",
    description: "Comprehensive oncology care combining advanced technology with compassionate patient-centered approach. Focus on precision, safety, and patient dignity.",
    icon: "Shield"
  }
];

export const techniques = [
  {
    id: "sbrt",
    name: "SBRT",
    fullName: "Stereotactic Body Radiation Therapy",
    what: "High-precision, high-dose radiation delivered in fewer sessions",
    why: "Ideal for small tumors in lung, liver, and spine with minimal damage to surrounding tissue",
    category: "External Beam"
  },
  {
    id: "igrt",
    name: "IGRT",
    fullName: "Image Guided Radiotherapy",
    what: "Real-time imaging during treatment for precise targeting",
    why: "Accounts for organ movement and positioning variations for accurate delivery",
    category: "External Beam"
  },
  {
    id: "imrt",
    name: "IMRT",
    fullName: "Intensity Modulated Radiotherapy",
    what: "Advanced beam shaping with varying radiation intensity",
    why: "Maximizes tumor dose while sparing healthy tissue and critical structures",
    category: "External Beam"
  },
  {
    id: "srt",
    name: "Stereotactic Radiotherapy",
    fullName: "Stereotactic Radiosurgery & Radiotherapy",
    what: "Ultra-precise treatment with sub-millimeter accuracy",
    why: "Used for brain and spine tumors requiring extreme precision",
    category: "External Beam"
  },
  {
    id: "conformal",
    name: "Conformal Radiotherapy",
    fullName: "3D Conformal Radiation Therapy",
    what: "Treatment beams shaped to match the tumor's 3D shape",
    why: "Reduces radiation exposure to surrounding healthy tissues",
    category: "External Beam"
  },
  {
    id: "electron",
    name: "Electron Therapy",
    fullName: "Electron Beam Therapy",
    what: "Specialized treatment with controlled depth penetration",
    why: "Ideal for superficial tumors and skin cancers",
    category: "External Beam"
  },
  {
    id: "brachytherapy",
    name: "Brachytherapy",
    fullName: "Internal Radiation Therapy",
    what: "Radiation source placed inside or next to the tumor",
    why: "Delivers high doses directly to tumor while minimizing exposure to healthy tissue",
    category: "Brachytherapy"
  },
  {
    id: "ig-brachytherapy",
    name: "Image-Guided Brachytherapy",
    fullName: "3D Image-Guided Brachytherapy",
    what: "Internal radiation with MRI or CT guidance",
    why: "Ensures optimal dose distribution for gynecological cancers",
    category: "Brachytherapy"
  }
];

export const trainingCredentials = [
  {
    id: 1,
    type: "fellowship",
    title: "International Fellowship – UICC",
    institution: "UICC (Union for International Cancer Control)",
    location: "Geneva, Switzerland",
    year: "2016–2017",
    description: "Advanced fellowship in global cancer control strategies and international oncology standards."
  },
  {
    id: 2,
    type: "training",
    title: "Tomotherapy / IGRT / IMRT / Image-Guided Brachytherapy",
    institution: "Long Beach Memorial Medical & Cancer Centre",
    location: "Los Angeles, USA",
    year: "",
    description: "Comprehensive training in advanced radiation therapy techniques."
  },
  {
    id: 3,
    type: "training",
    title: "Cyberknife Training",
    institution: "Orange Coast Medical Centre",
    location: "California, USA",
    year: "",
    description: "Specialized training in robotic radiosurgery system."
  },
  {
    id: 4,
    type: "training",
    title: "IMRT / IGRT Training",
    institution: "Saddleback Medical Centre",
    location: "Los Angeles, USA",
    year: "",
    description: "Advanced training in intensity-modulated and image-guided techniques."
  },
  {
    id: 5,
    type: "training",
    title: "Proton Therapy Training",
    institution: "Loma Linda Proton Therapy Centre",
    location: "California, USA",
    year: "",
    description: "Training in one of the most advanced forms of radiation treatment."
  },
  {
    id: 6,
    type: "training",
    title: "Contouring Training",
    institution: "ESTRO School",
    location: "Europe",
    year: "",
    description: "Advanced training in treatment planning and tumor delineation."
  },
  {
    id: 7,
    type: "fellowship",
    title: "Fellowship in Radiation Oncology",
    institution: "Tata Memorial Hospital",
    location: "Mumbai, India",
    year: "",
    description: "Foundational training at India's premier cancer center."
  },
  {
    id: 8,
    type: "education",
    title: "Post Graduation (Radiation Oncology)",
    institution: "GSVM College",
    location: "Kanpur, India",
    year: "",
    description: "MD in Radiation Oncology."
  },
  {
    id: 9,
    type: "education",
    title: "MBBS",
    institution: "SN Medical College",
    location: "Agra, India",
    year: "",
    description: "Bachelor of Medicine and Bachelor of Surgery."
  }
];

export const workExperience = [
  {
    id: 1,
    title: "Senior Director & Program Coordinator",
    institution: "Max Healthcare",
    location: "Delhi NCR",
    current: true,
    description: "Currently working as Senior Director – Clinical Administrator & Program Coordinator, Radiation Oncology"
  },
  {
    id: 2,
    title: "Consultant (Oncology Department)",
    institution: "Max Super Speciality Hospital",
    location: "Vaishali, Ghaziabad & Patparganj, Delhi",
    current: false,
    description: "Radiation oncology consultant providing comprehensive cancer care."
  },
  {
    id: 3,
    title: "Radiation Oncologist",
    institution: "Mahavir Cancer Sansthan",
    location: "Patna",
    current: false,
    description: "Cancer treatment and care services."
  },
  {
    id: 4,
    title: "Radiation Oncologist",
    institution: "Galaxy Cancer Institute, Pushpanjali Crosslay Hospital",
    location: "Delhi NCR",
    current: false,
    description: "Comprehensive radiation oncology services."
  },
  {
    id: 5,
    title: "DNB Teaching Faculty",
    institution: "Various Institutions",
    location: "India",
    current: true,
    description: "Actively involved in DNB teaching and mentoring the next generation of oncologists."
  },
  {
    id: 6,
    title: "Clinical Observer/Training",
    institution: "Long Beach Memorial Medical Centre",
    location: "California, USA",
    current: false,
    description: "Advanced clinical training in radiation oncology."
  },
  {
    id: 7,
    title: "Clinical Observer/Training",
    institution: "Saddleback Memorial Medical Centre",
    location: "California, USA",
    current: false,
    description: "IMRT/IGRT training and clinical observation."
  },
  {
    id: 8,
    title: "Clinical Observer/Training",
    institution: "Orange Coast Medical Centre",
    location: "California, USA",
    current: false,
    description: "Cyberknife training and clinical observation."
  }
];

export const memberships = [
  { id: 1, name: "ESTRO", fullName: "European Society for Radiotherapy and Oncology" },
  { id: 2, name: "AROI", fullName: "Association of Radiation Oncologists of India" },
  { id: 3, name: "IBS", fullName: "Indian Brachytherapy Society" },
  { id: 4, name: "AGOI", fullName: "Association of Gynecological Oncologists of India" },
  { id: 5, name: "ISO", fullName: "Indian Society of Oncology" },
  { id: 6, name: "Oncology Forum", fullName: "Oncology Forum" },
  { id: 7, name: "Delhi Breast Oncology Group", fullName: "Delhi Breast Oncology Group" },
  { id: 8, name: "IMA", fullName: "Indian Medical Association" }
];

export const awards = [
  {
    id: 1,
    title: "National Fellowship Award (Radiation Oncology)",
    organization: "AROI",
    year: "2013–2014",
    description: "Prestigious national recognition for excellence in radiation oncology."
  },
  {
    id: 2,
    title: "Best Paper Presentations",
    organization: "National Conferences",
    year: "",
    description: "Multiple best paper awards at national oncology conferences."
  },
  {
    id: 3,
    title: "Best Paper Award",
    organization: "AROI",
    year: "",
    description: "Recognition for outstanding research presentation."
  },
  {
    id: 4,
    title: "Best Paper Award",
    organization: "UP AROI",
    year: "",
    description: "State-level recognition for research excellence."
  },
  {
    id: 5,
    title: "Best Paper Award",
    organization: "North Zone AROI",
    year: "",
    description: "Regional recognition for outstanding research contribution."
  }
];

export const researchInfo = {
  sessions: "Chaired various oncology sessions in national and international conferences",
  publications: "Published papers in renowned medical journals of radiation oncology",
  contactNote: "For publication list, please contact via email."
};

export const awarenessInfo = {
  description: "Actively involved in creating awareness against cancer in society, especially amongst females, through paper media, health talks and camps.",
  initiatives: [
    {
      title: "Female Cancer Awareness",
      description: "Special focus on breast and cervical cancer awareness programs for women."
    },
    {
      title: "Health Talks",
      description: "Regular health education sessions for patients and communities."
    },
    {
      title: "Cancer Camps",
      description: "Free screening and awareness camps in underserved areas."
    },
    {
      title: "Media Engagement",
      description: "Active participation through paper media and digital platforms."
    }
  ]
};

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Book Appointment", href: "/book-appointment" },
  { label: "Expertise", href: "/expertise" },
  { label: "Treatments & Techniques", href: "/treatments" },
  { label: "Training & Credentials", href: "/training" },
  { label: "Research & Teaching", href: "/research" },
  { label: "Cancer Awareness", href: "/awareness" },
  { label: "Discover", href: "/discover" },
  { label: "Contact", href: "/contact" }
];

export const discoverTopics = [
  {
    id: "understanding-radiation",
    title: "Understanding Radiation Oncology",
    description: "Learn about radiation therapy and how it works to treat cancer.",
    href: "/discover/radiation-oncology"
  },
  {
    id: "ebrt-vs-brachy",
    title: "External Beam vs Brachytherapy",
    description: "Understand the differences between these two main radiation approaches.",
    href: "/discover/ebrt-vs-brachytherapy"
  },
  {
    id: "precision-techniques",
    title: "Precision Radiation Techniques",
    description: "Explore advanced techniques like IMRT, IGRT, and SBRT.",
    href: "/discover/precision-techniques"
  },
  {
    id: "women-awareness",
    title: "Cancer Awareness for Women",
    description: "Important information about breast and gynecological cancers.",
    href: "/discover/women-cancer-awareness"
  },
  {
    id: "appointment-guide",
    title: "Appointment Preparation Guide",
    description: "What to expect and how to prepare for your consultation.",
    href: "/discover/appointment-guide"
  }
];

export const mediaContent = {
  featuredVideo: {
    title: "Understanding Radiation Therapy",
    thumbnail: "https://img.youtube.com/vi/default/maxresdefault.jpg",
    duration: "10:25",
    topic: "Education"
  },
  reels: [
    { title: "Breast Cancer Awareness", topic: "Awareness", platform: "instagram" },
    { title: "IMRT Explained", topic: "Techniques", platform: "instagram" },
    { title: "Cancer Screening Tips", topic: "Prevention", platform: "instagram" }
  ],
  categories: ["Breast", "Thoracic", "Gynecologic", "GI & Hepatobiliary", "Radiation Techniques", "Awareness"]
};

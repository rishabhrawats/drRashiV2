// Comprehensive mock data for Dr. Rashi Agrawal's medical website - Revamped

export const doctorInfo = {
  name: "Dr. Rashi Agrawal",
  title: "M.D. (Clinical & Radiation Oncology), FUICC (USA)",
  designation: "Director, Radiation Oncology",
  hospital: "Max Super Speciality Hospital, Vaishali, Ghaziabad",
  department: "Radiation Oncology",
  experience: "22+",
  experienceText: "Years of Experience",
  phone: "+91 92171 91913",
  phone2: "+91 98914 83550",
  whatsapp: "919891483550",
  website: "drrashiagrawal.com",
  logo: "https://customer-assets.emergentagent.com/job_f10da3da-2149-401e-a3d2-6ee479fae093/artifacts/vk14qzll_Dr%20Rashi%20AGRAWAL.png",
  profileImage: "https://customer-assets.emergentagent.com/job_6fa1bc13-2ded-4091-8436-9d3e22eac5d8/artifacts/vnl434rb_medium_dr_rashi_agrawal_3ddd0e8452.jpg",
  instagram: "https://www.instagram.com/drrashiagrawalcancerspecialist?igsh=MWIxaDF3MHhseHcyZg==",
  youtube: "https://youtube.com/@drrashiagrawalcancerspecialist?feature=shared",
  facebook: "https://www.facebook.com/share/18MbujzC7q/",
  googleReviews: "https://share.google/hJg5dnCSmt9oprfVA",
  tagline: "Compassionate Cancer Care with Precision Technology",
  subTagline: "Experience the perfect blend of advanced radiation oncology and personalized patient care."
};

export const quickStats = [
  { value: "22+", label: "Years Experience", icon: "Clock" },
  { value: "50+", label: "Publications", icon: "FileText" },
  { value: "10K+", label: "Patients Treated", icon: "Users" },
  { value: "8+", label: "Global Training Centers", icon: "Globe" }
];

export const specialties = [
  "Radiation Oncology",
  "Head & Neck Cancer",
  "Urological Malignancy",
  "Bone & Soft Tissue Sarcoma",
  "Brain Tumor (Neuro Oncology)",
  "Breast Cancer"
];

export const hospitals = [
  {
    id: "vaishali",
    name: "Max Super Speciality Hospital",
    location: "Vaishali, Ghaziabad",
    address: "W-3, Sector 1, Vaishali, Ghaziabad, Uttar Pradesh 201012",
    type: "Primary Practice",
    mapUrl: "https://maps.app.goo.gl/2mrnAZtFxaHkh5J39",
    hasTimings: true,
    opdTimings: [
      { day: "Monday", time: "9:00 AM – 4:00 PM", available: true },
      { day: "Tuesday", time: "9:00 AM – 4:00 PM", available: true },
      { day: "Wednesday", time: "9:00 AM – 4:00 PM", available: true },
      { day: "Thursday", time: "9:00 AM – 4:00 PM", available: true },
      { day: "Friday", time: "9:00 AM – 4:00 PM", available: true },
      { day: "Saturday", time: "9:00 AM – 4:00 PM", available: true },
      { day: "Sunday", time: "Not Available", available: false }
    ]
  },
  {
    id: "clinic",
    name: "Dr. Rashi Agrawal's Clinic",
    location: "Patel Nagar, Ghaziabad",
    address: "J-68, Patel Nagar 1st, Opp. Old Bus Stand, Near Poddar Nursing Home, Ghaziabad",
    type: "Private Clinic",
    mapUrl: "https://maps.app.goo.gl/h6W6Tux1NEofrgGx9",
    hasTimings: true,
    opdTimings: [
      { day: "Monday", time: "5:00 PM – 6:00 PM", available: true },
      { day: "Tuesday", time: "5:00 PM – 6:00 PM", available: true },
      { day: "Wednesday", time: "5:00 PM – 6:00 PM", available: true },
      { day: "Thursday", time: "5:00 PM – 6:00 PM", available: true },
      { day: "Friday", time: "5:00 PM – 6:00 PM", available: true },
      { day: "Saturday", time: "5:00 PM – 6:00 PM", available: true },
      { day: "Sunday", time: "On Appointment", available: true }
    ]
  }
];

export const expertiseAreas = [
  {
    id: "head-neck",
    title: "Head & Neck Cancer",
    shortDesc: "Specialized head & neck care",
    description: "Expert radiation therapy for head and neck malignancies including oral cavity, pharynx, larynx, and thyroid cancers using precision IMRT and IGRT techniques.",
    icon: "User",
    color: "blue"
  },
  {
    id: "urological",
    title: "Urological Malignancy",
    shortDesc: "Prostate, Bladder & Kidney cancer",
    description: "Comprehensive treatment for prostate, bladder, and kidney cancers with advanced radiation techniques including SBRT and brachytherapy for optimal outcomes.",
    icon: "Activity",
    color: "teal"
  },
  {
    id: "sarcoma",
    title: "Bone & Soft Tissue Sarcoma",
    shortDesc: "Musculoskeletal cancer expert",
    description: "Specialized radiation therapy for bone and soft tissue sarcomas, including pre-operative and post-operative radiation with limb-preserving approaches.",
    icon: "Bone",
    color: "purple"
  },
  {
    id: "neuro",
    title: "Brain Tumor (Neuro Oncology)",
    shortDesc: "Advanced brain tumor treatment",
    description: "Expert management of brain tumors using stereotactic radiosurgery (SRS), fractionated stereotactic radiotherapy, and whole brain radiation techniques.",
    icon: "Brain",
    color: "pink"
  }
];

export const techniques = [
  { id: "sbrt", name: "SBRT", fullName: "Stereotactic Body Radiation Therapy", icon: "Target" },
  { id: "igrt", name: "IGRT", fullName: "Image-Guided Radiation Therapy", icon: "Scan" },
  { id: "imrt", name: "IMRT", fullName: "Intensity-Modulated Radiation Therapy", icon: "Layers" },
  { id: "brachytherapy", name: "Brachytherapy", fullName: "Image-Guided Brachytherapy", icon: "CircleDot" },
  { id: "srt", name: "SRT", fullName: "Stereotactic Radiotherapy", icon: "Crosshair" },
  { id: "electron", name: "Electron", fullName: "Electron Beam Therapy", icon: "Zap" }
];

export const credentials = [
  { title: "UICC International Fellowship", location: "Geneva, Switzerland", year: "2016-17", type: "fellowship" },
  { title: "Proton Therapy Training", location: "Loma Linda, California", year: "", type: "training" },
  { title: "Cyberknife Training", location: "Orange Coast Medical Centre, USA", year: "", type: "training" },
  { title: "Tata Memorial Hospital", location: "Mumbai, India", year: "", type: "fellowship" },
  { title: "ESTRO Contouring School", location: "Europe", year: "", type: "training" }
];

export const awards = [
  { title: "National Fellowship Award", org: "AROI", year: "2013-14" },
  { title: "Best Paper Award", org: "AROI National Conference", year: "" },
  { title: "Best Paper Award", org: "North Zone AROI", year: "" }
];

export const memberships = [
  "ESTRO", "AROI", "IBS", "AGOI", "ISO", "Delhi Breast Oncology Group", "IMA"
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "Dr. Rashi Agrawal is an exceptional doctor. Her expertise in radiation oncology combined with her compassionate approach made my cancer journey much easier. Highly recommended!",
    treatment: "Breast Cancer",
    date: "2024"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Ghaziabad",
    rating: 5,
    text: "The level of care and attention I received was outstanding. Dr. Agrawal explained every step of my treatment clearly and was always available to address my concerns.",
    treatment: "Lung Cancer",
    date: "2024"
  },
  {
    id: 3,
    name: "Meena Gupta",
    location: "Noida",
    rating: 5,
    text: "I am grateful to Dr. Rashi for her skilled treatment and kind support throughout my therapy. Her team at Max Hospital is equally professional and caring.",
    treatment: "Cervical Cancer",
    date: "2023"
  },
  {
    id: 4,
    name: "Anil Verma",
    location: "Meerut",
    rating: 5,
    text: "Best radiation oncologist in Delhi NCR. Her precision in treatment planning and genuine concern for patients sets her apart. Forever thankful!",
    treatment: "Prostate Cancer",
    date: "2024"
  }
];

export const faqs = [
  {
    question: "What is radiation therapy and how does it work?",
    answer: "Radiation therapy uses high-energy beams to destroy cancer cells. It works by damaging the DNA of cancer cells, preventing them from growing and dividing. Modern techniques like IMRT and IGRT allow us to target tumors precisely while minimizing damage to healthy tissue."
  },
  {
    question: "Is radiation therapy painful?",
    answer: "The radiation treatment itself is painless - similar to getting an X-ray. You won't feel anything during the procedure. Some patients may experience side effects like fatigue or skin changes in the treated area, which we carefully manage throughout your treatment."
  },
  {
    question: "How long does each radiation session take?",
    answer: "Each treatment session typically takes 15-30 minutes, though the actual radiation delivery is only a few minutes. The rest of the time is spent positioning you correctly to ensure precise treatment delivery."
  },
  {
    question: "What is the difference between external beam radiation and brachytherapy?",
    answer: "External beam radiation delivers treatment from outside your body using a machine. Brachytherapy places radioactive sources inside or very close to the tumor, allowing higher doses directly to the cancer while sparing surrounding tissues. The choice depends on your cancer type and location."
  },
  {
    question: "How do I prepare for my first consultation?",
    answer: "Please bring all your medical records, imaging reports (CT, MRI, PET scans), biopsy reports, and a list of current medications. Having a family member accompany you can be helpful. Write down any questions you have about your diagnosis or treatment."
  },
  {
    question: "What are the side effects of radiation therapy?",
    answer: "Side effects vary depending on the treatment area but commonly include fatigue and skin changes in the treated region. We use advanced techniques to minimize side effects and provide comprehensive supportive care throughout your treatment journey."
  }
];

export const googleReviews = [
  { name: "Amit Singh", rating: 5, text: "Excellent doctor with vast experience. Very patient and explains everything in detail.", date: "1 month ago" },
  { name: "Sunita Yadav", rating: 5, text: "Dr. Rashi is very knowledgeable and caring. The staff is also very helpful.", date: "2 months ago" },
  { name: "Vikram Malhotra", rating: 5, text: "Highly professional and compassionate. Best radiation oncologist in the region.", date: "3 months ago" },
  { name: "Rekha Jain", rating: 5, text: "Very satisfied with the treatment. Doctor is very supportive throughout the journey.", date: "1 month ago" }
];

export const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" }
];

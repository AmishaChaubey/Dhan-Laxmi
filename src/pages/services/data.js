// src/pages/services/data.js

export const services = [
  {
    slug: "ambulance-services",
    title: "Ambulance Services",
    heroImage: "/banner-img/ambulance.png",
   
     
    overview:
      "Our ambulance services provide fast, safe, and reliable medical transportation for both emergencies and non-emergency situations. Each ambulance is equipped with essential life-saving equipment, oxygen cylinders, stretchers, and first-aid kits. Trained drivers and medical staff ensure immediate attention, patient comfort, and timely transfer to hospitals, homes, or care centers. We also follow strict hygiene protocols and maintain clear communication with families during transit, ensuring a stress-free experience in critical moments.",
    inclusions: ["24/7 ambulance availability", "BLS support", "Oxygen cylinder", "Trained driver & helper"],
    process: [
      { step: 1, title: "Emergency Call", desc: "Call our helpline anytime for ambulance support." },
      { step: 2, title: "Quick Dispatch", desc: "Nearest ambulance dispatched immediately." },
      { step: 3, title: "Safe Transfer", desc: "Patient transported safely to hospital." },
    ],
    faqs: [
      { q: "Is ambulance available 24/7?", a: "Yes, we operate round-the-clock including holidays." },
      { q: "Do ambulances have oxygen?", a: "Yes, oxygen cylinders are available." },
      { q: "Can I book ambulance for non-emergency?", a: "Yes, for hospital visits or discharges." },
      { q: "How fast does ambulance arrive?", a: "We dispatch the nearest ambulance for quick response." },
    ],
    gallery: ["/dhanLakshmi-img/11.jpg", "/dhanLakshmi-img/14.jpg","/dhanLakshmi-img/13.jpg"],
    contact: "+91- 9711875038",
  },
  {
  slug: "nursing-care-services",
  title: "Nursing Care Services",
  heroImage: "/banner-img/26.png",

  overview:
    "Our nursing care services provide professional medical support at home for patients requiring continuous care, recovery assistance, or critical monitoring. We offer trained nurses, experienced doctors, and compassionate attendants to ensure personalized treatment and comfort. Our ICU setup at home includes advanced equipment such as ventilators, infusion pumps, patient beds, and oxygen cylinders. We maintain hospital-level hygiene, regular health monitoring, and clear communication with family members for complete peace of mind.",

  inclusions: [
    "Trained nurses & doctors",
    "24/7 patient monitoring",
    "Home ICU setup",
    "Ventilator support",
    "Infusion (reach) pump",
    "Patient bed with oxygen cylinder",
    "Professional attendants"
  ],

  process: [
    { step: 1, title: "Consultation", desc: "Call us to discuss patient condition and care requirements." },
    { step: 2, title: "Care Assessment", desc: "Our medical team evaluates and plans personalized care." },
    { step: 3, title: "Setup at Home", desc: "Nursing staff and medical equipment arranged at home." },
    { step: 4, title: "Ongoing Care", desc: "Continuous monitoring and support by trained professionals." }
  ],

  faqs: [
    { q: "Do you provide ICU setup at home?", a: "Yes, we offer complete ICU setup including ventilator and monitoring equipment." },
    { q: "Are nurses professionally trained?", a: "Yes, all nurses are certified and experienced in patient care." },
    { q: "Can doctors visit the patient at home?", a: "Yes, doctors are available for regular checkups and emergencies." },
    { q: "Is nursing care available 24/7?", a: "Yes, we provide round-the-clock nursing and attendant services." }
  ],

  gallery: [
    "/services/n1.jfif",
    "/services/n2.jfif",
    "/services/n3.jfif"
  ],

  contact: "+91- 9711875038",
},


  {
    slug: "road-ambulance-services",
    title: "Road Ambulance Services",
    heroImage: "/banner-img/28.png",
    overview:
      "Our road ambulance services offer reliable and safe patient transfers for city and inter-city travel. Available in AC and Non-AC options, each vehicle is equipped with oxygen support, comfortable stretchers, and medical monitoring equipment. Trained medical attendants accompany patients throughout the journey to provide care, monitor vital signs, and assist with emergencies. We prioritize patient dignity and comfort, ensuring smooth transportation from home or hospital to destination.",
    inclusions: ["City & outstation transfers", "AC / Non-AC ambulances", "Oxygen support", "Medical attendant"],
    process: [
      { step: 1, title: "Booking", desc: "Book ambulance via call." },
      { step: 2, title: "Pickup", desc: "Ambulance reaches patient location." },
      { step: 3, title: "Drop", desc: "Safe drop at destination." },
    ],
    faqs: [
      { q: "Do you provide long-distance service?", a: "Yes, outstation services are available." },
      { q: "Are medical attendants provided?", a: "Yes, trained attendants accompany patients." },
      { q: "Is oxygen available during travel?", a: "Yes, oxygen support is continuous." },
      { q: "Can I choose AC ambulance?", a: "Yes, both AC and Non-AC are available." },
    ],
    gallery: ["/dhanLakshmi-img/14.jpg", "/dhanLakshmi-img/15.jpg","/dhanLakshmi-img/13.jpg"],
    contact: "+91- 9711875038",
  },

  {
    slug: "deadbody-ambulance-services",
    title: "Dead Body Ambulance Services",
    heroImage: "/banner-img/29.png",
    overview:
      "Our dead body ambulance service is designed to transport deceased individuals with dignity and respect. Sanitized vehicles and trained staff handle the body carefully, ensuring hygiene and compliance with health protocols. We provide timely transportation to hospitals, residences, cremation grounds, or burial sites. Families receive compassionate support and guidance during these sensitive times, helping them manage final rites without worry or delay.",
    inclusions: ["24/7 dead body transport", "Sanitized ambulance", "Trained staff", "Respectful handling"],
    process: [
      { step: 1, title: "Request Service", desc: "Call to request dead body transport." },
      { step: 2, title: "Pickup", desc: "Body collected respectfully." },
      { step: 3, title: "Final Transport", desc: "Delivered to hospital or cremation site." },
    ],
    faqs: [
      { q: "Is service available at night?", a: "Yes, 24/7 availability." },
      { q: "Are ambulances sanitized?", a: "Yes, all vehicles are fully sanitized." },
      { q: "Can pickup be arranged from home?", a: "Yes, home pickups are provided." },
      { q: "Is staff trained?", a: "Yes, professional staff handles the process respectfully." },
    ],
    gallery: ["/dhanLakshmi-img/16.jpg", "/dhanLakshmi-img/14.jpg","/dhanLakshmi-img/11.jpg"],
    contact: "+91- 9711875038",
  },

  {
    slug: "ventilator-ambulance-services",
    title: "Ventilator Ambulance Services",
    heroImage: "/banner-img/30.png",
    overview:
      "Ventilator ambulances are specifically designed for critically ill patients who require continuous respiratory support during transfer. Each ambulance is equipped with ICU-grade ventilators, advanced monitoring systems, emergency medicines, and trained medical staff. Continuous monitoring of vital signs ensures patient safety during transit. Families can rely on our professional team for prompt, attentive care while patients are transported safely to hospitals or treatment centers.",
    inclusions: ["Ventilator support", "ICU monitoring", "Doctor & paramedic", "Emergency medicines"],
    process: [
      { step: 1, title: "Medical Assessment", desc: "Patient condition shared over call." },
      { step: 2, title: "Setup Ambulance", desc: "Ambulance prepared with ventilator and equipment." },
      { step: 3, title: "Critical Transfer", desc: "Safe monitored transfer to hospital." },
    ],
    faqs: [
      { q: "Is doctor available?", a: "Yes, trained doctor or paramedic is provided." },
      { q: "Is monitoring continuous?", a: "Yes, patient is monitored throughout transport." },
      { q: "Is ventilator reliable?", a: "Yes, ICU-grade ventilators ensure safe oxygen support." },
      { q: "Can it be used for long-distance transfers?", a: "Yes, inter-city transfers are possible." },
    ],
    gallery: ["/dhanLakshmi-img/14.jpg", "/dhanLakshmi-img/11.jpg","/dhanLakshmi-img/11.jpg"],
    contact: "+91- 9711875038",
  },

  {
    slug: "air-ambulance-services",
    title: "Air Ambulance Services",
    heroImage: "/banner-img/32.png",
    overview:
      "Our air ambulance service offers the fastest and most advanced medical evacuation for critically ill patients requiring urgent care over long distances. Aircraft are equipped with ICU setups, ventilators, monitoring devices, and essential medicines. Experienced medical teams accompany patients to provide continuous care during flights. We also manage ground transfers, airport handling, and permissions, ensuring seamless and safe patient transportation from departure to destination.",
    inclusions: ["Chartered aircraft", "ICU setup onboard", "Medical escort team", "Airport ambulance transfer"],
    process: [
      { step: 1, title: "Medical Evaluation", desc: "Patient condition assessed, plan created." },
      { step: 2, title: "Flight Arrangement", desc: "Aircraft and permissions arranged." },
      { step: 3, title: "Air Evacuation", desc: "Safe transfer via air ambulance." },
    ],
    faqs: [
      { q: "Is air ambulance safe?", a: "Yes, fully equipped ICU and trained medical team onboard." },
      { q: "Is ICU available onboard?", a: "Yes, ICU-grade equipment and monitoring available." },
      { q: "Do you provide airport transfers?", a: "Yes, ground ambulance arranged for airport pick/drop." },
      { q: "Is service available nationwide?", a: "Yes, service available across India." },
    ],
    gallery: ["/services/air2.jfif", "/services/air1.jfif","/services/air3.jfif",],
    contact: "+91- 9711875038",
  },

  {
    slug: "train-ambulance-services",
    title: "Train Ambulance Services",
    heroImage: "/banner-img/33.png",
    overview:
      "Our train ambulance service ensures safe and comfortable long-distance transfers for patients requiring medical support. Reserved train coaches are provided with oxygen, stretchers, and monitoring equipment. Trained medical staff accompany patients throughout the journey to monitor vital signs and administer emergency care if needed. Coordination with hospitals at both departure and arrival points ensures smooth boarding and disembarking, making the journey stress-free for families.",
    inclusions: ["Reserved train coach", "Medical escort", "Oxygen & monitoring", "Hospital coordination"],
    process: [
      { step: 1, title: "Planning", desc: "Route and medical requirement planning." },
      { step: 2, title: "Boarding", desc: "Patient safely boarded in reserved coach." },
      { step: 3, title: "Arrival", desc: "Transferred to destination hospital safely." },
    ],
    faqs: [
      { q: "Is train ambulance affordable?", a: "Yes, it is more cost-effective than air ambulance." },
      { q: "Are medical escorts provided?", a: "Yes, trained staff accompany the patient throughout the journey." },
      { q: "Is oxygen available during travel?", a: "Yes, oxygen supply is continuous." },
      { q: "Do you coordinate with hospitals?", a: "Yes, coordination is done at both departure and arrival stations." },
    ],
    gallery: ["/services/train1.jfif","/services/train2.jfif","/services/train3.jfif",],
    contact: "+91- 9711875038",
  },

  {
  slug: "basic-advanced-life-support-ambulance",
  title: "Basic & Advanced Life Support Ambulance",
  heroImage: "/banner-img/48.png",
  overview:
    "Basic Life Support (BLS) and Advanced Life Support (ALS) ambulance services are designed to provide safe and medically equipped transportation for patients requiring continuous monitoring and professional care. BLS ambulances are suitable for stable patients needing basic medical assistance, while ALS ambulances are equipped for critical patients who require advanced medical intervention during transit. Both services ensure timely response, patient safety, and professional medical support throughout the journey.",
  inclusions: [
    "Basic Life Support (BLS) and Advanced Life Support (ALS) options",
    "Oxygen support and medical stretcher",
    "Trained EMTs and paramedical staff",
    "Monitoring equipment for vital signs",
    "Emergency medicines and medical kits",
    "Clean, sanitized, and well-equipped ambulance"
  ],
  process: [
    { step: 1, title: "Booking", desc: "Call or WhatsApp to book BLS or ALS ambulance based on patient condition." },
    { step: 2, title: "Ambulance Dispatch", desc: "Nearest suitable life support ambulance is dispatched immediately." },
    { step: 3, title: "Patient Assessment", desc: "Medical staff assess and stabilize the patient before transportation." },
    { step: 4, title: "Safe Transfer", desc: "Patient is continuously monitored and safely transported to the destination." }
  ],
  faqs: [
    { q: "What is the difference between BLS and ALS ambulance?", a: "BLS ambulances provide basic medical care for stable patients, while ALS ambulances are equipped with advanced life-saving equipment for critical patients." },
    { q: "Do ALS ambulances have advanced equipment?", a: "Yes, ALS ambulances include cardiac monitors, defibrillators, ventilators, and emergency medications." },
    { q: "Are trained medical professionals available?", a: "Yes, both BLS and ALS ambulances have trained paramedics or medical staff onboard." },
    { q: "When should I choose ALS over BLS?", a: "ALS should be chosen for patients requiring advanced medical intervention or continuous critical monitoring." }
  ],
  gallery: [
   "/dhanLakshmi-img/12.jpg",
    "/dhanLakshmi-img/11.jpg",
    "/dhanLakshmi-img/14.jpg"
  ],
  contact: "+91-9711875038"
},
{
  slug: "eeco-ambulance-services",
  title: "Eeco Ambulance Services",
  heroImage: "/banner-img/47.png",
  overview:
    "Eeco ambulance services are designed for safe, reliable, and cost-effective patient transportation, especially for non-critical and stable medical conditions. These ambulances are ideal for hospital visits, routine check-ups, discharge transfers, and short to medium-distance travel. Equipped with a medical stretcher, oxygen support, and trained attendants, Eeco ambulances ensure patient comfort, safety, and timely pickup and drop at an affordable cost.",
  inclusions: [
    "Eeco ambulance vehicle",
    "Medical stretcher facility",
    "Oxygen support if required",
    "Trained ambulance attendant",
    "Clean and hygienic interior",
    "Affordable and budget-friendly service"
  ],
  process: [
    { step: 1, title: "Booking", desc: "Call or WhatsApp to book an Eeco ambulance quickly." },
    { step: 2, title: "Ambulance Dispatch", desc: "Nearest available Eeco ambulance is assigned and dispatched." },
    { step: 3, title: "Patient Pickup", desc: "Patient is carefully assisted and loaded into the ambulance." },
    { step: 4, title: "Safe Transfer", desc: "Patient is transported safely and dropped at the destination on time." }
  ],
  faqs: [
    { q: "What is an Eeco ambulance used for?", a: "Eeco ambulances are used for non-critical patient transport, hospital visits, and routine medical transfers." },
    { q: "Is oxygen support available in Eeco ambulance?", a: "Yes, oxygen support can be provided on request." },
    { q: "Is Eeco ambulance affordable?", a: "Yes, Eeco ambulances are a budget-friendly option compared to ICU or ALS ambulances." },
    { q: "Are attendants trained?", a: "Yes, trained attendants are present to assist the patient during transport." }
  ],
  gallery: [
   "/dhanLakshmi-img/12.jpg",
    "/dhanLakshmi-img/11.jpg",
    "/dhanLakshmi-img/14.jpg"
  ],
  contact: "+91-9711875038"
},

  {
    slug: "deadbody-freezer-box-at-home",
    title: "Dead Body Freezer Box at Home",
    heroImage: "/banner-img/34.png",
    overview:
      "Our dead body freezer box service provides families the ability to preserve the deceased at home respectfully and hygienically. Temperature-controlled freezer boxes maintain the body safely for up to 48–72 hours, allowing sufficient time for rituals and ceremonies. Professional teams install, monitor, and remove the freezer boxes, ensuring complete safety and dignity. Families can focus on performing final rites without urgency or stress.",
    inclusions: ["Temperature-controlled freezer", "Hygienic preservation", "Flexible duration", "Home installation"],
    process: [
      { step: 1, title: "Booking", desc: "Call to book freezer box service." },
      { step: 2, title: "Installation", desc: "Freezer box installed at home by professionals." },
      { step: 3, title: "Removal", desc: "Collected after use with proper hygiene." },
    ],
    faqs: [
      { q: "How long can body be preserved?", a: "Up to 48–72 hours depending on temperature." },
      { q: "Is freezer sanitized?", a: "Yes, cleaned and sanitized for every use." },
      { q: "Can it fit in small homes?", a: "Yes, space-efficient models are available." },
      { q: "Is installation safe?", a: "Yes, professional team ensures safe installation." },
    ],
    gallery: ["/services/freezer1.jfif","/services/freezer2.jfif","/services/freezer3.jfif",],
    contact: "+91- 9711875038",
  },

  {
    slug: "icu-ambulance-services",
    title: "ICU Ambulance Services",
    heroImage: "/banner-img/35.png",
    overview:
      "Our ICU ambulance services deliver continuous hospital-level care during patient transportation. Equipped with ICU monitoring systems, ventilators, oxygen, emergency medicines, and skilled doctors or paramedics, these ambulances ensure complete medical supervision. Patients receive uninterrupted critical care during transfer, making it ideal for seriously ill or post-surgery patients who need immediate and ongoing attention en route to hospitals or specialized centers.",
    inclusions: ["ICU monitoring", "Ventilator & oxygen", "Emergency medicines", "Doctor & paramedic"],
    process: [
      { step: 1, title: "Call", desc: "Inform us about ICU requirements." },
      { step: 2, title: "Setup", desc: "ICU ambulance prepared with all medical equipment." },
      { step: 3, title: "Transfer", desc: "Safe transport under continuous monitoring." },
    ],
    faqs: [
      { q: "What is difference between ICU & ventilator ambulance?", a: "ICU ambulance provides full critical care setup including monitoring and medicines." },
      { q: "Is oxygen available?", a: "Yes, continuous oxygen supply is maintained." },
      { q: "Are trained staff provided?", a: "Yes, doctors and paramedics accompany the patient." },
      { q: "Can ICU ambulance travel long distances?", a: "Yes, inter-city transfers are supported." },
    ],
    gallery: ["/dhanLakshmi-img/14.jpg", "/dhanLakshmi-img/13.jpg","/dhanLakshmi-img/11.jpg"],
    contact: "+91- 9711875038",
  },

  {
    slug: "ac-ambulance-services",
  title: "AC & Non-AC Ambulance Services",
  heroImage: "/banner-img/36.png",
  overview:
    "AC and Non-AC ambulance services provide safe, reliable, and comfortable medical transportation for patients in stable condition. AC ambulances are ideal for patients who require a temperature-controlled and comfortable environment during hospital visits, check-ups, or home-to-hospital transfers. Non-AC ambulances are a cost-effective option for short-distance travel and routine patient transfers. Both services are equipped with stretchers, oxygen support, and trained medical attendants to ensure patient safety, hygiene, and timely pickup and drop.",
  inclusions: [
    "AC and Non-AC ambulance options available",
    "Oxygen support with mask",
    "Comfortable medical stretcher",
    "Trained medical attendants",
    "Clean and hygienic ambulance interior",
    "Timely pickup and safe drop"
  ],
  process: [
    { step: 1, title: "Booking", desc: "Call or WhatsApp to book AC or Non-AC ambulance as per patient requirement." },
    { step: 2, title: "Ambulance Dispatch", desc: "Nearest suitable ambulance is assigned and dispatched quickly." },
    { step: 3, title: "Patient Pickup", desc: "Patient is safely assisted and loaded with proper care." },
    { step: 4, title: "Safe Transfer", desc: "Patient is transported comfortably and dropped at the destination on time." }
  ],
  faqs: [
    { q: "What is the difference between AC and Non-AC ambulance?", a: "AC ambulances provide air-conditioning for added comfort, while Non-AC ambulances are a budget-friendly option for stable patients." },
    { q: "Is oxygen support available in both?", a: "Yes, oxygen support is available in both AC and Non-AC ambulances." },
    { q: "Are these ambulances suitable for emergencies?", a: "These ambulances are suitable for non-critical and stable emergency situations." },
    { q: "Are medical attendants provided?", a: "Yes, trained medical attendants assist the patient during the journey." }
  ],
  gallery: [
    "/dhanLakshmi-img/12.jpg",
    "/dhanLakshmi-img/11.jpg",
    "/dhanLakshmi-img/14.jpg"
  ],
  contact: "+91-9711875038"
},


  {
    slug: "cardiac-care-ambulance",
    title: "Cardiac Care Ambulance",
    heroImage: "/banner-img/37.png",
    overview:
      "Our cardiac care ambulance services provide specialized support for heart-related emergencies. Each vehicle is equipped with cardiac monitors, defibrillators, emergency medicines, and trained cardiac professionals. Continuous monitoring of heart activity and rapid medical intervention ensures patient stability. This service is crucial for patients experiencing chest pain, cardiac arrest, or requiring continuous cardiac supervision during hospital transfers.",
    inclusions: ["Cardiac monitor", "Defibrillator", "Trained cardiac staff", "Emergency medicines"],
    process: [
      { step: 1, title: "Emergency Call", desc: "Immediate cardiac support dispatched." },
      { step: 2, title: "Monitoring", desc: "Continuous heart monitoring en route." },
      { step: 3, title: "Hospital Transfer", desc: "Rapid transport to specialized cardiac center." },
    ],
    faqs: [
      { q: "Is ECG available?", a: "Yes, ECG monitoring is available." },
      { q: "Is staff trained?", a: "Yes, trained cardiac professionals accompany patients." },
      { q: "Is ambulance equipped with medicines?", a: "Yes, emergency medicines are onboard." },
      { q: "Can it handle cardiac emergencies?", a: "Yes, designed for immediate response." },
    ],
    gallery: ["/dhanLakshmi-img/14.jpg", "/dhanLakshmi-img/11.jpg","/dhanLakshmi-img/16.jpg"],
    contact: "+91- 9711875038",
  },

  {
    slug: "oxygen-system-ambulance-services",
    title: "Oxygen System Ambulance Services",
    heroImage: "/banner-img/38.png",
    overview:
      "Our oxygen system ambulance service is designed for patients with respiratory conditions requiring uninterrupted oxygen supply. Equipped with high-capacity oxygen cylinders, masks, nasal cannulas, and trained attendants, the ambulance ensures patient safety and comfort during transport. Vital signs are continuously monitored, and immediate intervention is available in case of emergency. This service is ideal for long-distance transfers or hospital visits for respiratory patients.",
    inclusions: ["High-capacity oxygen cylinders", "Mask & nasal cannula", "Monitoring support", "Trained attendant"],
    process: [
      { step: 1, title: "Request", desc: "Call to book oxygen ambulance." },
      { step: 2, title: "Setup Supply", desc: "Oxygen system prepared and checked before transit." },
      { step: 3, title: "Safe Transport", desc: "Patient transported safely with continuous oxygen support." },
    ],
    faqs: [
      { q: "Is oxygen supply continuous?", a: "Yes, uninterrupted oxygen support provided." },
      { q: "Are staff trained?", a: "Yes, medical attendants are trained." },
      { q: "Can it be used for long-distance travel?", a: "Yes, inter-city transfers supported." },
      { q: "Are high-capacity cylinders used?", a: "Yes, suitable for extended transit." },
    ],
    gallery: ["/dhanLakshmi-img/15.jpg", "/dhanLakshmi-img/14.jpg","/dhanLakshmi-img/11.jpg"],
    contact: "+91- 9711875038",
  },
  {
  slug: "deadbody-freezer-box-ambulance",
  title: "Dead Body Freezer Box Ambulance",
  heroImage: "/banner-img/39.png",

  overview:
    "Our dead body freezer box ambulance service combines dignified transportation with advanced preservation facilities. The ambulance is equipped with a temperature-controlled freezer box to safely preserve the deceased during transit. This service is ideal for long-distance transfers, hospital-to-home transport, or cremation ground transfers while maintaining hygiene, safety, and respect throughout the journey. Our trained staff ensures compassionate handling and timely service during sensitive moments.",

  inclusions: [
    "Freezer box fitted ambulance",
    "Temperature-controlled preservation",
    "24/7 availability",
    "Sanitized vehicle",
    "Trained and respectful staff",
    "Safe transport for long distances"
  ],

  process: [
    { step: 1, title: "Service Request", desc: "Call or WhatsApp to book freezer box ambulance service." },
    { step: 2, title: "Ambulance Dispatch", desc: "Nearest freezer box ambulance is dispatched promptly." },
    { step: 3, title: "Dignified Transfer", desc: "Deceased is transported safely with preservation support." },
    { step: 4, title: "Final Drop", desc: "Delivered to home, hospital, or cremation ground respectfully." }
  ],

  faqs: [
    { q: "What is a freezer box ambulance?", a: "It is an ambulance fitted with a freezer box to preserve the body during transport." },
    { q: "Is the service available 24/7?", a: "Yes, we provide round-the-clock freezer box ambulance services." },
    { q: "Can it be used for long-distance transport?", a: "Yes, it is suitable for both short and long-distance transfers." },
    { q: "Is the ambulance sanitized?", a: "Yes, complete sanitization is done before every service." }
  ],

  gallery: [
    "/dhanLakshmi-img/15.jpg",
    "/dhanLakshmi-img/26.jpeg",
    "/dhanLakshmi-img/17.jpeg"
  ],

  contact: "+91-9711875038",
}


];
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  image: string;
  bannerImage: string;
  description: string;
  benefits: string[];
  treatmentSteps: {
    step: number;
    title: string;
    description: string;
  }[];
}

export const services: Service[] = [
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    shortDescription: "Save your natural tooth with our painless root canal therapy using advanced techniques.",
    image: "/images/services/root-canal.jpg",
    bannerImage: "/images/services/root-canal.jpg",
    description: "Root canal treatment is a dental procedure designed to save a tooth that has become severely infected or decayed. At Dental Essential, we use state-of-the-art technology and gentle techniques to make this procedure virtually painless, preserving your natural tooth and restoring your smile.",
    benefits: [
      "Eliminates tooth pain and infection",
      "Saves your natural tooth from extraction",
      "Prevents spread of infection to other teeth",
      "Restores normal biting force and sensation",
      "Virtually painless with modern anesthesia"
    ],
    treatmentSteps: [
      { step: 1, title: "Diagnosis & X-Ray", description: "We examine your tooth and take digital X-rays to assess the extent of infection." },
      { step: 2, title: "Anesthesia", description: "Local anesthesia is administered to ensure complete comfort during the procedure." },
      { step: 3, title: "Cleaning the Canal", description: "The infected pulp is carefully removed and the canal is thoroughly cleaned." },
      { step: 4, title: "Filling & Sealing", description: "The canal is filled with biocompatible material and sealed to prevent reinfection." },
      { step: 5, title: "Crown Placement", description: "A dental crown is placed to protect and restore the tooth's function." }
    ]
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Permanent tooth replacement solution that looks, feels, and functions like natural teeth.",
    image: "/images/services/dental-implants.jpg",
    bannerImage: "/images/services/dental-implants.jpg",
    description: "Dental implants are the gold standard for replacing missing teeth. They provide a permanent, stable foundation for replacement teeth that look, feel, and function just like your natural teeth. Our experienced implantologist uses precision techniques for optimal results.",
    benefits: [
      "Permanent solution that can last a lifetime",
      "Looks and feels like natural teeth",
      "Prevents bone loss in the jaw",
      "No impact on adjacent healthy teeth",
      "Restores full chewing ability"
    ],
    treatmentSteps: [
      { step: 1, title: "Consultation & Planning", description: "Comprehensive examination and 3D imaging to plan your implant placement." },
      { step: 2, title: "Implant Placement", description: "The titanium implant is surgically placed into the jawbone." },
      { step: 3, title: "Healing Period", description: "3-6 months for the implant to fuse with your jawbone (osseointegration)." },
      { step: 4, title: "Abutment Placement", description: "A connector piece is attached to the implant to hold the crown." },
      { step: 5, title: "Crown Fitting", description: "A custom-made crown is attached, completing your new tooth." }
    ]
  },
  {
    slug: "braces-and-aligners",
    title: "Braces and Aligners",
    shortDescription: "Straighten your teeth with traditional braces or invisible aligners for a perfect smile.",
    image: "/images/services/braces-aligners.jpg",
    bannerImage: "/images/services/braces-aligners.jpg",
    description: "Whether you prefer traditional metal braces or invisible aligners, we offer comprehensive orthodontic solutions to straighten your teeth and correct bite issues. Our orthodontic treatments are customized to achieve the best results for your unique smile.",
    benefits: [
      "Corrects crooked and misaligned teeth",
      "Improves bite and jaw alignment",
      "Enhances facial aesthetics",
      "Easier cleaning and better oral hygiene",
      "Boosts confidence with a beautiful smile"
    ],
    treatmentSteps: [
      { step: 1, title: "Orthodontic Assessment", description: "Complete examination, X-rays, and digital scans of your teeth." },
      { step: 2, title: "Treatment Planning", description: "Custom treatment plan with timeline and expected results." },
      { step: 3, title: "Fitting", description: "Braces are bonded or aligners are fitted to begin treatment." },
      { step: 4, title: "Regular Adjustments", description: "Periodic visits for adjustments and progress monitoring." },
      { step: 5, title: "Retention", description: "Retainers provided to maintain your new smile." }
    ]
  },
  {
    slug: "smile-designing",
    title: "Smile Designing and Correction",
    shortDescription: "Transform your smile with our comprehensive cosmetic dentistry solutions.",
    image: "/images/services/smile-correction.jpg",
    bannerImage: "/images/services/smile-correction.jpg",
    description: "Smile designing is a comprehensive approach to enhancing your smile using various cosmetic dental procedures. We analyze your facial features, tooth shape, and personal preferences to create a customized treatment plan that gives you the smile of your dreams.",
    benefits: [
      "Customized to your facial features",
      "Combines multiple treatments for best results",
      "Dramatic improvement in appearance",
      "Boosts self-confidence",
      "Long-lasting results"
    ],
    treatmentSteps: [
      { step: 1, title: "Smile Analysis", description: "Digital smile design using photos and measurements." },
      { step: 2, title: "Treatment Planning", description: "Customized plan combining procedures like veneers, whitening, and contouring." },
      { step: 3, title: "Mock-Up Preview", description: "See a preview of your new smile before treatment begins." },
      { step: 4, title: "Treatment Execution", description: "Step-by-step implementation of the smile design plan." },
      { step: 5, title: "Final Reveal", description: "Your transformed smile is revealed with care instructions." }
    ]
  },
  {
    slug: "crowns-and-bridges",
    title: "Crowns and Bridges",
    shortDescription: "Restore damaged or missing teeth with durable, natural-looking crowns and bridges.",
    image: "/images/services/crown-bridges.jpg",
    bannerImage: "/images/services/crown-bridges.jpg",
    description: "Dental crowns and bridges are effective solutions for restoring damaged teeth or replacing missing ones. Our crowns are crafted from high-quality materials to match your natural teeth perfectly, while bridges span the gap left by missing teeth.",
    benefits: [
      "Restores tooth strength and function",
      "Natural-looking appearance",
      "Protects weakened teeth",
      "Bridges fill gaps from missing teeth",
      "Durable and long-lasting"
    ],
    treatmentSteps: [
      { step: 1, title: "Examination", description: "Assessment of the damaged tooth or gap to determine the best solution." },
      { step: 2, title: "Tooth Preparation", description: "The tooth is shaped to accommodate the crown or bridge." },
      { step: 3, title: "Impressions", description: "Digital or physical impressions are taken for precise fitting." },
      { step: 4, title: "Temporary Restoration", description: "A temporary crown/bridge is placed while the permanent one is made." },
      { step: 5, title: "Final Placement", description: "The custom crown or bridge is cemented in place." }
    ]
  },
  {
    slug: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    shortDescription: "Gentle, child-friendly dental care to keep your little one's smile healthy and bright.",
    image: "/images/services/pedetric.jpg",
    bannerImage: "/images/services/pedetric.jpg",
    description: "Our pediatric dental services are designed to make dental visits fun and stress-free for children. We create a welcoming environment and use gentle techniques to ensure your child develops positive associations with dental care from an early age.",
    benefits: [
      "Child-friendly environment",
      "Gentle and painless treatments",
      "Early detection of dental issues",
      "Education on proper oral hygiene",
      "Builds positive dental habits for life"
    ],
    treatmentSteps: [
      { step: 1, title: "Friendly Introduction", description: "We make your child comfortable with our team and environment." },
      { step: 2, title: "Gentle Examination", description: "Thorough but gentle check-up of teeth and gums." },
      { step: 3, title: "Cleaning", description: "Professional cleaning with child-friendly techniques." },
      { step: 4, title: "Treatment (if needed)", description: "Any necessary treatment performed with extra care." },
      { step: 5, title: "Education & Rewards", description: "Oral hygiene tips and a fun reward for being brave!" }
    ]
  },
  {
    slug: "dentures",
    title: "Dentures",
    shortDescription: "Custom-fitted removable dentures to restore your smile and chewing ability.",
    image: "/images/services/dentures.jpg",
    bannerImage: "/images/services/dentures.jpg",
    description: "Our custom dentures are designed to fit comfortably and look natural. Whether you need complete dentures or partial dentures, we use quality materials and precise fitting techniques to restore your smile and ability to eat and speak confidently.",
    benefits: [
      "Restores ability to eat and speak properly",
      "Natural-looking appearance",
      "Custom-fitted for comfort",
      "Supports facial muscles",
      "Affordable tooth replacement option"
    ],
    treatmentSteps: [
      { step: 1, title: "Consultation", description: "Discussion of your needs and examination of your mouth." },
      { step: 2, title: "Impressions", description: "Precise impressions taken of your gums and any remaining teeth." },
      { step: 3, title: "Try-In", description: "Wax model fitting to check appearance and fit." },
      { step: 4, title: "Final Denture", description: "Custom dentures are crafted and fitted." },
      { step: 5, title: "Adjustments", description: "Follow-up visits to ensure perfect fit and comfort." }
    ]
  },
  {
    slug: "wisdom-tooth-extraction",
    title: "Wisdom Tooth Extraction",
    shortDescription: "Safe and comfortable removal of problematic wisdom teeth by experienced surgeons.",
    image: "/images/services/wisdom.jpg",
    bannerImage: "/images/services/wisdom.jpg",
    description: "Wisdom teeth can cause pain, infection, and damage to adjacent teeth when they don't have enough room to emerge properly. Our oral surgeons perform safe, comfortable extractions using modern techniques and sedation options for a stress-free experience.",
    benefits: [
      "Relieves pain and discomfort",
      "Prevents damage to adjacent teeth",
      "Reduces risk of infection and cysts",
      "Quick recovery with proper care",
      "Sedation options available"
    ],
    treatmentSteps: [
      { step: 1, title: "X-Ray & Assessment", description: "Digital X-rays to evaluate the position and condition of wisdom teeth." },
      { step: 2, title: "Anesthesia", description: "Local anesthesia or sedation administered for comfort." },
      { step: 3, title: "Extraction", description: "Careful removal of the wisdom tooth using specialized techniques." },
      { step: 4, title: "Closure", description: "Stitches placed if necessary to promote healing." },
      { step: 5, title: "Aftercare", description: "Instructions provided for quick and comfortable recovery." }
    ]
  },
  {
    slug: "full-mouth-rehabilitation",
    title: "Full Mouth Rehabilitation",
    shortDescription: "Comprehensive restoration of your entire mouth for optimal function and aesthetics.",
    image: "/images/services/dentures.jpg",
    bannerImage: "/images/services/dentures.jpg",
    description: "Full mouth rehabilitation is a comprehensive treatment plan that addresses multiple dental issues to restore your entire mouth. This may involve a combination of procedures including crowns, bridges, implants, and veneers to achieve optimal oral health and aesthetics.",
    benefits: [
      "Addresses multiple dental issues at once",
      "Restores complete oral function",
      "Dramatically improves smile aesthetics",
      "Customized treatment plan",
      "Long-term oral health improvement"
    ],
    treatmentSteps: [
      { step: 1, title: "Comprehensive Evaluation", description: "Full examination, X-rays, and assessment of all dental issues." },
      { step: 2, title: "Treatment Planning", description: "Detailed plan addressing all concerns with timeline and costs." },
      { step: 3, title: "Phased Treatment", description: "Procedures performed in logical sequence for best results." },
      { step: 4, title: "Progress Monitoring", description: "Regular check-ups to ensure treatment is progressing well." },
      { step: 5, title: "Maintenance Plan", description: "Long-term care plan to maintain your restored smile." }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug);
}

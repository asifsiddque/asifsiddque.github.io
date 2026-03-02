import { BookOpen, GraduationCap, Award, Briefcase, FileText, Mail, MapPin, Link as LinkIcon } from 'lucide-react';

export const data = {
  profile: {
    name: "Md Asif Siddque Jim",
    title: "3rd-Year B.Sc. Student in Biomedical Engineering",
    institution: "Islamic University, Kushtia",
    department: "Department of Biomedical Engineering",
    emails: ["contact.asif.bme@gmail.com", "asif.siddque@std.iu.ac.bd"],
    location: "Islamic University, Kushtia-7003, Bangladesh",
    // To use your own image: 
    // 1. Upload your image to the 'public/images' folder in your project
    // 2. Change the image path below to "./images/your-image-name.jpg"
    image: "./images/my-photo.jpg", 
    cvUrl: "/cv.pdf", // Path to your CV in the public folder
    bio: "I am a 3rd-year Biomedical Engineering student at Islamic University, Kushtia, Bangladesh, with a strong passion for bioinformatics and computational biology. My primary research interest lies in RNA-Seq data analysis, where I explore transcriptomic changes to understand disease mechanisms and biological processes. I am eager to contribute to cutting-edge research at the intersection of biology and data science.",
    socials: [
      { name: "Scholar", url: "https://scholar.google.com/citations?user=vEiWQ7MAAAAJ&hl=en", icon: "BookOpen" },
      { name: "GitHub", url: "https://github.com/asifsiddque", icon: "Github" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/asifsiddque/", icon: "Linkedin" },
      { name: "X (Twitter)", url: "https://x.com/asifsiddquue", icon: "Twitter" },
      { name: "ORCID", url: "https://orcid.org/0009-0007-4294-157X", icon: "User" },
      { name: "ResearchGate", url: "https://www.researchgate.net/profile/Md-Asif-Siddque-Jim", icon: "Network" },
    ],
    interests: [
      "RNA-Seq Data Analysis",
      "Bioinformatics",
      "Computational Biology",
      "Transcriptomics",
      "Biomedical Data Science"
    ],
    news: [
      { date: "2024-09-01", text: "Started RNA-Seq research project" },
      { date: "2024-08-15", text: "Enrolled in Bioinformatics course" },
      { date: "2024-06-01", text: "Completed 2nd year of B.Sc. BME" }
    ]
  },
  stats: [
    { value: "1+", label: "Publications", icon: "FileText" },
    { value: "0+", label: "Total Citations", icon: "Quote" },
    { value: "3+", label: "Research Projects", icon: "FlaskConical" },
    { value: "4+", label: "Years Active", icon: "Star" }
  ],
  research: [
    {
      title: "Bioinformatics Coursework Project",
      status: "completed",
      dates: "2024 – 2024",
      description: "Sequence analysis and genomics project as part of the BME-301 Bioinformatics course.",
      tags: ["Genomics", "Sequence Analysis", "Python"],
      image: null,
      links: {
        github: "https://github.com/asifsiddque",
        pdf: "",
        demo: ""
      }
    },
    {
      title: "Biomedical Signal Processing Study",
      status: "active",
      dates: "2023 – Present",
      description: "Exploring signal processing techniques applied to ECG and EEG data for biomedical diagnostics.",
      tags: ["Signal Processing", "ECG", "EEG", "MATLAB"],
      funding: "University Lab",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      links: {
        github: "",
        pdf: "",
        demo: ""
      }
    },
    {
      title: "RNA-Seq Differential Expression Pipeline",
      status: "active",
      dates: "2024 – Present",
      description: "Building an end-to-end RNA-Seq analysis pipeline for identifying differentially expressed genes in disease vs. control samples.\n\nThis project involves developing a reproducible bioinformatics pipeline using tools such as HISAT2, DESeq2, and R/Bioconductor to analyze transcriptomic data. The goal is to identify key genes involved in disease pathways.",
      tags: ["RNA-Seq", "DESeq2", "R", "Bioinformatics"],
      funding: "Self-funded / University Lab",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      links: {
        github: "https://github.com/asifsiddque",
        pdf: "/report.pdf",
        demo: ""
      }
    }
  ],
  publications: [
    {
      title: "Differential Gene Expression Analysis in Cancer Using RNA-Seq: A Review",
      type: "other",
      status: "In preparation", // Published, Preprint, Under review, In preparation
      starred: true,
      authors: "Md Asif Siddque Jim, Supervisor Name",
      venue: "Undergraduate Research Seminar, IU, 2024",
      description: "A review of RNA-Seq workflows for identifying differentially expressed genes in cancer samples, covering preprocessing, alignment, and statistical analysis steps.",
      tags: ["RNA-Seq", "Cancer", "Bioinformatics"],
      citations: 0
    },
    {
      title: "Machine Learning Approaches for Early Detection of Cardiovascular Diseases",
      type: "conference",
      status: "Under review",
      starred: false,
      authors: "Md Asif Siddque Jim, Co-author Name",
      venue: "International Conference on Biomedical Engineering (ICBME) 2025",
      description: "An evaluation of various machine learning models applied to ECG datasets for the early detection of arrhythmias.",
      tags: ["Machine Learning", "ECG", "Cardiovascular"],
      citations: 0
    }
  ],
  coursework: [
    {
      code: "BME - 301",
      term: "Fall 2024",
      title: "Bioinformatics",
      role: "Student · Islamic University, Kushtia",
      description: "Core course covering sequence analysis, genomics, and RNA-Seq data analysis methods."
    },
    {
      code: "BME - 205",
      term: "Fall 2023",
      title: "Physiology for Engineers",
      role: "Student · Islamic University, Kushtia",
      description: "Human physiology fundamentals with engineering applications."
    },
    {
      code: "BME - 201",
      term: "Spring 2023",
      title: "Biomedical Instrumentation",
      role: "Student · Islamic University, Kushtia",
      description: "Study of medical devices, sensors, and signal acquisition systems used in clinical settings."
    }
  ],
  awards: [
    {
      title: "Dean's List",
      location: "Islamic University, Kushtia · 2023",
      description: "Recognized for academic excellence in the Biomedical Engineering program."
    }
  ],
  cv: {
    education: [
      {
        title: "B.Sc. in Biomedical Engineering",
        institution: "Islamic University, Kushtia",
        dates: "2023 – Present · Kushtia-7003, Bangladesh",
        description: "3rd-year student. Coursework includes bioinformatics, biomedical instrumentation, physiology, and signal processing."
      },
      {
        title: "Higher Secondary Certificate (HSC) in Science",
        institution: "Jashore Govt. City College",
        dates: "2019 – 2020 · Jashore · Board: Jashore · GPA: 5.00"
      },
      {
        title: "Secondary School Certificate (SSC) in Science",
        institution: "Jashore Zilla School",
        dates: "2013 – 2018 · Jashore · Board: Jashore · GPA: 5.00"
      }
    ],
    experience: [
      {
        title: "Joint Organizing Secretary",
        status: "Current",
        organization: "Islamic University Science Club (IUSC)",
        dates: "2024 – Present · Kushtia, Bangladesh",
        description: "Organizing academic and scientific events for the university science club."
      },
      {
        title: "Organizing Secretary",
        status: "Current",
        organization: "Biomed Innovates, Dept. of Biomedical Engineering (BME)",
        dates: "2024 – Present · Islamic University, Kushtia, Bangladesh",
        description: "Leading organizational activities for the Biomedical Engineering department's innovation club."
      }
    ]
  }
};

export type Language = "en" | "gr";

export const translations = {
  nav: {
    home: { en: "Home", gr: "Αρχική" },
    firm: { en: "The Firm", gr: "Η Εταιρεία" },
    specialization: { en: "Specialization", gr: "Εξειδίκευση" },
    contact: { en: "Contact Us", gr: "Επικοινωνία" },
  },
  hero: {
    subtitle: {
      en: "Attorneys at Law",
      gr: "Δικηγορική Εταιρεία",
    },
    tagline: {
      en: "Excellence in Legal Services since 2011",
      gr: "Αριστεία στις Νομικές Υπηρεσίες από το 2011",
    },
    cta: {
      en: "Get in Touch",
      gr: "Επικοινωνήστε",
    },
  },
  firm: {
    title: { en: "The Firm", gr: "Η Εταιρεία" },
    description: {
      en: "AGM Law Firm was founded in 2011 and is based in Athens, with a branch in Cyclades. It is staffed by θεωρεί specialized associates, and has developed a wide network of associates in Greece and abroad. The firm provides comprehensive legal services to individuals and legal entities, both in advisory and litigation level, in a wide range of legal areas. The firm's philosophy is based on the principles of integrity, professionalism, and dedication to the client's interests.",
      gr: "Η δικηγορική εταιρεία AGM ιδρύθηκε το 2011 και εδρεύει στην Αθήνα, με παράρτημα στις Κυκλάδες. Στελεχώνεται από εξειδικευμένους συνεργάτες, και έχει αναπτύξει ευρύ δίκτυο συνεργατών στην Ελλάδα και στο εξωτερικό. Η εταιρεία παρέχει ολοκληρωμένες νομικές υπηρεσίες σε φυσικά και νομικά πρόσωπα, τόσο σε συμβουλευτικό όσο και σε δικαστηριακό επίπεδο, σε ευρύ φάσμα τομέων δικαίου. Η φιλοσοφία της εταιρείας βασίζεται στις αρχές της ακεραιότητας, του επαγγελματισμού και της αφοσίωσης στα συμφέροντα του πελάτη.",
    },
    teamTitle: { en: "Our Team", gr: "Η Ομάδα μας" },
    members: [
      {
        name: { en: "Athanasios Ganotis", gr: "Αθανάσιος Γανώτης" },
        role: { en: "Managing Partner", gr: "Διαχειριστής Εταίρος" },
        description: {
          en: "Athanasios Ganotis is the Managing Partner of AGM Law Firm. He is a member of the Athens Bar Association and has extensive experience in criminal law, civil law, and administrative law. He represents clients before all Greek courts and has handled numerous high-profile cases. He holds a Law Degree from the National and Kapodistrian University of Athens and a Master's Degree in Criminal Law.",
          gr: "Ο Αθανάσιος Γανώτης είναι ο Διαχειριστής Εταίρος της δικηγορικής εταιρείας AGM. Είναι μέλος του Δικηγορικού Συλλόγου Αθηνών και διαθέτει εκτεταμένη εμπειρία στο ποινικό δίκαιο, αστικό δίκαιο και διοικητικό δίκαιο. Εκπροσωπεί πελάτες ενώπιον όλων των ελληνικών δικαστηρίων και έχει χειριστεί πολυάριθμες υποθέσεις υψηλού προφίλ. Κατέχει πτυχίο Νομικής από το Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών και Μεταπτυχιακό Δίπλωμα στο Ποινικό Δίκαιο.",
        },
      },
      {
        name: { en: "Michail Ganotis", gr: "Μιχαήλ Γανώτης" },
        role: { en: "Partner", gr: "Εταίρος" },
        description: {
          en: "Michail Ganotis is a Partner at AGM Law Firm. He specializes in commercial law, banking law, and real estate law. He provides legal advice to businesses and individuals on a wide range of commercial matters. He holds a Law Degree from the National and Kapodistrian University of Athens and a Master's Degree in Commercial Law.",
          gr: "Ο Μιχαήλ Γανώτης είναι Εταίρος στη δικηγορική εταιρεία AGM. Εξειδικεύεται στο εμπορικό δίκαιο, τραπεζικό δίκαιο και δίκαιο ακινήτων. Παρέχει νομικές συμβουλές σε επιχειρήσεις και ιδιώτες σε ευρύ φάσμα εμπορικών θεμάτων. Κατέχει πτυχίο Νομικής από το Εθνικό και Καποδιστριακό Πανεπιστήμιο Αθηνών και Μεταπτυχιακό Δίπλωμα στο Εμπορικό Δίκαιο.",
        },
      },
    ],
  },
  specialization: {
    title: { en: "Specialization", gr: "Εξειδίκευση" },
    subtitle: {
      en: "Our firm provides comprehensive legal services across a wide range of practice areas",
      gr: "Η εταιρεία μας παρέχει ολοκληρωμένες νομικές υπηρεσίες σε ευρύ φάσμα τομέων δικαίου",
    },
    areas: [
      {
        title: { en: "Criminal Law", gr: "Ποινικό Δίκαιο" },
        icon: "Shield",
        description: {
          en: "Our firm has extensive experience in criminal law, representing clients in all stages of criminal proceedings. We handle cases involving financial crimes, drug offenses, crimes against persons, cybercrime, and white-collar crime. We provide aggressive defense strategies while maintaining the highest ethical standards. Our team represents clients before all criminal courts, from misdemeanor courts to the Supreme Court.",
          gr: "Η εταιρεία μας διαθέτει εκτεταμένη εμπειρία στο ποινικό δίκαιο, εκπροσωπώντας πελάτες σε όλα τα στάδια της ποινικής διαδικασίας. Χειριζόμαστε υποθέσεις που αφορούν οικονομικά εγκλήματα, αδικήματα ναρκωτικών, εγκλήματα κατά προσώπων, κυβερνοέγκλημα και εγκλήματα λευκού κολάρου. Παρέχουμε επιθετικές στρατηγικές υπεράσπισης διατηρώντας τα υψηλότερα ηθικά πρότυπα. Η ομάδα μας εκπροσωπεί πελάτες ενώπιον όλων των ποινικών δικαστηρίων.",
        },
      },
      {
        title: { en: "Civil Law", gr: "Αστικό Δίκαιο" },
        icon: "Scale",
        description: {
          en: "We provide comprehensive civil law services including contract disputes, property disputes, family law matters, inheritance law, tort claims, and debt recovery. Our attorneys have significant experience in civil litigation and alternative dispute resolution methods. We represent clients in all civil courts and handle both advisory and contentious matters with equal dedication.",
          gr: "Παρέχουμε ολοκληρωμένες υπηρεσίες αστικού δικαίου συμπεριλαμβανομένων συμβατικών διαφορών, διαφορών ακινήτων, θεμάτων οικογενειακού δικαίου, κληρονομικού δικαίου, αξιώσεων αδικοπραξίας και ανάκτησης οφειλών. Οι δικηγόροι μας διαθέτουν σημαντική εμπειρία σε αστικές δίκες και εναλλακτικές μεθόδους επίλυσης διαφορών.",
        },
      },
      {
        title: { en: "Administrative Law", gr: "Διοικητικό Δίκαιο" },
        icon: "Building",
        description: {
          en: "Our administrative law practice covers disputes with public authorities, tax law, public procurement, licensing and permits, environmental law, and regulatory compliance. We represent clients before administrative courts and the Council of State, providing strategic advice on navigating complex regulatory frameworks.",
          gr: "Η πρακτική μας στο διοικητικό δίκαιο καλύπτει διαφορές με δημόσιες αρχές, φορολογικό δίκαιο, δημόσιες συμβάσεις, αδειοδοτήσεις, περιβαλλοντικό δίκαιο και κανονιστική συμμόρφωση. Εκπροσωπούμε πελάτες ενώπιον διοικητικών δικαστηρίων και του Συμβουλίου της Επικρατείας.",
        },
      },
      {
        title: { en: "Commercial Law", gr: "Εμπορικό Δίκαιο" },
        icon: "Briefcase",
        description: {
          en: "We advise businesses on all aspects of commercial law including company formation, mergers and acquisitions, corporate governance, commercial contracts, competition law, and intellectual property. Our team supports startups and established businesses alike with practical, business-oriented legal solutions.",
          gr: "Συμβουλεύουμε επιχειρήσεις σε όλες τις πτυχές του εμπορικού δικαίου, συμπεριλαμβανομένης της σύστασης εταιρειών, συγχωνεύσεων και εξαγορών, εταιρικής διακυβέρνησης, εμπορικών συμβάσεων, δικαίου ανταγωνισμού και πνευματικής ιδιοκτησίας.",
        },
      },
      {
        title: { en: "Banking Law", gr: "Τραπεζικό Δίκαιο" },
        icon: "Landmark",
        description: {
          en: "Our banking law practice encompasses loan agreements, banking disputes, financial regulation, debt restructuring, foreclosure defense, and consumer protection in financial services. We represent both financial institutions and individuals in banking-related matters.",
          gr: "Η πρακτική μας στο τραπεζικό δίκαιο περιλαμβάνει δανειακές συμβάσεις, τραπεζικές διαφορές, χρηματοπιστωτική ρύθμιση, αναδιάρθρωση χρέους, υπεράσπιση κατασχέσεων και προστασία καταναλωτή στις χρηματοπιστωτικές υπηρεσίες.",
        },
      },
      {
        title: { en: "Real Estate Law", gr: "Δίκαιο Ακινήτων" },
        icon: "Home",
        description: {
          en: "We handle all aspects of real estate law including property transactions, due diligence, lease agreements, property development, land use and zoning, and property disputes. Our team provides thorough legal support for both residential and commercial real estate matters in Greece.",
          gr: "Χειριζόμαστε όλες τις πτυχές του δικαίου ακινήτων, συμπεριλαμβανομένων μεταβιβάσεων ακινήτων, νομικού ελέγχου, μισθωτικών συμβάσεων, ανάπτυξης ακινήτων, χρήσεων γης και διαφορών ακινήτων.",
        },
      },
      {
        title: { en: "Immigration Law", gr: "Μεταναστευτικό Δίκαιο" },
        icon: "Globe",
        description: {
          en: "Our immigration law practice assists individuals and businesses with residence permits, work permits, citizenship applications, Golden Visa program, family reunification, and asylum procedures. We guide clients through the complex Greek immigration system with expertise and care.",
          gr: "Η πρακτική μας στο μεταναστευτικό δίκαιο βοηθά ιδιώτες και επιχειρήσεις με άδειες διαμονής, άδειες εργασίας, αιτήσεις ιθαγένειας, πρόγραμμα Golden Visa, οικογενειακή επανένωση και διαδικασίες ασύλου.",
        },
      },
    ],
  },
  contact: {
    title: { en: "Contact Us", gr: "Επικοινωνία" },
    subtitle: {
      en: "We are here to help you with your legal needs",
      gr: "Είμαστε εδώ για να σας βοηθήσουμε με τις νομικές σας ανάγκες",
    },
    hours: { en: "Office Hours", gr: "Ώρες Γραφείου" },
    hoursValue: {
      en: "Monday – Friday: 09:00 – 17:00",
      gr: "Δευτέρα – Παρασκευή: 09:00 – 17:00",
    },
    athensOffice: { en: "Athens Office", gr: "Γραφείο Αθηνών" },
    athensAddress: {
      en: "Skylitsi 3, 11473 Athens, Greece",
      gr: "Σκυλίτση 3, 11473 Αθήνα, Ελλάδα",
    },
    cycladesOffice: { en: "Cyclades Office", gr: "Γραφείο Κυκλάδων" },
    cycladesAddress: {
      en: "Chora Naxou, 84300 Naxos, Greece",
      gr: "Χώρα Νάξου, 84300 Νάξος, Ελλάδα",
    },
    phone: { en: "Phone", gr: "Τηλέφωνο" },
    email: { en: "Email", gr: "Email" },
    formName: { en: "Full Name", gr: "Ονοματεπώνυμο" },
    formEmail: { en: "Email Address", gr: "Διεύθυνση Email" },
    formSubject: { en: "Subject", gr: "Θέμα" },
    formMessage: { en: "Message", gr: "Μήνυμα" },
    formSend: { en: "Send Message", gr: "Αποστολή Μηνύματος" },
    formSuccess: {
      en: "Your message has been sent successfully!",
      gr: "Το μήνυμά σας στάλθηκε επιτυχώς!",
    },
  },
  footer: {
    rights: {
      en: "© 2025 AGM Law Firm. All rights reserved.",
      gr: "© 2025 Δικηγορική Εταιρεία AGM. Όλα τα δικαιώματα κατοχυρωμένα.",
    },
    privacy: { en: "Privacy Policy", gr: "Πολιτική Απορρήτου" },
    terms: { en: "Terms of Service", gr: "Όροι Χρήσης" },
  },
};

export function t(
  obj: { en: string; gr: string } | undefined,
  lang: Language
): string {
  if (!obj) return "";
  return obj[lang] || obj.en;
}
 // Data for teachers (sampled from existing static content in the attached file)
 const teachers = [
    // Leadership
    {
      name: "Mr. Shailendra Mohan Jha",
      role: "Principal",
      categories: ["Leadership"],
      img: "principal.jpg",
      badge: { text: "Leadership", colorClass: "bg-primary/80", iconClass: "fa-solid fa-crown text-yellow-300" },
      degrees: "M.A, Eco | B.Ed, C.S Inter",
      bio: "Ensuring academic excellence and maintaining the highest standards of education and student development.",
      socials: { linkedin: "https://www.linkedin.com/in/shailendra-mohan-jha-3710899b?originalSubdomain=in" ,
        twitter: "#"
      }
    },
     {
      name: "Mrs. Ranjana",
      role: "Vice Principal",
      categories: ["Leadership"],
      img: "Ranjana kumari.png",
      badge: { text: "Leadership", colorClass: "bg-primary/80", iconClass: "fa-solid fa-crown text-yellow-300" },
      degrees: "M.A, Sociology | M.Ed",
      bio: "Innovative pedagogy and hands-on learning to inspire curiosity and results.",
      socials: {linkedin: "#",
        twitter: "#"
      }
      

    },
    {
      name: "Mr. Amit Kumar",
      role: "Vice Principal",
      categories: ["Leadership"],
      img: "amit sir.png",
      badge: { text: "Leadership", colorClass: "bg-primary/80", iconClass: "fa-solid fa-crown text-yellow-300" },
      degrees: "M.A, Geography | B.Ed, M.B.A",
      bio: "Driving culture, discipline, and student growth through collaborative leadership.",
      socials: {linkedin: "https://www.linkedin.com/in/amit-sinha-a11a9b122/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "https://x.com/amitsinhajharia?t=JBUj67xvgHgJk3_6Uj-4FA&s=03"}
    },
   

    // English (subset)
    {
      name: "Mrs. Renu Sharma",
      role: "English Faculty",
      categories: ["English"],
      img: "IMG-20250828-WA0002 - Renu Sharma English (1).png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "M.A English, B.Ed",
      bio: "Focus on reading, writing, and spoken fluency with modern pedagogy.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
    {
      name: "Mr. Sristidhar Jha",
      role: "English Faculty",
      categories: ["English"],
      img: "Sristydhar Jha.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "M.A English, B.Ed",
      bio: "Empowering students with strong reading, writing, and spoken fluency through modern pedagogy.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
     {
      name: "Dr. Om Prakash Pandey",
      role: "English Faculty",
      categories: ["English"],
      img: "OP PANDEy.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "M.A (Eng,Sans), Ph.D, DCE, CTE, B.Ed",
      bio: "Building confident readers, writers, and speakers through dynamic, modern teaching approaches.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
    {
      name: "Mrs. Anindita Banerjee",
      role: "English Faculty",
      categories: ["English"],
      img: "IMG-20250815-WA0038~2 - Anindita Banerjee.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "M.A (English), B.Ed",
      bio: "Fostering strong communication skills through innovative methods in reading, writing, and spoken expression.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
{
      name: "Mrs. Amita Gardner",
      role: "English Faculty",
      categories: ["English"],
      img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "M.A (English), B.Ed",
      bio: "Developing fluent thinkers and communicators with progressive, student-centered learning.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
    {
      name: "Mrs. Neeta Kishore",
      role: "English Faculty",
      categories: ["English"],
      img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "M.A (English), B.Ed, Dip. In Comp.",
      bio: "Shaping confident learners by strengthening reading, writing, and speaking skills through creative pedagogy.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
     {
      name: "Mr. Pradeep Dutta",
      role: "English Faculty",
      categories: ["English"],
      img: "Pradeep dutta.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "M.Sc, M.A, B.Ed.",
      bio: "Cultivating critical thinkers and articulate communicators with progressive, learner-led pedagogy.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
     {
      name: "Mr. Manoj Kumar Verma",
      role: "English Faculty",
      categories: ["English"],
      img: "IMG-20250829-WA0000 - Manoj Kumar Verma.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "M.A (English), B.Ed, CTET",
      bio: "Nurturing agile minds and clear voices through inquiry-based, student-centered practice.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
     {
      name: "Mr. Sudhanshu Kumar",
      role: "English Faculty",
      categories: ["English"],
      img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "M.A (English), B.Ed",
      bio: "Shaping reflective thinkers and confident communicators via interactive, student-driven learning.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
     {
      name: "Mrs. Pallavi",
      role: "English Faculty",
      categories: ["English"],
      img: "IMG_20250829_121724 - Pallavi English Classes.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "B.A(Eng), M.A (Education), B.Ed",
      bio: "Advancing fluent thought and expression with modern, learner-centered instruction.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
    {
      name: "Mr. Ajay Pratap Singh",
      role: "English Faculty",
      categories: ["English"],
      img: "IMG20250829115601.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "M.A (English), B.Ed",
      bio: "Advancing critical thinking and expressive fluency through modern, interactive learning.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
    {
      name: "Mr. Anjanne Kumar",
      role: "English Faculty",
      categories: ["English"],
      img: "Anjani .png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "B.A (English), B.Ed",
      bio: "Developing fluent thinkers and communicators through responsive, student-centered learning.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
    {
      name: "Mr. Shambhu Nath Mishra",
      role: "English Faculty",
      categories: ["English"],
      img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "M.A (English), B.Ed",
      bio: "Nurturing readers who think deeply and writers who express fearlessly.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
{
      name: "Mr. Santosh Kr. Jha",
      role: "English Faculty",
      categories: ["English"],
      img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "B.A (English), B.Ed",
      bio: "Where words transform into windows of imagination and understanding.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
    {
      name: "Mrs. Rubi Singh",
      role: "English Faculty",
      categories: ["English"],
      img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "M.A (English), B.Ed",
      bio: "Guiding learners to find their voice and tell their story with power and grace.",
      socials: {linkedin: "#",
        twitter: "#"}
    },


     {
      name: "Mr. Tanveer Alam",
      role: "English Faculty",
      categories: ["English"],
      img: "IMG_20250830_094833 - md.tanveer alam.png",
      badge: { text: "English", colorClass: "bg-blue-600", iconClass: "fa-solid fa-book" },
      degrees: "B.A (English), B.Ed",
      bio: "elping students not just learn English, but live it with confidence.",
      socials: {linkedin: "#",
        twitter: "#"}
    },
   



    // Mathematics
    {
      name: "Mr. Shashi Bhushan Mishra",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "maths n.png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "M.A Maths, B.Ed",
      bio: "Turning abstract numbers into concrete understanding and confidence.",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Mr. Syed Hassan Akhter",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "syeddddd.png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "M.Sc, B.Ed, M.A.",
      bio: "Nurturing logical thinkers who see beauty in every equation.",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Mr. Navin Kumar Singh",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "IMG-20250829-WA0001 - navin singh.png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "M.Sc. (Math), B.Ed.",
      bio: "Turning complex problems into stepping stones of clarity.",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Mr. Kaushal Kishore Thakur",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "M.Sc. (Math), B.Ed, TET.",
      bio: "Guiding curious minds to uncover patterns hidden in numbers.",
      socials: { linkedin: "#", twitter: "#" }
    },
     {
      name: "Mr. Rajan Kumar",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "maths.png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "M.Sc. B.Ed (Maths) CTET",
      bio: "Inspiring learners to see mathematics as the poetry of logic.",
      socials: { linkedin: "#", twitter: "#" }
    },
     {
      name: "Mr. Shashank Poddar",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "SP.png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "M.A, M.A (Edu.), NET, CTET, B.Ed. Maths",
      bio: "Building strong foundations where logic meets imagination.",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Mr. Nand Kishor Chaudhary",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "M.Sc, B.Ed, (Maths)",
      bio: "Transforming equations into tools for real-world exploration.",
      socials: { linkedin: "#", twitter: "#" }
    },
 {
      name: "Mr. Gautam Kr. Misra",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: " Gautam.png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "M.Sc (Math), DIP in Edu, PGBTC (B.Ed)",
      bio: "Helping students find confidence in every calculation.",
      socials: { linkedin: "#", twitter: "#" }
    },
     {
      name: "Mr. Alok Kumar",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "Alok(s).png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "B.Sc., (Maths), B.Ed, CTET, B.TET",
      bio: "Revealing the elegance of order in the language of math.",
      socials: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Mr. Pankaj Kumar Gupta",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "Pankaj .png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "M.Sc., (Math), B.Ed, B.TET",
      bio: "Encouraging minds to solve, reason, and wonder fearlessly.",
      socials: { linkedin: "#", twitter: "#" }
    },

     {
      name: "Mr. Ranjan Kumar",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "Rajan sir .png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "B.Ed, M.Sc.",
      bio: "Shaping thinkers who see possibilities in every problem.",
      socials: { linkedin: "#", twitter: "#" }
    },

    {
      name: "Mrs. Meetu Kumari",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "B.Sc, B.Ed.",
      bio: "Cultivating a love for numbers that sparks lifelong curiosity.",
      socials: { linkedin: "#", twitter: "#" }
    },

     {
      name: "Miss. Sakshi",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "M.Sc, B.Ed",
      bio: "Empowering students to decode the universe through numbers.",
      socials: { linkedin: "#", twitter: "#" }
    },
    
     {
      name: "Mrs. Anuradha Sharma",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "B.Ed., BCA",
      bio: "Opening doors to logic, one theorem at a time.",
      socials: { linkedin: "#", twitter: "#" }
    },

     {
      name: "Mr. Karn Kumar",
      role: "Mathematics Faculty",
      categories: ["Mathematics"],
      img: "karn kumar.png",
      badge: { text: "Mathematics", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-square-root-variable" },
      degrees: "M.Sc. (Math)",
      bio: "Shaping resilient problem-solvers who think beyond formulas.",
      socials: { linkedin: "#", twitter: "#" }
    },
    



//Science
{
  name: "Mr. Nagendra Sharma",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees: "M.Sc (Phy), B.Ed., Dip. in I.S.M",
  bio: "Igniting curiosity to explore the wonders of the universe.",
  socials: { linkedin: "#", facebook: "#" }
},

{
  name: "Mr. Alok Kumar Mishra",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees: "M.Sc (Phy), B.Ed., Dip. in I.S.M",
  bio: "Turning classrooms into laboratories of discovery.",
  socials: { linkedin: "#", facebook: "#" }
},



{
  name: "Mr. Ajit Kumar Singh",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees: "M.Sc (Phy), B.Ed.",
  bio: "Unveiling the science behind everyday miracles.",
  socials: { linkedin: "#", facebook: "#" }
},

{
  name: "Mr. Rama Nand Verma",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees: "M.Sc (Phy), B.Ed.",
  bio: "Inspiring explorers who see knowledge as adventure.",
  socials: { linkedin: "#", facebook: "#" }
},

{
  name: "Mr. Shiv Shankar",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees: "B.Sc (Phy), B.Ed",
  bio: "Bridging theory and reality through hands-on learning.",
  socials: { linkedin: "#", facebook: "#" }
},



{
  name: "Mr. Sudhir Kumar Choubey",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees: "M.Sc, B.Ed.",
  bio: "Nurturing future scientists who dare to ask 'why'.",
  socials: { linkedin: "#", facebook: "#" }
},

{
  name: "Mrs. Supriya Bala",
  role: "Science Faculty",
  categories: ["Science"],
  img: "supriya bala.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees: "M.Sc. (Zoology), B.Ed.",
  bio: "Planting seeds of curiosity that grow into lifelong exploration.",
  socials: { linkedin: "#", facebook: "#" }
},

{
  name: "Mrs. Nilanjana Sharma",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees: "M.Sc. (Chem), B.Ed, CTET, STET",
  bio: "Making science a journey of wonder, not just a subject to study.",
  socials: { linkedin: "#", facebook: "#" }
},


{
  name: "Mr. Ashok Kumar",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees:"M.Sc (Chem), B.Ed",
  bio: "Helping students see not just answers, but the beauty of the process.",
  socials: { linkedin: "#", facebook: "#" }
},

{
  name: "Mr. Jitendra Kumar",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees:"M.Sc., B.Ed. (Chem)",
  bio: "Guiding learners to connect ideas, atoms, and the infinite cosmos.",
  socials: { linkedin: "#", facebook: "#" }
},


{
  name: "Mr. H. L. Pandey",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees:" M.Sc., (Chem), B.Ed",
  bio: "Transforming curiosity into experiments, and experiments into knowledge.",
  socials: { linkedin: "#", facebook: "#" }
},

{
  name: "Mr. Ravi Kumar Mishra",
  role: "Science Faculty",
  categories: ["Science"],
  img: "ravi.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees:"M.Sc., B.Ed",
  bio: "Cultivating thinkers who see questions as the beginning of discovery.",
  socials: { linkedin: "#", facebook: "#" }
},


{
  name: "Mrs. Rashmi Lata",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees:"M.Sc. (Chemistry)",
  bio: "Awakening young minds to the magic of matter and motion.",
  socials: { linkedin: "#", facebook: "#" }
},


{
  name: "Mr. Pramod Kumar ",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees:"B.Sc (Chemistry)",
  bio: "Opening minds to the secrets hidden in nature’s design.",
  socials: { linkedin: "#", facebook: "#" }
},


{
  name: "Mrs. Renu Kumari",
  role: "Science Faculty",
  categories: ["Science"],
  img: "renu rai.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees:"M.Sc. M.A. Ed.",
  bio: "Encouraging explorers who learn by questioning everything.",
  socials: { linkedin: "#", facebook: "#" }
},



{
  name: "Mrs. Anamika Kumari",
  role: "Science Faculty",
  categories: ["Science"],
  img: "IMG-20250830-WA0033~2 - Anamika Kumari.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees:" M.Sc., B. Ed, STET",
  bio: "Transforming wonder into wisdom, one experiment at a time.",
  socials: { linkedin: "#", facebook: "#" }
},



{
  name: "Mrs. Betty Kuruvilla",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees:"B.Sc (Chem.), B.Ed., J.D.C",
  bio: "Revealing the science that powers life, earth, and the stars above.",
  socials: { linkedin: "#", facebook: "#" }
},




{
  name: "Mr. Diwakar Kumar",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees:" M.Sc (Chem.), B.Ed",
  bio: "Building a culture of curiosity where discovery never ends.",
  socials: { linkedin: "#", facebook: "#" }
},



{
  name: "Mrs. Rupam Kumari ",
  role: "Science Faculty",
  categories: ["Science"],
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees:"B.Sc (Zoology), B.Ed.",
  bio: "Helping learners see the extraordinary in the ordinary.",
  socials: { linkedin: "#", facebook: "#" }
},




{
  name: "Mrs. Renu Kri. Sharma",
  role: "Science Faculty",
  categories: ["Science"],
  img: "IMG_20250830_075322 - Renu Sharma- Gyan Niketan.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees:"M.Sc (Bio), B.Ed.",
  bio: "Lighting the spark where imagination meets scientific truth.",
  socials: { linkedin: "#", facebook: "#" }
},


{
  name: "Miss. Aparna Kumari",
  role: "Science Faculty",
  categories: ["Science"],
  img: "IMG-20250830-WA0002 - sakshi.png",
  badge: { text: "Science", colorClass: "bg-green-600", iconClass: "fa-solid fa-flask" },
  degrees:"B.Sc., B.Ed",
  bio: "Teaching that science isn’t about answers—it’s about better questions.",
  socials: { linkedin: "#", facebook: "#" }
},




    // Hindi
    {
      name: "Dr. Baidyanath Mishra",
      role: "Hindi Faculty",
      categories: ["Hindi",""],
      img: "Baidyanath Mishra.png",
      badge: { text: "Hindi", colorClass: "bg-amber-600", iconClass: "fa-solid fa-language" },
      degrees: "MA (Hindi), B.Ed, Sahityacharya, Ph.D",
      bio: "भाषा के माध्यम से संस्कार और संस्कृति का संचार।",
      socials: { linkedin: "#", facebook: "#" }
    },

      {
      name: "Mrs. Kavita Pathak",
      role: "Hindi Faculty",
      categories: ["Hindi",""],
      img: "IMG-20220328-WA0012 - KAVITA PATHAK.png",
      badge: { text: "Hindi", colorClass: "bg-amber-600", iconClass: "fa-solid fa-language" },
      degrees: "M.A (Hindi), B.Ed. STET",
      bio: "भाषा को केवल विषय नहीं, बल्कि जीवन का हिस्सा बनाना।",
      socials: { linkedin: "#", facebook: "#" }
    },


    
      {
      name: "Mr. B.K. Vibhakar",
      role: "Hindi Faculty",
      categories: ["Hindi",""],
      img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
      badge: { text: "Hindi", colorClass: "bg-amber-600", iconClass: "fa-solid fa-language" },
      degrees: "M.A (Hindi), B.Ed, M.A (Edu)",
      bio: "शब्दों की शक्ति से व्यक्तित्व का निर्माण।",
      socials: { linkedin: "#", facebook: "#" }
    },


    
      {
      name: "Mrs. Kumari Madhu",
      role: "Hindi Faculty",
      categories: ["Hindi",""],
      img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
      badge: { text: "Hindi", colorClass: "bg-amber-600", iconClass: "fa-solid fa-language" },
      degrees: " M.A (Hindi), B.Ed",
      bio: "कविता, कहानी और साहित्य के रंगों से जीवन को सजाना।",
      socials: { linkedin: "#", facebook: "#" }
    },


        
      {
      name: "Mrs. Mamta Sinha",
      role: "Hindi Faculty",
      categories: ["Hindi",""],
      img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
      badge: { text: "Hindi", colorClass: "bg-amber-600", iconClass: "fa-solid fa-language" },
      degrees: "M.A., B.Ed., (Ph. D)",
      bio: "हिंदी के माध्यम से सोच और संवेदना को गहराई देना।",
      socials: { linkedin: "#", facebook: "#" }
    },


    
        
      {
      name: "Mrs. Sushma Kumari",
      role: "Hindi Faculty",
      categories: ["Hindi",""],
      img: "Sushama.png",
      badge: { text: "Hindi", colorClass: "bg-amber-600", iconClass: "fa-solid fa-language" },
      degrees: "M.A. (Hindi, Edu), B.Ed",
      bio: "विद्यार्थियों को मातृभाषा से जोड़कर आत्मविश्वास जगाना।",
      socials: { linkedin: "#", facebook: "#" }
    },


    
    
        
      {
      name: "Mrs. Rajni Kumari",
      role: "Hindi Faculty",
      categories: ["Hindi",""],
      img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
      badge: { text: "Hindi", colorClass: "bg-amber-600", iconClass: "fa-solid fa-language" },
      degrees: "B.Ed., M.A. (Persuing), CTET, B.TET",
      bio: "शब्दों के जरिए हृदय और मस्तिष्क दोनों को छूना।",
      socials: { linkedin: "#", facebook: "#" }
    },

       
      {
      name: "Mrs. Jyoti Kumari Sinha",
      role: "Hindi Faculty",
      categories: ["Hindi",""],
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
      badge: { text: "Hindi", colorClass: "bg-amber-600", iconClass: "fa-solid fa-language" },
      degrees: " M.A, B.Ed. CTET, TET",
      bio: "हिंदी के माध्यम से विद्यार्थियों में आत्मा और मातृभूमि से जुड़ाव जगाना।",
      socials: { linkedin: "#", facebook: "#" }
    },

     {
      name: "Mrs. Basbi",
      role: "Hindi Faculty",
      categories: ["Hindi",""],
      img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
      badge: { text: "Hindi", colorClass: "bg-amber-600", iconClass: "fa-solid fa-language" },
      degrees: " M.A. (HINDI), B.Ed, STET",
      bio: "कहानियों से मूल्य, और कविताओं से संवेदनाएँ सिखाना।",
      socials: { linkedin: "#", facebook: "#" }
    },

{
  name: "Dr. Sunil Kumar Pradhan",
  role: "Sanskrit Faculty",
  categories: ["Sanskrit", "Hindi"],
  img: "IMG_20250829_194319 - sunil pradhan.png",
  badge: {
    text: "Sanskrit",
    colorClass: "bg-orange-600",
    iconClass: "fa-solid fa-language" 
  },
  degrees: "M.A. (Sans), Ph.D., NET",
  bio: "संस्कृत के माध्यम से संस्कृति और संस्कारों का संवहन।",
  socials: { linkedin: "#", facebook: "#" }
},


{
  name: "Mr. Sri Ram Dubey",
  role: "Sanskrit Faculty",
  categories: ["Sanskrit", "Hindi"],
  img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
  badge: {
    text: "Sanskrit",
    colorClass: "bg-orange-600",
    iconClass: "fa-solid fa-language" 
  },
  degrees: "M.A., B.Ed",
  bio: "प्राचीन ज्ञान को आधुनिक जीवन से जोड़ने की प्रेरणा।",
  socials: { linkedin: "#", facebook: "#" }
},


{
  name: "Mrs. Anuja Sarraf",
  role: "Sanskrit Faculty",
  categories: ["Sanskrit", "Hindi"],
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: {
    text: "Sanskrit",
    colorClass: "bg-orange-600",
    iconClass: "fa-solid fa-language" 
  },
  degrees: "M.A (Sans), B.Ed",
  bio: "संस्कृत – केवल भाषा नहीं, जीवन की दिशा।",
  socials: { linkedin: "#", facebook: "#" }
},



{
  name: "Mrs. Namita Lily ",
  role: "Sanskrit Faculty",
  categories: ["Sanskrit", "Hindi"],
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: {
    text: "Sanskrit",
    colorClass: "bg-orange-600",
    iconClass: "fa-solid fa-language" 
  },
  degrees: "M.A. (Sanskrit), B.Ed",
  bio: "विद्यार्थियों को वेद, उपनिषद और शास्त्रों की ओर ले जाना।",
  socials: { linkedin: "#", facebook: "#" }
},

{
  name: "Mrs. Anjana Kumari Mishra",
  role: "Sanskrit Faculty",
  categories: ["Sanskrit", "Hindi"],
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: {
    text: "Sanskrit",
    colorClass: "bg-orange-600",
    iconClass: "fa-solid fa-language" 
  },
  degrees: "B.A (Sanskrit), B.Ed",
  bio: "संस्कृत से विज्ञान, अध्यात्म और दर्शन का सेतु बनाना।",
  socials: { linkedin: "#", facebook: "#" }
},


 // Humanities demo
    {
      name: "Mr. Anil Kumar Jha",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "Anil.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: "M.A., B.Ed",
      bio: "Guiding minds to explore culture, society, and human thought.",
      socials: { linkedin: "#", twitter: "#" }
    },


    {
      name: "Mrs. Sangeeta Sharan",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "sangeeta sharan.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: " M.A. (Hist.), B.Ed",
      bio: "Helping students understand the world through history, philosophy, and art.",
      socials: { linkedin: "#", twitter: "#" }
    },

    
    {
      name: "Mr. Santosh Kr",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "skp - Arnav Sharma.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: "M.A. (Eco), M.A. (Edu)",
      bio: "Encouraging empathy, critical thinking, and meaningful reflection.",
      socials: { linkedin: "#", twitter: "#" }
    },

     {
      name: "Barkha kumari",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "barkha2.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: "M.com, M.ed",
      bio: "Linking economic concepts to real life, society, and human behaviour.",
      socials: { linkedin: "#", twitter: "#" }
    },

    

    
    
    {
      name: "Dr. Sujit Kumar Mishra ",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "Screenshot_20250827-124423_Chrome - Sujit Kumar.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: "M.A (History), B.Ed",
      bio: "Inspiring learners to question, interpret, and understand perspectives.",
      socials: { linkedin: "#", twitter: "#" }
    },



    
    
    
    {
      name: "Mrs. Anjali Sinha",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "ANJALI SINHA.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: "M.A. (Geog.), B.Ed",
      bio: "Teaching that knowledge is as much about people as it is about facts.",
      socials: { linkedin: "#", twitter: "#" }
    },


    
    
    {
      name: "Mr. Pawan Kumar Mishra ",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: "M.Sc (Geog.), B.Ed",
      bio: "Fostering curiosity about human stories, societies, and ideas.",
      socials: { linkedin: "#", twitter: "#" }
    },


    
    {
      name: "Mr. Prayag Dutta Jha",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: "M.A B.Ed",
      bio: "Connecting ideas to life, society, and human experience.",
      socials: { linkedin: "#", twitter: "#" }
    },
    
    {
      name: "Mrs. Shobha N. Chaudhary",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "Shobha Choudhary.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: "M.A. (Geog.) B.Ed.",
      bio: "Opening doors to philosophy, literature, and the arts of understanding.",
      socials: { linkedin: "#", twitter: "#" }
    },

    
    
    {
      name: "Mr. Shambhu",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "https://cdn-icons-png.flaticon.com/512/5310/5310895.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: "M.A., (Geography), N.E.T, B.Ed",
      bio: "Helping students find meaning in culture, language, and thought.",
      socials: { linkedin: "#", twitter: "#" }
    },


    
    
    {
      name: "Mrs. Anju Sinha ",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "20250320_091021_2_-_Anju_Sinha-removebg-preview.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: "M.A. B.Ed., PGDCA",
      bio: "Shaping thinkers who appreciate both intellect and humanity.",
      socials: { linkedin: "#", twitter: "#" }
    },


    
    
    {
      name: "Mrs. Pammi Kumari ",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "pammi kumari.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: "M.A (History), B.Ed",
      bio: "Exploring the human journey through culture and ideas.",
      socials: { linkedin: "#", twitter: "#" }
    },


    {
      name: "Mrs. Kumari Kalpana",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "Kumari Kalpana.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: "M.A (Psychology), B.Ed, DCA, CTET, BTET",
      bio: "Teaching students to see the world with empathy and reason.",
      socials: { linkedin: "#", twitter: "#" }
    },


    
    {
      name: "Mrs. Shobha Rani",
      role: "Humanities Faculty",
      categories: ["Humanities"],
      img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
      badge: { text: "Humanities", colorClass: "bg-rose-600", iconClass: "fa-solid fa-book-open" },
      degrees: "M.A. B.Ed., BTET",
      bio: "Guiding learners to connect history, art, and society.",
      socials: { linkedin: "#", twitter: "#" }
    },

    // AI
    {
      name: "Mrs. Roji ",
      role: "AI / Computer Science Faculty",
      categories: ["AI"],
      img: "Roji Jha.png",
      badge: { text: "AI", colorClass: "bg-fuchsia-600", iconClass: "fa-solid fa-robot" },
      degrees: "M.Sc., M.C.A (STET)",
      bio: "Shaping minds to think intelligently with machines.",
      socials: { linkedin: "#", twitter: "#" }
    },

    {
      name: "Mr. Waris Jamal",
      role: "AI / Computer Science Faculty",
      categories: ["AI"],
      img: "waris jamal.png",
      badge: { text: "AI", colorClass: "bg-fuchsia-600", iconClass: "fa-solid fa-robot" },
      degrees: "B.Sc. (Chem.), MCSE, DOEACC O level, MCA",
      bio: "Bridging human creativity and artificial intelligence.",
      socials: { linkedin: "#", twitter: "#" }
    },

    {
      name: "Mr. Lalit Kumar Pathak",
      role: "AI / Computer Science Faculty",
      categories: ["AI"],
      img: "lalit kumar Pathak.png",
      badge: { text: "AI", colorClass: "bg-fuchsia-600", iconClass: "fa-solid fa-robot" },
      degrees: "MCA, B.Sc. (Math)",
      bio: "Guiding students to design the future with AI.",
      socials: { linkedin: "#", twitter: "#" }
    },

    
    {
      name: "Mr. Sanjay Sharma",
      role: "AI / Computer Science Faculty",
      categories: ["AI"],
      img: "Sanjay Sharma.png",
      badge: { text: "AI", colorClass: "bg-fuchsia-600", iconClass: "fa-solid fa-robot" },
      degrees: "MCA",
      bio: "Teaching that algorithms are not just code, but possibilities.",
      socials: { linkedin: "#", twitter: "#" }
    },


    
    {
      name: "Mr. Amit Kumar Singh",
      role: "AI / Computer Science Faculty",
      categories: ["AI"],
      img: "amit kumar.png",
      badge: { text: "AI", colorClass: "bg-fuchsia-600", iconClass: "fa-solid fa-robot" },
      degrees: "BCA, MCA",
      bio: "Inspiring innovators to blend logic with imagination.",
      socials: { linkedin: "#", twitter: "#" }
    },


    
    {
      name: "Mr. Anand Kumar Pandey ",
      role: "AI / Computer Science Faculty",
      categories: ["AI"],
      img: " Anand Pandey.jpg",
      badge: { text: "AI", colorClass: "bg-fuchsia-600", iconClass: "fa-solid fa-robot" },
      degrees: "MCA",
      bio: "Preparing learners for a world powered by intelligence, natural and artificial.",
      socials: { linkedin: "#", twitter: "#" }
    },


    
    {
      name: "Mr. Animesh Kumar",
      role: "AI / Computer Science Faculty",
      categories: ["AI"],
      img: " Animesh kumar.png",
      badge: { text: "AI", colorClass: "bg-fuchsia-600", iconClass: "fa-solid fa-robot" },
      degrees: "BCA, B.Ed, CTET, STET",
      bio: "Helping students see AI as a tool for humanity, not a replacement.",
      socials: { linkedin: "#", twitter: "#" }
    },


    {
      name: "Mr. Sri Krishna",
      role: "AI / Computer Science Faculty",
      categories: ["AI"],
      img: "sri krishna.png",
      badge: { text: "AI", colorClass: "bg-fuchsia-600", iconClass: "fa-solid fa-robot" },
      degrees: "MCA, B.Ed.",
      bio: "Guiding students to harness AI as an ally for humanity, not a substitute for it",
      socials: { linkedin: "#", twitter: "#" }
    },
    
    //Music 
    
{
      name: "Mr. Shankar Sharan Singh",
      role: "Music",
      categories: ["AI"],
      img: "ss.png",
      badge: { text: "Music", colorClass: "bg-fuchsia-600", iconClass: "fa-solid fa-music" },
      degrees: "M.A (Music), STET",
      bio: "Guiding students to find their unique voice in music.",
      socials: { linkedin: "#", twitter: "#" }
    },

        
{
      name: "Mr. Deepak Kr. Mishra",
      role: "Music",
      categories: ["AI"],
      img: "Deepak Mishra.png",
      badge: { text: "Music", colorClass: "bg-fuchsia-600", iconClass: "fa-solid fa-music" },
      degrees: "B.Ed, M.A (Edu)",
      bio: "Turning passion into harmony, one note at a time.",
      socials: { linkedin: "#", twitter: "#" }
    },
   

    // Sports & Arts demo


     {
      name: "Mr. Anindyo Banerjee",
      role: "Sports Coach",
      categories: ["Sports Arts"],
      img: "Banerjee.png",
      badge:  { text: "Sports", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-basketball" },
      degrees: "B.A, Eng (Hons), B.P.Ed, IRPM, M.A. (Phy. Edu.)",
      bio: "Shaping champions through discipline, dedication, and teamwork.",
      socials: { instagram: "#", facebook: "#" }
    },

     {
      name: "Mr. Mukesh Kr. Rahul",
      role: "Sports Coach",
      categories: ["Sports Arts"],
      img: "mkrahul.png",
      badge:  { text: "Sports", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-basketball" },
      degrees: "BPEd",
      bio: "Inspiring students to push limits and break barriers.",
      socials: { instagram: "#", facebook: "#" }
    },


    
     {
      name: "Mr. Brajesh Kr. Singh",
      role: "Sports Coach",
      categories: ["Sports Arts"],
      img: "b.png",
      badge:  { text: "Sports", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-basketball" },
      degrees: "BPED, M.A (His) Ancient & Modern",
      bio: "Teaching that sports build character as much as skill.",
      socials: { instagram: "#", facebook: "#" }
    },

       {
      name: "Mr. Tariq Aziz ",
      role: "Sports Coach",
      categories: ["Sports Arts"],
      img: "Tariq Aziz.png",
      badge:  { text: "Sports", colorClass: "bg-indigo-600", iconClass: "fa-solid fa-basketball" },
      degrees: "S.S.C.E, M.P.E., MS (Athletics), A.N.O. (Air-Wing), NCC",
      bio: "Guiding young athletes to achieve their personal best",
      socials: { instagram: "#", facebook: "#" }
    },


    {
      name: "Mrs. Sangeeta Kumari",
      role: "Art Faculty",
      categories: ["Sports Arts"],
      img: "1000387226 - CRAZY ART Sangita kumari.png",
      badge: { text: "Art", colorClass: "bg-emerald-600", iconClass: "fa-solid fa-palette" },
      degrees: "B.F.A, M.F.A TET",
      bio: "Guiding students to express themselves through color and form.",
      socials: { instagram: "#", facebook: "#" }
    },


      {
      name: "Mrs. Santosh",
      role: "Art Faculty",
      categories: ["Sports Arts"],
      img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
      badge: { text: "Art", colorClass: "bg-emerald-600", iconClass: "fa-solid fa-palette" },
      degrees: "B.A (Geo, Art), B.Ed, N.T.T",
      bio: "Turning imagination into masterpieces, one brushstroke at a time.",
      socials: { instagram: "#", facebook: "#" }
    },



    //Commerce 

{
  name: "Mr. Piush Ranjan",
  role: "Commerce Faculty",
  categories: ["Commerce"],  
  img: "piush ranjan.png",
  badge: { 
    text: "Commerce", 
    colorClass: "bg-indigo-600", 
    iconClass: "fa-solid fa-briefcase" 
  },
  degrees: "B.Com, B.Ed., C.S. (Inter), JEST (Scorer), P.G.D.R.P",
  bio: "Guiding students to understand the language of business.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},

//Primary

{
  name: "Mrs. Nomita Kumari",
  role: "Primary Faculty",
  categories: ["Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "M.A. (Hindi), B.Ed, BTET, CTET",
  bio: "Nurturing young minds with patience, care, and joy.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},


{
  name: "Mrs. Kiran Kumari Thakur",
  role: "Primary Faculty",
  categories: ["Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "B.Com, B.Ed",
  bio: "Helping children take their first steps in learning.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},



{
  name: "Mrs. Rupam Kumari",
  role: "Primary Faculty",
  categories: ["Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "M.Sc. (Zoology), M.A. (Edu.), BTET",
  bio: "Building strong foundations for lifelong curiosity",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},




{
  name: "Mrs. Mohita Singh",
  role: "Primary Faculty",
  categories: ["Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "M.A. (Edu.), B.Ed.",
  bio: "Guiding little learners with big dreams.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},



{
  name: "Mrs. Rani Ranjan",
  role: "Primary Faculty",
  categories: ["Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "M.A.(English, Sociology), B.Ed.",
  bio: "Turning classrooms into gardens of imagination.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},



{
  name: "Mrs. Jyotsana",
  role: "Primary Faculty",
  categories: ["Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "M.Sc., (Math), B.Ed",
  bio: "Inspiring confidence, kindness, and creativity from the start.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},



{
  name: "Mr. Subhosh Singh",
  role: "Primary Faculty",
  categories: ["Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "B.Sc., (Math), B.Ed",
  bio: "Teaching not just lessons, but values for life.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},




{
  name: "Mrs. Sheetal Khurana",
  role: "Primary Faculty",
  categories: ["Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "B.A (Psychology), B.Ed",
  bio: "Encouraging every child to shine in their own way.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},



{
  name: "Mrs. Pratibha Singh",
  role: "Primary Faculty",
  categories: ["Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "B.Sc., (Phy), D.Led, B.Ed.",
  bio: "Fostering curiosity, playfulness, and a love for learning.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},




{
  name: "Mrs. Sima Kumari",
  role: "Primary Faculty",
  categories: ["Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "M.A., (Sans), B.Ed",
  bio: "Shaping the future by guiding the youngest hearts.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},




{
  name: "Miss. Ananta Sinha",
  role: "Primary Faculty",
  categories: ["Primary"],   
  img: "Ananta Sinha.png",
  badge: { 
    text: "Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "B.A (History), B.Ed",
  bio: "Lighting the spark of wonder in every child’s heart.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},



  

  //Pre-Primary
  
{
  name: "Mrs. Mridula Prasad",
  role: "Pre-Primary Faculty",
  categories: ["Pre-Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Pre-Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "M.Sc. (Bot), B.Ed.",
  bio: "Guiding tiny hands and big dreams with care.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},



{
  name: "Mrs. Shabnam Meraj",
  role: "Pre-Primary Faculty",
  categories: ["Pre-Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Pre-Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "B.A. (PSY) Hons. NTT, B.Ed",
  bio: "Turning every little moment into a lesson of joy.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},


{
  name: "Mrs. Ankita Snehi",
  role: "Pre-Primary Faculty",
  categories: ["Pre-Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Pre-Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "M.A. (Sociology), B.Ed)",
  bio: "Building the first bricks of curiosity and confidence.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},



{
  name: "Mrs. Rupa Singh",
  role: "Pre-Primary Faculty",
  categories: ["Pre-Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Pre-Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: " B.A. (Sociology), B.Ed, NTT",
  bio: "Helping children learn through stories, play, and laughter.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},



{
  name: "Mrs. Nidhi Agarwal",
  role: "Pre-Primary Faculty",
  categories: ["Pre-Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Pre-Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "B.A. (Eco), B.Ed.",
  bio: "Planting seeds of kindness, creativity, and wonder.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},





{
  name: "Miss. Prabha Suman",
  role: "Pre-Primary Faculty",
  categories: ["Pre-Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Pre-Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "B.Tech. (ECE), B.Ed, CTET, STET",
  bio: "Nurturing little learners with love and patience.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},



{
  name: "Ms. Runi Kumari",
  role: "Pre-Primary Faculty",
  categories: ["Pre-Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Pre-Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "B.A. (PSYCHOLOGY) Hons. B.Ed.",
  bio: "Creating a safe, happy space for early exploration.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},



{
  name: "Mrs. Nikita Singh",
  role: "Pre-Primary Faculty",
  categories: ["Pre-Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Pre-Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees: "M.A. (English), B.Ed",
  bio: "Inspiring joy in every rhyme, rhyme, and smile.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},





{
  name: "Miss. Nidhi Kumari",
  role: "Pre-Primary Faculty",
  categories: ["Pre-Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Pre-Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees:"M.A (English), B.Ed, CTET",
  bio: "Helping children see learning as play, and play as learning.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},




{
  name: "Mrs. Richa Mishra",
  role: "Pre-Primary Faculty",
  categories: ["Pre-Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Pre-Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees:"B.A, Eng (Hons), B.Ed., CTET",
  bio: "Shaping the earliest steps toward a lifelong journey of growth.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},



{
  name: "Mrs. Varsha Mishra",
  role: "Pre-Primary Faculty",
  categories: ["Pre-Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Pre-Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees:"M.A. (English), B.Ed, CTET",
  bio: "Holding little hands to lead them into the world of learning.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},




{
  name: "Ms. Diksha sandilya",
  role: "Pre-Primary Faculty",
  categories: ["Pre-Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Pre-Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees:"M.A. (Hindi), B.Ed, DCA",
  bio: "Making the first school days full of love, laughter, and discovery.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},




{
  name: "Mrs. Punam Mehrotra",
  role: "Pre-Primary Faculty",
  categories: ["Pre-Primary"],   
  img: "https://cdn-icons-png.flaticon.com/512/206/206897.png",
  badge: { 
    text: "Pre-Primary", 
    colorClass: "bg-pink-500", 
    iconClass: "fa-solid fa-school" 
  },
  degrees:"M.A. (Hindi), B.Ed",
  bio: "Lighting tiny sparks of curiosity that grow into lifelong learning.",
  socials: { 
    instagram: "#", 
    facebook: "#" 
  }
},



  ];


  function createFacultyCard(t) {
    const card = document.createElement("div");
    card.className = "faculty-card group relative rounded-2xl bg-white/60 backdrop-blur-xl shadow-xl overflow-hidden ring-1 ring-gray-200 hover:ring-secondary/30 transition-all duration-500";
    card.setAttribute("data-category", t.categories.join(", "));

    const spot = document.createElement("div");
    spot.className = "absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition duration-500";
    spot.style.background = "radial-gradient(70% 60% at 50% 0, rgba(245,158,11,0.25), rgba(59,130,246,0.12) 60%, transparent 100%)";
    card.appendChild(spot);

    const imgWrap = document.createElement("div");
    imgWrap.className = "relative";
    const img = document.createElement("img");
    img.src = t.img || "faculty-english.jpg";
    img.alt = t.name;
    img.className = "w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110";
    imgWrap.appendChild(img);

    const glare = document.createElement("span");
    glare.className = "absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-700";
    imgWrap.appendChild(glare);

    const badgeWrap = document.createElement("div");
    badgeWrap.className = "absolute top-4 left-4";
    const badge = document.createElement("span");
    badge.className = `inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${t.badge.colorClass} text-white shadow backdrop-blur-md`;
    const badgeIcon = document.createElement("i");
    badgeIcon.className = t.badge.iconClass;
    badge.appendChild(badgeIcon);
    badge.appendChild(document.createTextNode(" " + t.badge.text));
    badgeWrap.appendChild(badge);
    imgWrap.appendChild(badgeWrap);

    card.appendChild(imgWrap);

    const content = document.createElement("div");
    content.className = "p-6";

    const h3 = document.createElement("h3");
    h3.className = "text-xl font-bold text-gray-900";
    h3.textContent = t.name;

    const role = document.createElement("p");
    role.className = "text-secondary font-semibold";
    role.textContent = t.role;

    const bio = document.createElement("p");
    bio.className = "mt-3 text-gray-600";
    bio.textContent = t.bio;

    const bottom = document.createElement("div");
    bottom.className = "mt-4 flex items-center justify-between";

    const deg = document.createElement("div");
    deg.className = "flex items-center gap-2 text-xs text-gray-500";
    const degPill = document.createElement("span");
    degPill.className = "inline-flex items-center gap-1 px-2 py-1 bg-gray-100 rounded-full";
    const cap = document.createElement("i");
    cap.className = "fa-solid fa-graduation-cap text-purple-500";
    degPill.appendChild(cap);
    degPill.appendChild(document.createTextNode(" " + (t.degrees || "")));
    deg.appendChild(degPill);

    const socials = document.createElement("div");
    socials.className = "flex items-center gap-3";

    function socialBtn(href, iconClass, label) {
      if (!href) return null;
      const a = document.createElement("a");
      a.className = "social-btn";
      a.href = href;
      a.target = "_blank";
      a.setAttribute("aria-label", label);
      const i = document.createElement("i");
      i.className = iconClass;
      a.appendChild(i);
      return a;
    }

    const ln = socialBtn(t.socials?.linkedin, "fab fa-linkedin", "LinkedIn");
    const tw = socialBtn(t.socials?.twitter, "fab fa-twitter", "Twitter");
    const ig = socialBtn(t.socials?.instagram, "fab fa-instagram", "Instagram");
    const fb = socialBtn(t.socials?.facebook, "fab fa-facebook", "Facebook");
    [ln, tw, ig, fb].forEach(btn => btn && socials.appendChild(btn));

    bottom.appendChild(deg);
    bottom.appendChild(socials);

    content.appendChild(h3);
    content.appendChild(role);
    content.appendChild(bio);
    content.appendChild(bottom);

    // extra padding to match original structure
    const pad = document.createElement("div");
    pad.className = "px-6 pb-6";

    card.appendChild(content);
    card.appendChild(pad);

    return card;
  }

  function renderFaculty(list, mountSelector = "#faculty-grid", { replace = false } = {}) {
    const mount = document.querySelector(mountSelector);
    if (!mount) return;
    if (replace) mount.innerHTML = "";
    const frag = document.createDocumentFragment();
    list.forEach(t => frag.appendChild(createFacultyCard(t)));
    mount.appendChild(frag);
  }

  function bindCardInteractions(scope = document) {
    scope.querySelectorAll(".faculty-card").forEach(card => {
      card.addEventListener("mousemove", e => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        card.style.setProperty("--mx", `${x}px`);
        card.style.setProperty("--my", `${y}px`);
        const rx = ((y / r.height) - 0.5) * -6;
        const ry = ((x / r.width) - 0.5) * 6;
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      });
      card.addEventListener("mouseleave", () => {
        card.style.transform = "none";
      });
    });
  }

  // Filters (kept same logic as attached file)
  function initFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    function setActive(btn) {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    }
    function applyFilter(filter) {
      const f = filter.toLowerCase().trim();
      const cards = document.querySelectorAll(".faculty-card");
      cards.forEach(card => {
        const raw = card.getAttribute("data-category") || "";
        const categories = raw.split(",").map(s => s.toLowerCase().trim());
        const show = (f === "all") || categories.includes(f);
        card.style.display = show ? "" : "none";
      });
    }
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        setActive(btn);
        applyFilter(btn.dataset.filter || "All");
      });
    });
    // initial
    applyFilter("All");
  }

  // Navbar/sub-navbar/misc interactions (minimal subset to preserve UX feel)
  function initNavbarEnhancements() {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbar.style.transform = "translateY(0)";
        navbar.style.opacity = "0.95";
        navbar.querySelector(".bg-white\\/95")?.classList?.add("shadow-xl");
      } else {
        navbar.style.transform = "translateY(0)";
        navbar.style.opacity = "1";
        navbar.querySelector(".bg-white\\/95")?.classList?.remove("shadow-xl");
      }
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("mouseenter", function(){ this.style.transform = "translateY(-2px)"; });
      link.addEventListener("mouseleave", function(){ this.style.transform = "translateY(0)"; });
    });

    const subNavbar = document.getElementById("sub-navbar");
    const aboutLink = document.querySelector('a[href="about.html"]');
    if (aboutLink) {
      aboutLink.addEventListener("click", e => {
        e.preventDefault();
        if (subNavbar.classList.contains("hidden")) {
          subNavbar.classList.remove("hidden");
          setTimeout(() => {
            subNavbar.style.opacity = "1";
            subNavbar.style.transform = "translateY(0)";
          }, 10);
        } else {
          subNavbar.style.opacity = "0";
          subNavbar.style.transform = "translateY(-4px)";
          setTimeout(() => subNavbar.classList.add("hidden"), 300);
        }
      });
    }

    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navMenu = document.getElementById("nav-menu");
    if (mobileMenuBtn && navMenu) {
      mobileMenuBtn.addEventListener("click", () => {
        mobileMenuBtn.classList.toggle("active");
        if (navMenu.classList.contains("hidden")) {
          navMenu.classList.remove("hidden");
          navMenu.style.opacity = "0";
          navMenu.style.transform = "translateY(-10px)";
          setTimeout(() => {
            navMenu.style.opacity = "1";
            navMenu.style.transform = "translateY(0)";
          }, 10);
        } else {
          navMenu.style.opacity = "0";
          navMenu.style.transform = "translateY(-10px)";
          setTimeout(() => navMenu.classList.add("hidden"), 300);
        }
        const spans = mobileMenuBtn.querySelectorAll("span");
        if (mobileMenuBtn.classList.contains("active")) {
          spans.style.transform = "rotate(45deg) translate(5px,5px)";
          spans[2].style.opacity = "0";
          spans[1].style.transform = "rotate(-45deg) translate(7px,-6px)";
        } else {
          spans.style.transform = "none";
          spans[2].style.opacity = "1";
          spans[1].style.transform = "none";
        }
      });
    }

    // Logo tilt
    const logo = document.getElementById("site-logo");
    if (logo && window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
      const maxTilt = 12, scale = 1.04;
      const handleMove = e => {
        const rect = logo.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const pctX = (x / rect.width) * 2 - 1;
        const pctY = (y / rect.height) * 2 - 1;
        const rotateY = pctX * maxTilt;
        const rotateX = -pctY * maxTilt;
        logo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
      };
      const reset = () => { logo.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)"; };
      logo.addEventListener("mousemove", handleMove);
      logo.addEventListener("mouseleave", reset);
    }

    // Parallax for floating elements
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset;
      document.querySelectorAll(".floating-element").forEach((el, i) => {
        const speed = 0.5 + i * 0.1;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderFaculty(teachers, "#faculty-grid", { replace: true });
    bindCardInteractions();
    initFilters();
    initNavbarEnhancements();
  });

  // ====== DOM elements ======
  const chatBody = document.querySelector(".chat-body");
  const messageInput = document.querySelector(".message-input");
  const sendMessage = document.querySelector("#send-message");
  const fileInput = document.querySelector("#file-input");
  const fileUploadWrapper = document.querySelector(".file-upload-wrapper");
  const fileCancelButton = fileUploadWrapper.querySelector("#file-cancel");
  const chatbotToggler = document.querySelector("#chatbot-toggler");
  const closeChatbot = document.querySelector("#close-chatbot");
  const chatbotIcon = document.querySelector("#chatbot-icon");

  // Optional: keep for date display
  function getCurrentDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const year = today.getFullYear();
    return `${day}.${month}.${year}`;
  }
  console.log("CURRENT DATE:", getCurrentDate());

  // ====== Gemini API (with Google Search grounding) ======
  const API_KEY = "AIzaSyBnZytM0ysSvVAJoNs0Oq5YHGLpFn_tWi0";
  const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`;

  const chatHistory = [
    {
      role: "user",
      parts: [
        {
          text: `You are Gyanis AI — the official AI assistant of **Gyan Niketan Senior Secondary School**, located at Vitthal Vihar Complex, Gola Road, Patna – 801503 (Affiliation No: 330010).
        
  GREETING PROTOCOL:
  -In greeting lines, the name must show as Gyanis AI.
  -Use the greeting only when a user sends a greeting.
  -Accept all greatings, including "hi", "hello", "hey", "good morning", "good afternoon", "good evening", "good night", "greetings", "namaste", etc.
  -Respond with a warm, friendly greeting that includes your name and offers assistance.
  -Do not repeat the greeting again unless the user requests the welcome message.
  - Track conversation state to prevent duplicate greetings
  - If the user asks for the welcome message again, provide it once more
  -Each sentence should not exceed 30-40 words in length.
  -use ist time zone India for any time-related queries
  - Use simple English; Hindi only when necessary for clarity.
  - Avoid slang, idioms, or complex phrases.
  - Keep responses brief and to the point.

  -Write responses with concise, clear sentences.

  -Avoid run-on sentences and excessive detail in individual sentences.

  -Maintain readability and coherence within these constraints.


  LANGUAGE PROTOCOL:
  - Default communication language: English
  - Continue in English unless user explicitly types in another language
  - When user switches to Hindi/other languages, adapt and respond in that language
  - Maintain language consistency within each response
  - Support bilingual conversations when contextually appropriate
  -If an answer is not available in the model, immediately perform a Google search within one second to fetch current, reliable information.



        You represent the legacy of:
        - **Founded in the year 1986** by **Padma Shree Acharya Kunal Kishore**, a retired IPS officer and dedicated philanthropist.
        - **Administrator**: Mrs. **Mrs. Anita Kunal**
        - **Director**: Mr. **Sayan Kunal**
        - **Principal**: Mr. **Shailendra Mohan Jha**
        **Vice-Principal**: Mr. **Amit Kumar**
        **Vice-Principal**: Mrs. **Mrs. Ranjana**
        - **Head Boy**: **Mayank Priyedarshy**
        **Always remember that the website was designed and developed by Udit Raj, Aryan Raj, Aadyant Bharti, and Anant Kumar of Gyan Niketan. Whenever users ask about the creators, developers, contributors, or the source of the website, respond with: "This website was designed and developed by Udit Raj, Aryan Raj, Aadyant Bharti, and Anant Kumar of Gyan Niketan.**
        **Developer of Gyanis AI**: ***Designed and developed by Udit Raj of Gyan Niketan.**
        The model name is Gyanis AI, an LLM developed by Udit Raj of Gyan Niketan.

        🕒 **School Timings**:
        - **Classes 1 to 10**: 8:20 AM to 2:55 PM
        - **Classes 11 & 12**: 7:45 AM to 11:50 AM
        - **LKG & UKG**: 10:00 AM to 1:30 PM
        
        🏫 **Co-education Policy**:
        - **LKG to Class 2** and **Classes 11 & 12** are **co-educational**, admitting both boys and girls.
        
          
        
        🏫 **Facilities Include**:
        - **AI & Robotics Lab**, **Science, Math, Language Labs**
        - **Digital Classrooms**, **Auditorium**, **Eco-campus**
        - **Library**, **Infirmary**, **Playgrounds**, **Transport Service**
        
        📬 **Contact Info**:
        - **Email**: gnspatna@rediffmail.com  
        - **Phone**: 06115–235117 / 235525  
        - **Address**: Vitthal Complex, Ranjan Path, Gola Road, Danapur Cantt., Patna – 801503
        
        🧠 **Tone & Personality**:
        - Speak with wisdom, like a senior mentor.
        - Be supportive, informative, and uphold values like **discipline**, **academic excellence**, and **integrity**.
        - Use simple English, with Hindi only when helpful.
        - Avoid emojis unless they add warmth.
        
        🎯 **Your Role**:
        - Assist with Class 10 and Class 12 CBSE guidance, school events, schedules, routines, and school rules.
        - When students upload homework/projects, give helpful, focused feedback.
        - If unsure, advise contacting school staff or authorities respectfully.
        
        **MVV Nyas**
        About MVV Nyas — The MVV Nyas is the esteemed governing and trust body of Gyan Niketan School. Comprising distinguished leaders and visionaries, it provides strategic direction, policy guidance, and unwavering support for the school's growth and excellence.
        Founder: Padma Shree Acharya Kunal Kishore
        Members:
        
        President: Shri Jiya Lal Arya, I.A.S (Retd.)
        
        Secretary: Prof. (Mrs.) Kavita Srivastava — Philanthropist & Educationist
        
        Member: Mrs. Anita Kunal — Philanthropist & Educationist
        
        Member: Shri Mithlesh Kumar, I.A.S (Retd.)
        
        Member: Dr. Imtiaz Ahmed — Former Director, Khudabaksh Library
        
        Member: Lt. Gen. A. K. Chaudhary (Retd.)
        
        Contributions:
        MVV Nyas members play a pivotal role in providing strategic leadership, shaping educational policies, enhancing infrastructure, and fostering an environment of academic excellence.
        
        Mission Alignment:
        Guided by the vision of Padma Shree Acharya Kunal Kishore, the founder of Gyan Niketan School, MVV Nyas upholds the belief that Gyan Niketan is an outstanding, result-oriented institution for human resource development — a school of national repute, distinguished by its commitment to holistic growth and excellence.
        
        
  ** How to Get Admission in Gyan Niketan, Patna**:
  Collect the Admission Form

  Visit the school office during working hours (generally 9:00 AM – 2:00 PM).

  Or check the official school website for an online form (if available).

  Fill the Form & Attach Documents

  Complete all required details accurately.

  Attach photocopies of:

  Birth certificate

  Previous school report card (if applicable)

  Passport-size photographs

  Transfer certificate (for students from other schools)

  Submit the Form

  Submit it to the admission desk before the last date mentioned in the notice/prospectus.

  Pay the registration/admission test fee (if applicable).

  Entrance Test / Interview

  For certain classes, students may have to appear for an admission test or an interview.

  Prepare according to the syllabus shared by the school.

  Selection & Confirmation

  Selected candidates will be informed via notice board, phone, or school website.

  Pay the admission fees within the given deadline to secure your seat.

  Final Admission

  Submit original documents for verification.

  Collect the student ID card, books, and uniform details.




  **Gyan Niketan, Patna — School Dress Code Guidelines**:
  For Classes 1 to 12 (Boys)

  Monday to Friday: Pitch yellow shirt, black trousers, black shoes.

  Saturday: White House T-shirt, white trousers, white shoes.

  For LKG & UKG (Boys)

  Monday to Friday: Red shirt, white-and-black striped trousers, black shoes.

  Saturday: Reddish-brown T-shirt, white trousers, white shoes.

  Important Notes

  Uniform must be clean, well-ironed, and worn neatly every day.

  Shoes must be polished, and shirts should be tucked in.

  Socks must match the uniform for all classes

  Monday–Friday: Black socks

  Saturday: White socks




  **Withdrawal Rules:**:
  How to apply:

  The parent or guardian must give a written application asking for a Transfer Certificate (TC).

  Notice period:

  You must give 1 clear calendar month’s notice before leaving.

  If you can’t give a month’s notice, you have to pay 1 month’s fees instead.

  Example:

  If you want your child to leave on 30th September, you should submit the application on or before 31st August.

  If you submit it on 15th September, you must pay September’s fees in full (and possibly October, depending on the date).

  Special rule for Class XI students:

  If you apply to withdraw after 31st August, you must pay the fees for the entire academic session (the whole year), not just for the remaining months.

  Example:

  Session runs from April to March.

  If you submit the withdrawal application for a Class XI student on 10th September, you must pay fees for April to March (the full year), even if the student leaves in September.




  **Boarding Facility:**:
  The school has hostel facilities for students from Nursery to Class XII.

  The hostel is in a large, open, pollution-free area, providing a safe and healthy environment.

  It offers a comfortable and caring atmosphere, like a “home away from home.”

  Nutritious and tasty food is served, with a different menu every day.

  On holidays and festivals, students can request their favorite dishes.

  Food is cooked under strict hygiene by experienced cooks.

  The hostel focuses on overall growth and development of students — both in studies and personal life.




  **Infrastructure & Facilities:**:
  Classrooms

  Bright, spacious, and well-ventilated with plenty of natural light.

  Equipped with modern teaching tools.

  Comfortable seating as per CBSE guidelines.

  Laboratories & Activity Rooms

  Fully equipped Physics, Chemistry, and Biology labs.

  Well-maintained Social Science lab.

  Computer labs with the latest hardware and software.

  English Language lab to improve communication skills.

  Library

  Two libraries — one for juniors, one for seniors.

  Large collection of books, journals, newspapers, magazines, and online resources.

  Quiet and comfortable reading areas.

  Sports & Games

  Trained and experienced physical education teachers.

  Large playgrounds for outdoor games: cricket, football, basketball, athletics, etc.

  Indoor games: table tennis, badminton, etc.

  Regular sports events and competitions.

  Other Facilities

  Large auditorium for cultural events and performances.

  Canteen serving healthy and hygienic food.

  Medical room with trained staff for basic and emergency care.

  Safe campus with CCTV surveillance.

  Security staff managing entry, exit, and safety.

  Stationery shop with books, notebooks, and supplies.

  Transport

  Well-maintained CNG buses and vans for day scholars, covering all parts of the city.

  GPS-enabled vehicles so parents can track their child’s bus.

  Experienced and trained drivers.





  **Academics :**:
  Core of the curriculum: Teaching is planned and systematic, tailored to the needs of students in different classes.

  Classes offered: Nursery to Senior Secondary (Class XII).

  Campus structure:

  Large campus with spacious buildings.

  Three separate blocks for Junior, Middle, and Senior sections, each designed for effective learning.

  Optional subjects for Secondary & Senior Secondary:

  Painting

  Legal Studies

  Applied Mathematics

  Computer Science

  Physical Education

  Information Practices

  Sanskrit

  Economics

  Hindi, etc.

  Achievements:

  Established in 1986.

  Ranked among the best schools in the state.

  Students have excelled in both academics and extracurricular activities.

  Produced state, regional, and national toppers.

  Current strength: Over 3300 students in the 2025–2026 session.

  Recent change: Co-education introduced in Senior Secondary and Primary sections — received positively.



  **Vision:**:
  Provide the city and nearby areas with a school that not only gives the best education but also focuses on overall growth — physical, mental, and spiritual.

  Teach children to value morals and respect all religions.

  Create a holistic learning environment where students become academically strong, socially responsible, and technologically skilled global citizens.

  Encourage excellence, creativity, critical thinking, teamwork, and innovation among students.

  Instill in students the best of Indian culture, patriotism, and dedication to serve the nation.

  Help students develop discipline, purity, and balance so they can achieve knowledge, wisdom, and success.


  **List of holidays:**:

  1. Ram Navami on 6.04.2025 (Sunday)
  2.Mahavir Jayanti on 10.04.2025 (Thursday)
  3.Ambedkar Jayanti on 14.04.2025 (Monday)
  4.Good Friday on 18.04.2025 (Friday)
  5.Budha Purnima on 12.05.2025 (Monday)
  6.EID-UL-ZOHA on 7.06.2025 (Saturday)
  7.Muharram on 6.07.2025 (Sunday)
  8.Raksha Bandhan on 9.08.2025 (Saturday)
  9.Gandhi Jayanti on 2.10.2025 (Thursday)
  10.Guru Nanak Jayanti & Kartik Purnima on 5.11.2025 (Wednesday)
  11.Christmas on 25.12.2025 (Thursday)
  12.Makar Sankranti on 14.01.2026 (Wednesday)
  13.Maha Shivratri on 15.02.2025 (Sunday)
  14.Holi from 3.03.2026 to 5.03.2026 (Tuesday to Thursday)
  15.Summer Vacation from 19.05.2025 (Monday) to 17.06.2025 (Tuesday)
  16.Dussehra Break from 29.09.2025 (Monday) to 4.10.2025 (Saturday)
  17.Deepawali & Chhath Puja Break from 20.10.2025(Monday) to 29.10.2025(Wednesday)
  18.Winter Break from 1.01.2026 (Thursday) to 7.01.2026 (Wednesday)

  **Dates of Examination:**:
  1.Periodic Test - 1 (Class-L.K.G to X & XII) from 7.05.2025 (Wednesday) to 10.05.2025 (Saturday)
  2.Periodic Test - 2 (Class-L.K.G to X & XII) from 28.07.205 (Monday) to 31.07.205 (Thursday)
  3. Half Yearly Exam  (Class-L.K.G to X & XII) from 13.09.2025 (Saturday) to 27.09.2025 (Saturday)
  4.Periodic Test - 3 (Class-L.K.G to X & XII) from 26.11.2025 (Wednesday) to 29.11.205 (Saturday)
  5.Periodic Test - 4 (Class-L.K.G to IX) from 19.01.2026 (Monday) to 22.01.2026(Thursday)
  6.Pre Board - 1 (Class X & XII) from 17.12.2025 (Wednesday) to 24.12.2025 (Wednesday)
  7.Pre Board - 2 (Class X & XII) from 10.01.2026 (Saturday) to 19.01.2026 (Thursday)

  **School birthday:**:
  1.Febuary 13 Foundation Day


  **Note-Making Guidelines:**:
Generate clear, concise, and visually structured notes on any given chapter or topic, using emojis to highlight main topics and subtopics. The output must resemble ChatGPT’s organized note format — easy to read, logically arranged, and free of unnecessary clutter.

1. Topic Identification

Analyze the input chapter or topic to determine key themes or main ideas.

Each main topic should represent a major concept or section of the subject matter.

Identify core definitions, formulas, principles, or key facts that summarize each topic.

Prefix each main topic with a distinctive emoji (like 📘, 🔹, 🌍, ⚡, 🧩, 🧠, etc.) to signal importance and make the section visually stand out.

Example:
📘 Introduction to Trigonometry
Trigonometry deals with the relationships between the sides and angles of a triangle.

2. Subtopic Extraction

Under each main topic, list 2–6 subtopics that explain or expand on the concept.

Subtopics should focus on key formulas, rules, properties, or examples — avoid fluff or long paragraphs.

Each subtopic should start with a smaller emoji (like 🔸, ✏️, 📍, ➤, 📏) to maintain a clear hierarchy.

Example:
🔸 Trigonometric Ratios: sin, cos, tan, cosec, sec, and cot.
🔸 Relation: sin²A + cos²A = 1.

3. Emoji Integration

Main topics → Use strong, thematic emojis (📘, 🌍, ⚡, 🧠, 🔬).

Subtopics → Use smaller or lighter emojis (🔹, ➤, ✏️, 📍).

Maintain consistency: the same emoji pattern should repeat across all notes for uniformity.

Avoid overusing emojis; use one per heading or subheading only.

4. Formatting and Spacing

Use bold for all main topics and subtopics.

Ensure one line of space between main topics and subtopics.

Use short paragraphs or bullet points — no long text blocks.

Follow this general hierarchy:

📘 MAIN TOPIC
Short 1–2 line explanation.

🔹 SUBTOPIC 1: Short point or definition.
🔹 SUBTOPIC 2: Another point or rule.

(Blank line before next main topic)


Keep all text aligned and minimalistic for readability.

5. Content Filtering

Include only essential and exam-relevant information:

Definitions

Key formulas or theorems

Core principles or properties

Short examples (if necessary)

Exclude:

Overly detailed explanations

Irrelevant history (unless directly asked)

Repetitive or non-essential text

Focus on clarity, brevity, and accuracy — think of it as “smart, summarized notes for quick learning.”

✅ Example Output Format

📘 Introduction to Trigonometry
Trigonometry studies relationships between the sides and angles of a triangle.

🔹 Definition: It comes from Greek words “trigonon” (triangle) and “metron” (measure).
🔹 Main Ratios: sin, cos, tan, cosec, sec, cot.
🔹 Formula: sin²A + cos²A = 1.
🔹 Use: In measuring heights, distances, and in engineering.

⚡ Applications of Trigonometry
Used in astronomy, navigation, architecture, and physics.

🔹 Example: Calculating building heights or mountain distances.
🔹 Related Field: Geometry and measurement.

        You're not just answering questions — you're carrying forward the vision of **Gyan Niketan**: *"सत्वात् संजायते ज्ञानम्"`
        },
      ],
    },
  ];

  // ====== Utilities ======
  const createMessageElement = (content, ...classes) => {
    const div = document.createElement("div");
    div.classList.add("message", ...classes);
    div.innerHTML = content;
    return div;
  };
  const sanitizeText = (t) => (t ?? "").replace(/\*\*(.*?)\*\*/g, "$1").trim();

  // ====== SOURCES: Pro rendering just below answer (and outside bubble) ======
  function renderSourcesPro(groundingMetadata) {
    try {
      const chunks = groundingMetadata?.groundingChunks || [];
      if (!chunks.length) return null;
      const items = [];
      for (const chunk of chunks) {
        const web = chunk.web;
        if (!web?.uri) continue;
        const title = web.title || new URL(web.uri).hostname;
        items.push({ title, url: web.uri });
      }
      // Deduplicate by URL
      const seen = new Set();
      const unique = items.filter(i => {
        if (seen.has(i.url)) return false;
        seen.add(i.url);
        return true;
      });
      if (!unique.length) return null;

      const sourcesDiv = document.createElement("div");
      sourcesDiv.className = "pro-sources";
      Object.assign(sourcesDiv.style, {
        margin: "8px 0 20px 56px",
        fontSize: "13px",
        color: "#65718a",
        opacity: "0.98",
        padding: "7px 0 0 0",
        borderTop: "1px solid #f0f0f7",
        lineHeight: "1.75"
      });
      sourcesDiv.innerHTML =
        `<span style="font-weight:600;color:#4465c2;margin-right:5px;">Sources:</span>` +
        unique
          .slice(0, 4)
          .map(
            c =>
              `<a href="${c.url}" target="_blank" rel="noopener noreferrer" style="color:#2155d9;font-weight:500;text-decoration:none;margin-right:10px;">${c.title}</a>`
          )
          .join(" ");
      return sourcesDiv;
    } catch (e) {
      console.warn("Failed to render pro sources:", e);
      return null;
    }
  }

  // ====== Suggestion Dropdown ======
  const chatForm = document.querySelector(".chat-form");
  const suggestionDropdown = document.createElement("div");
  suggestionDropdown.className = "suggestion-dropdown";
  Object.assign(suggestionDropdown.style, {
    display: "none",
    position: "absolute",
    left: "0",
    right: "0",
    margin: "0 auto",
    minWidth: "260px",
    maxWidth: "480px",
    background: "#fff",
    boxShadow: "0 14px 32px rgba(52,72,88,0.16), 0 2.5px 12px rgba(0,0,0,.08)",
    borderRadius: "14px",
    top: "100%",
    padding: "10px 0",
    zIndex: "22205",
    fontSize: "15px",
    color: "#182038",
    maxHeight: "236px",
    overflowY: "auto",
    transition: "box-shadow 0.2s, opacity 0.18s",
    opacity: "0",
    pointerEvents: "none"
  });
  chatForm.style.position = "relative";
  chatForm.appendChild(suggestionDropdown);

  let suggestionsArr = [];
  let selectedIndex = -1;

  function clearSuggestions() {
    suggestionDropdown.innerHTML = "";
    suggestionDropdown.style.display = "none";
    suggestionDropdown.style.opacity = "0";
    suggestionDropdown.style.pointerEvents = "none";
    suggestionsArr = [];
    selectedIndex = -1;
  }
  function showSuggestions(suggestions) {
    suggestionDropdown.innerHTML = "";
    suggestionsArr = suggestions;
    selectedIndex = -1;
    if (!suggestions.length) return clearSuggestions();

    suggestions.forEach((s, idx) => {
      const el = document.createElement("button");
      el.type = "button";
      el.className = "dropdown-item";
      Object.assign(el.style, {
        display: "flex",
        alignItems: "center",
        padding: "11px 24px",
        border: "none",
        background: "none",
        font: "inherit",
        color: idx === selectedIndex ? "#1462e0" : "#28314b",
        fontWeight: idx === selectedIndex ? "700" : "500",
        borderRadius: "8px",
        cursor: "pointer",
        textAlign: "left",
        outline: "none",
        transition: "background 0.09s,color 0.09s"
      });
      el.tabIndex = 0;
      el.innerHTML = `<svg style="margin-right:10px;" width="18" height="18" viewBox="0 0 24 24">
        <path fill="#4285f4" d="M21.35 11.1h-9.17v2.97h5.77c-.25 1.36-1.51 4-5.77 4a5.22 5.22 0 0 1 0-10.43c1.63 0 3.07.6 4.17 1.6l2.43-2.36C18.13 5.51 15.83 4.5 13.22 4.5c-5.01 0-9.1 4.09-9.1 9.1s4.09 9.1 9.1 9.1c5.25 0 8.97-3.68 8.97-8.87 0-.6-.07-1.09-.17-1.63z"/>
      </svg> ${s}`;
      el.onmouseover = () => highlightSuggestion(idx);
      el.onfocus = () => highlightSuggestion(idx);
      el.onclick = () => selectSuggestion(idx);
      suggestionDropdown.appendChild(el);
    });
    suggestionDropdown.style.display = "block";
    setTimeout(() => {
      suggestionDropdown.style.opacity = "1";
      suggestionDropdown.style.pointerEvents = "auto";
    }, 25);
  }
  function highlightSuggestion(idx) {
    const children = Array.from(suggestionDropdown.children);
    children.forEach((el, i) => {
      el.style.background = i === idx ? "#e7f2ff" : "none";
      el.style.color = i === idx ? "#1561bc" : "#28314b";
      el.style.fontWeight = i === idx ? "700" : "500";
    });
    selectedIndex = idx;
  }
  function selectSuggestion(idx) {
    messageInput.value = suggestionsArr[idx];
    clearSuggestions();
    messageInput.focus();
  }
  messageInput.addEventListener("keydown", (e) => {
    if (suggestionDropdown.style.display !== "block" || !suggestionsArr.length) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      selectedIndex = (selectedIndex + 1) % suggestionsArr.length;
      highlightSuggestion(selectedIndex);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      selectedIndex = (selectedIndex - 1 + suggestionsArr.length) % suggestionsArr.length;
      highlightSuggestion(selectedIndex);
    } else if (e.key === "Enter") {
      if (selectedIndex >= 0) {
        e.preventDefault();
        selectSuggestion(selectedIndex);
      }
      clearSuggestions();
    } else if (e.key === "Escape") {
      clearSuggestions();
    }
  });
  messageInput.addEventListener("blur", () => setTimeout(clearSuggestions, 185));
  document.addEventListener("mousedown", (e) => {
    if (!suggestionDropdown.contains(e.target) && e.target !== messageInput) clearSuggestions();
  });
  sendMessage.addEventListener("click", clearSuggestions);

  function renderSearchSuggestions(groundingMetadata) {
    let suggestions = [];
    if (Array.isArray(groundingMetadata?.searchEntryPoint?.suggestions)) {
      suggestions = groundingMetadata.searchEntryPoint.suggestions;
    } else if (groundingMetadata?.searchEntryPoint?.renderedContent) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = groundingMetadata.searchEntryPoint.renderedContent;
      suggestions = Array.from(tempDiv.querySelectorAll("button,a,li")).map(
        (el) => el.textContent.trim()
      );
    }
    if (suggestions.length) showSuggestions(suggestions);
    else clearSuggestions();
  }

  // ====== File data store ======
  const userData = {
    message: null,
    file: {
      data: null,
      mime_type: null,
    },
  };
  async function callGemini(contents) {
    const body = { contents, tools: [{ google_search: {} }] };
    const resp = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await resp.json();
    if (!resp.ok) {
      const msg = data?.error?.message || "Unknown error";
      throw new Error(msg);
    }
    return data;
  }

  // ====== Generate and render bot response ======
  const generateBotResponse = async (incomingMessageDiv) => {
    const messageElement = incomingMessageDiv.querySelector(".message-text");
    chatHistory.push({
      role: "user",
      parts: [
        { text: userData.message },
        ...(userData.file?.data ? [{ inline_data: userData.file }] : []),
      ],
    });

    try {
      const data = await callGemini(chatHistory);
      const apiResponseText = sanitizeText(
        data?.candidates?.[0]?.content?.parts?.[0]?.text || ""
      );
      messageElement.innerText = apiResponseText || "No content returned.";

      // Insert sources OUTSIDE and AFTER the whole bot message
      const grounding = data?.candidates?.[0]?.groundingMetadata;
      if (grounding) {
        renderSearchSuggestions(grounding);
        const sources = renderSourcesPro(grounding);
        if (sources) {
          // Place source at the bottom, outside of bubble (true chat style)
          incomingMessageDiv.after(sources);
        }
      }
      chatHistory.push({
        role: "model",
        parts: [{ text: apiResponseText }],
      });
    } catch (error) {
      console.error(error);
      messageElement.innerText = error.message || "Request failed.";
      messageElement.style.color = "#ff0000";
    } finally {
      userData.file = {};
      incomingMessageDiv.classList.remove("thinking");
      chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    }
  };

  // ====== Send message flow ======
  const handleOutgoingMessage = (e) => {
    e.preventDefault();
    userData.message = messageInput.value.trim();
    if (!userData.message && !userData.file?.data) return;
    messageInput.value = "";
    messageInput.dispatchEvent(new Event("input"));
    fileUploadWrapper.classList.remove("file-uploaded");
    const messageContent = `<div class="message-text"></div>
      ${
        userData.file?.data
          ? `<img src="data:${userData.file.mime_type};base64,${userData.file.data}" class="attachment" />`
          : ""
      }`;
    const outgoingMessageDiv = createMessageElement(messageContent, "user-message");
    outgoingMessageDiv.querySelector(".message-text").innerText = userData.message;
    chatBody.appendChild(outgoingMessageDiv);
    chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
    setTimeout(() => {
      const thinking = `<svg class="bot-avatar" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 1024 1024">
        <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1 15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z"/>
      </svg>
      <div class="message-text">
        <div class="thinking-indicator">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>`;
      const incomingMessageDiv = createMessageElement(
        thinking,
        "bot-message",
        "thinking"
      );
      chatBody.appendChild(incomingMessageDiv);
      chatBody.scrollTo({ top: chatBody.scrollHeight, behavior: "smooth" });
      generateBotResponse(incomingMessageDiv);
    }, 400);
  };

  // ====== Input autosize ======
  const initialInputHeight = messageInput.scrollHeight || 40;
  messageInput.addEventListener("input", () => {
    messageInput.style.height = `${initialInputHeight}px`;
    messageInput.style.height = `${messageInput.scrollHeight}px`;
    document.querySelector(".chat-form").style.borderRadius =
      messageInput.scrollHeight > initialInputHeight ? "15px" : "32px";
  });

  // Enter to send on desktop
  messageInput.addEventListener("keydown", (e) => {
    const userMessage = e.target.value.trim();
    if (e.key === "Enter" && !e.shiftKey && userMessage && window.innerWidth > 768) {
      handleOutgoingMessage(e);
    }
  });

  // ====== File upload preview ======
  fileInput.addEventListener("change", () => {
    const file = fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      fileInput.value = "";
      fileUploadWrapper.querySelector("img").src = e.target.result;
      fileUploadWrapper.classList.add("file-uploaded");
      const base64String = e.target.result.split(",")[1];
      userData.file = { data: base64String, mime_type: file.type };
    };
    reader.readAsDataURL(file);
  });
  fileCancelButton.addEventListener("click", () => {
    userData.file = {};
    fileUploadWrapper.classList.remove("file-uploaded");
  });

  // ====== Emoji picker ======
  const picker = new EmojiMart.Picker({
    theme: "light",
    skinTonePosition: "none",
    previewPosition: "none",
    onEmojiSelect: (emoji) => {
      const { selectionStart: start, selectionEnd: end } = messageInput;
      messageInput.setRangeText(emoji.native, start, end, "end");
      messageInput.focus();
    },
    onClickOutside: (e) => {
      if (e.target.id === "emoji-picker") {
        document.body.classList.toggle("show-emoji-picker");
      } else {
        document.body.classList.remove("show-emoji-picker");
      }
    },
  });
  document.querySelector(".chat-form").appendChild(picker);

  // ====== Open/close chatbot ======
  sendMessage.addEventListener("click", (e) => handleOutgoingMessage(e));
  document.querySelector("#file-upload").addEventListener("click", () => fileInput.click());
  closeChatbot.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
  chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));

  // ====== Mobile swipe-to-close ======
  const chatbot = document.querySelector(".chatbot-popup");
  const toggleBtn = document.getElementById("chatbot-toggler");
  const closeBtn = document.querySelector(".chat-header .close-btn");
  let startY = 0, currentY = 0, isDragging = false;
  toggleBtn.addEventListener("click", () => { chatbot.classList.add("active"); });
  closeBtn.addEventListener("click", () => { chatbot.classList.remove("active"); });
  chatbot.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
    isDragging = true;
  });
  chatbot.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentY = e.touches[0].clientY;
    const diff = currentY - startY;
    if (diff > 0) {
      chatbot.style.transform = `translateY(${diff}px)`;
    }
  });
  chatbot.addEventListener("touchend", () => {
    isDragging = false;
    if (currentY - startY > 120) {
      chatbot.classList.remove("active");
    }
    chatbot.style.transform = "";
  });




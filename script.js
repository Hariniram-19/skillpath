
// ========================================
// CAREER DATA
// ========================================

const careers = {

    frontend: {

        name: "Frontend Developer",

        description:
            "Creates the visual and interactive parts of websites and web applications.",

        interests: ["web", "design"],

        skills: [
            { name: "HTML", importance: 4 },
            { name: "CSS", importance: 4 },
            { name: "JavaScript", importance: 4 },
            { name: "Git & GitHub", importance: 3 },
            { name: "Responsive Design", importance: 3 },
            { name: "React", importance: 3 }
        ],

        roadmap: [
            "HTML",
            "CSS",
            "JavaScript",
            "Git & GitHub",
            "Responsive Design",
            "React",
            "Build Web Projects"
        ]
    },


    backend: {

        name: "Backend Developer",

        description:
            "Develops the server-side logic, databases and APIs behind applications.",

        interests: ["programming", "systems"],

        skills: [
            { name: "Java / Python", importance: 4 },
            { name: "SQL", importance: 4 },
            { name: "Databases", importance: 4 },
            { name: "REST APIs", importance: 4 },
            { name: "Git & GitHub", importance: 2 },
            { name: "Authentication", importance: 3 }
        ],

        roadmap: [
            "Programming Fundamentals",
            "Java or Python",
            "SQL",
            "Databases",
            "REST APIs",
            "Authentication",
            "Build Backend Projects"
        ]
    },


    dataAnalyst: {

        name: "Data Analyst",

        description:
            "Analyzes data to discover patterns and help organizations make better decisions.",

        interests: ["data"],

        skills: [
            { name: "Excel", importance: 3 },
            { name: "Statistics", importance: 4 },
            { name: "SQL", importance: 4 },
            { name: "Python", importance: 4 },
            { name: "Pandas", importance: 3 },
            { name: "Power BI", importance: 3 }
        ],

        roadmap: [
            "Excel",
            "Statistics",
            "SQL",
            "Python",
            "NumPy & Pandas",
            "Power BI",
            "Data Analysis Projects"
        ]
    },


    uiux: {

        name: "UI/UX Designer",

        description:
            "Designs intuitive, accessible and visually appealing digital experiences.",

        interests: ["design"],

        skills: [
            { name: "Figma", importance: 4 },
            { name: "Wireframing", importance: 3 },
            { name: "Prototyping", importance: 4 },
            { name: "UX Research", importance: 4 },
            { name: "User Testing", importance: 3 },
            { name: "Design Systems", importance: 3 }
        ],

        roadmap: [
            "Design Fundamentals",
            "Figma",
            "Wireframing",
            "Prototyping",
            "UX Research",
            "User Testing",
            "Build Design Portfolio"
        ]
    },


    cybersecurity: {

        name: "Cybersecurity Analyst",

        description:
            "Protects applications, networks and systems from security threats.",

        interests: ["security", "systems"],

        skills: [
            { name: "Networking", importance: 4 },
            { name: "Linux", importance: 3 },
            { name: "Python", importance: 3 },
            { name: "Web Security", importance: 4 },
            { name: "Cryptography", importance: 3 },
            { name: "SIEM Fundamentals", importance: 3 }
        ],

        roadmap: [
            "Networking Fundamentals",
            "Linux",
            "Python",
            "Web Security",
            "Cryptography",
            "SIEM Fundamentals",
            "Security Labs & Projects"
        ]
    },


    mobile: {

        name: "Mobile App Developer",

        description:
            "Builds applications for Android and other mobile platforms.",

        interests: ["programming", "mobile"],

        skills: [
            { name: "Java / Kotlin", importance: 4 },
            { name: "Android Studio", importance: 4 },
            { name: "UI Development", importance: 3 },
            { name: "Git & GitHub", importance: 2 },
            { name: "REST APIs", importance: 3 },
            { name: "Local Data Storage", importance: 3 }
        ],

        roadmap: [
            "Programming Fundamentals",
            "Java or Kotlin",
            "Android Studio",
            "UI Development",
            "REST APIs",
            "Local Data Storage",
            "Build Mobile Apps"
        ]
    },


    cloudDevOps: {

        name: "Cloud / DevOps Engineer",

        description:
            "Automates software delivery and manages applications and infrastructure in the cloud.",

        interests: ["cloud", "systems"],

        skills: [
            { name: "Linux", importance: 4 },
            { name: "Git & GitHub", importance: 4 },
            { name: "Networking", importance: 3 },
            { name: "Docker", importance: 4 },
            { name: "CI/CD", importance: 4 },
            { name: "AWS / Azure", importance: 4 }
        ],

        roadmap: [
            "Linux",
            "Git & GitHub",
            "Networking",
            "Docker",
            "CI/CD",
            "AWS or Azure",
            "Deploy Real Projects"
        ]
    },


    aiMl: {

        name: "AI / Machine Learning Engineer",

        description:
            "Builds intelligent systems using data, algorithms and machine learning techniques.",

        interests: ["ai", "data", "programming"],

        skills: [
            { name: "Python", importance: 4 },
            { name: "NumPy", importance: 3 },
            { name: "Pandas", importance: 3 },
            { name: "Statistics", importance: 4 },
            { name: "Machine Learning", importance: 4 },
            { name: "TensorFlow / PyTorch", importance: 3 }
        ],

        roadmap: [
            "Python",
            "NumPy",
            "Pandas",
            "Statistics",
            "Machine Learning",
            "TensorFlow or PyTorch",
            "Build ML Projects"
        ]
    }

};

// ========================================
// VARIABLES
// ========================================

let selectedCareer = "";
let selectedInterest = "";


// ========================================
// SHOW SECTION
// ========================================

function showSection(sectionId) {

    const sections =
        document.querySelectorAll(".section");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    document
        .getElementById(sectionId)
        .classList.remove("hidden");
}


// ========================================
// START ASSESSMENT
// ========================================

function startAssessment() {

    loadInterests();

    showSection("interests");
}


// ========================================
// LOAD INTERESTS
// ========================================

function loadInterests() {

    const container =
        document.getElementById("interestContainer");

    container.innerHTML = "";

    selectedInterest = "";

    document.getElementById("continueButton").disabled = true;


    const interests = [

        {
            id: "web",
            name: "🌐 Web Development",
            description: "Building websites and web applications"
        },

        {
            id: "programming",
            name: "💻 Programming",
            description: "Coding and software development"
        },

        {
            id: "data",
            name: "📊 Data & Analytics",
            description: "Working with data and finding insights"
        },

        {
            id: "design",
            name: "🎨 UI/UX Design",
            description: "Designing digital experiences"
        },

        {
            id: "systems",
            name: "⚙️ Systems & Infrastructure",
            description: "Working with systems, networks and servers"
        },

        {
            id: "security",
            name: "🔐 Cybersecurity",
            description: "Protecting systems and applications"
        },

        {
            id: "mobile",
            name: "📱 Mobile Development",
            description: "Creating mobile applications"
        },

        {
            id: "cloud",
            name: "☁️ Cloud & DevOps",
            description: "Cloud platforms and software deployment"
        },

        {
            id: "ai",
            name: "🤖 AI & Machine Learning",
            description: "Building intelligent systems"
        }

    ];


    interests.forEach(interest => {

        const card =
            document.createElement("div");

        card.className = "card";


        card.innerHTML = `

            <h2>${interest.name}</h2>

            <p>${interest.description}</p>

        `;


        card.onclick = function () {

            selectedInterest = interest.id;


            // Remove previous selection
            document
                .querySelectorAll("#interestContainer .card")
                .forEach(card => {

                    card.classList.remove("selected");

                });


            // Highlight selected card
            card.classList.add("selected");


            // Enable Continue button
            document
                .getElementById("continueButton")
                .disabled = false;

        };


        container.appendChild(card);

    });
}


// ========================================
// RECOMMEND CAREER
// ========================================

function recommendCareer() {

    if (!selectedInterest) {

        alert("Please select an interest.");

        return;
    }


    // Find all careers matching the selected interest

    let matches = [];


    for (let key in careers) {

        if (
            careers[key].interests
                .includes(selectedInterest)
        ) {

            matches.push({
                key: key,
                career: careers[key]
            });

        }

    }


    // If no career is found

    if (matches.length === 0) {

        alert("No matching career found.");

        return;

    }


    // Keep the first career as the main recommendation
    // so your existing assessment flow continues to work.

    selectedCareer = matches[0].key;


    // Show multiple matching careers

    document
        .getElementById("recommendationContainer")
        .innerHTML = `

        <div class="card">

            <h2>🎯 Recommended Careers</h2>

            <p>
                Based on your interest in
                <strong>${selectedInterest}</strong>,
                these career paths may suit you:
            </p>

        </div>


        ${matches.map((item, index) => `

            <div class="card">

                <h2>
                    ${index === 0 ? "⭐ " : ""}
                    ${item.career.name}
                </h2>

                <p>
                    ${item.career.description}
                </p>

                <br>

                <strong>Core Skills</strong>

                <p>
                    ${item.career.skills
                        .map(skill => skill.name)
                        .join(" • ")}
                </p>

                <button
                    onclick="selectCareer('${item.key}')">

                    Choose This Career

                </button>

            </div>

        `).join("")}

    `;


    showSection("recommendation");
}
function selectCareer(careerKey) {

    selectedCareer = careerKey;

    startAssessmentForCareer();

}

// ========================================
// START CAREER ASSESSMENT
// ========================================

function startAssessmentForCareer() {

    loadSkills();

    showSection("assessment");
}


// ========================================
// CAREER EXPLORER
// ========================================

function showCareers() {

    const container =
        document.getElementById("careerContainer");

    container.innerHTML = "";


    for (let key in careers) {

        const career = careers[key];


        const card =
            document.createElement("div");

        card.className = "card";


        card.innerHTML = `

            <h2>${career.name}</h2>

            <p>${career.description}</p>

            <br>

            <strong>Skills</strong>

            <p>
                ${career.skills
                    .map(skill => skill.name)
                    .join(", ")}
            </p>

            <button>
                Take Assessment
            </button>

        `;


        card.querySelector("button")
            .onclick = function () {

                selectedCareer = key;

                loadSkills();

                showSection("assessment");

            };


        container.appendChild(card);
    }


    showSection("careers");
}


// ========================================
// LOAD SKILLS
// ========================================

function loadSkills() {

    const career =
        careers[selectedCareer];


    document
        .getElementById("careerTitle")
        .innerText =
        career.name + " Skill Assessment";


    const container =
        document.getElementById("skillContainer");

    container.innerHTML = "";


    career.skills.forEach((skill, index) => {

        const div =
            document.createElement("div");

        div.className = "skill";


        div.innerHTML = `

            <h3>${skill.name}</h3>

            <p>
                Importance:
                ${getImportanceText(skill.importance)}
            </p>

            <label>
                <input
                    type="radio"
                    name="skill${index}"
                    value="0">
                Never Learned
            </label>

            <label>
                <input
                    type="radio"
                    name="skill${index}"
                    value="1">
                Beginner
            </label>

            <label>
                <input
                    type="radio"
                    name="skill${index}"
                    value="2">
                Intermediate
            </label>

            <label>
                <input
                    type="radio"
                    name="skill${index}"
                    value="3">
                Advanced
            </label>

        `;


        container.appendChild(div);

    });
}


// ========================================
// IMPORTANCE TEXT
// ========================================

function getImportanceText(value) {

    if (value === 4) {
        return "Very High";
    }

    if (value === 3) {
        return "High";
    }

    if (value === 2) {
        return "Medium";
    }

    return "Low";
}


// ========================================
// CALCULATE RESULT
// ========================================

function calculateResult() {

    const skills =
        careers[selectedCareer].skills;


    let totalScore = 0;
    let totalPossibleScore = 0;

    let strengths = [];
    let gaps = [];

    let prioritySkill = null;

    let skillResults = [];


    skills.forEach((skill, index) => {

        const selected =
            document.querySelector(
                `input[name="skill${index}"]:checked`
            );


        let level = 0;


        if (selected) {
            level = Number(selected.value);
        }


        // Calculate overall score
        totalScore +=
            level * skill.importance;

        totalPossibleScore +=
            3 * skill.importance;


        // Calculate individual skill percentage
        const skillPercentage =
            Math.round((level / 3) * 100);


        skillResults.push({
            name: skill.name,
            percentage: skillPercentage
        });


        // Strengths and gaps
        if (level >= 2) {

            strengths.push(skill.name);

        }
        else {

            gaps.push(skill.name);


            if (
                prioritySkill === null ||
                skill.importance >
                prioritySkill.importance
            ) {

                prioritySkill = skill;

            }

        }

    });


    const percentage =
        Math.round(
            (totalScore /
                totalPossibleScore) * 100
        );


    // ========================================
    // OVERALL SCORE
    // ========================================

    document
        .getElementById("score")
        .innerHTML = `

        <h2>
            Skill Match: ${percentage}%
        </h2>

        <p>
            ${getMatchMessage(percentage)}
        </p>

        ${
            prioritySkill
            ?
            `<p>
                <strong>Priority Skill:</strong>
                ${prioritySkill.name}
            </p>`
            :
            ""
        }

    `;


    // ========================================
    // SKILL PROFILE
    // ========================================

    const skillProfile =
        document.getElementById("skillProfile");


    if (skillProfile) {

        skillProfile.innerHTML =
            skillResults.map(skill => `

                <div class="skill-profile-card">

                    <div class="skill-profile-header">

                        <strong>
                            ${skill.name}
                        </strong>

                        <span class="skill-percentage">
                            ${skill.percentage}%
                        </span>

                    </div>


                    <div class="skill-bar">

                        <div
                            class="skill-bar-fill"
                            style="width: ${skill.percentage}%">
                        </div>

                    </div>

                </div>

            `).join("");

    }


    // ========================================
    // STRENGTHS
    // ========================================

    document
        .getElementById("strengths")
        .innerHTML =
        strengths.length
        ?
        strengths.join(" • ")
        :
        "No strong skills yet";


    // ========================================
    // GAPS
    // ========================================

    document
        .getElementById("gaps")
        .innerHTML =
        gaps.length
        ?
        gaps.join(" • ")
        :
        "No major skill gaps";


    // ========================================
    // SAVE RESULT
    // ========================================

    localStorage.setItem(
        "skillPathResult",
        JSON.stringify({

            career: selectedCareer,

            percentage: percentage,

            strengths: strengths,

            gaps: gaps,

            skillResults: skillResults

        })
    );


    showSection("result");

}


// ========================================
// MATCH MESSAGE
// ========================================

function getMatchMessage(score) {

    if (score >= 80) {
        return "🔥 You are close to being career ready!";
    }

    if (score >= 60) {
        return "🚀 You have a good foundation. Focus on your skill gaps.";
    }

    if (score >= 40) {
        return "📚 Build your core skills and keep improving.";
    }

    return "🌱 Start with the fundamentals and build your skills.";
}


// ========================================
// PERSONALIZED ROADMAP
// ========================================

function showRoadmap() {

    const result =
        JSON.parse(
            localStorage.getItem("skillPathResult")
        );


    const container =
        document.getElementById("roadmapContainer");

    container.innerHTML = "";


    if (!result || result.gaps.length === 0) {

        container.innerHTML = `
            <h2>🎉 Amazing!</h2>
            <p>
                You have covered all the major skills
                for this career.
            </p>
        `;

        showSection("roadmap");

        return;
    }


    result.gaps.forEach((skill, index) => {

        const div =
            document.createElement("div");

        div.className = "roadmap-step";


        div.innerHTML = `

            <h3>
                Step ${index + 1}: ${skill}
            </h3>

            <p>
                Focus on learning and practicing
                ${skill}.
            </p>

        `;


        container.appendChild(div);

    });


    showSection("roadmap");
}
// ========================================
// CAREER WHAT-IF SIMULATOR
// ========================================

function showSimulator() {

    const result =
        JSON.parse(
            localStorage.getItem("skillPathResult")
        );


    if (!result) {

        alert("Please complete the assessment first.");

        return;

    }


    const currentCareer =
        careers[result.career];


    // ------------------------------------
    // CURRENT CAREER
    // ------------------------------------

    document
        .getElementById("currentCareerResult")
        .innerHTML = `

            <div class="simulator-career">

                <h3>
                    ${currentCareer.name}
                </h3>

                <div class="big-match">
                    ${result.percentage}%
                </div>

                <p>
                    Your current skill match
                </p>

            </div>

        `;


    // ------------------------------------
    // COMPARE OTHER CAREERS
    // ------------------------------------

    const comparison =
        document.getElementById(
            "careerComparison"
        );

    comparison.innerHTML = "";


    const careerScores = [];


    for (let key in careers) {

        if (key === result.career) {
            continue;
        }


        const career =
            careers[key];


        const score =
            calculateCareerMatch(
                career,
                result.strengths
            );


        careerScores.push({

            key: key,

            name: career.name,

            score: score

        });

    }


    // Highest match first

    careerScores.sort(
        (a, b) => b.score - a.score
    );


    careerScores.forEach((career, index) => {

        const card =
            document.createElement("div");


        card.className =
            "comparison-card";


        card.innerHTML = `

            <div>

                <h3>
                    ${career.name}
                </h3>

                <p>
                    ${getCareerMatchMessage(career.score)}
                </p>

            </div>


            <div class="comparison-score">

                ${career.score}%

            </div>

        `;


        comparison.appendChild(card);

    });


    // ------------------------------------
    // IMPROVEMENT SIMULATOR
    // ------------------------------------

    const currentScore =
        result.percentage;


    const gaps =
        result.gaps;


    let improvement =
        0;


    gaps.forEach(skillName => {

        const skill =
            currentCareer.skills.find(
                s => s.name === skillName
            );


        if (skill) {

            improvement +=
                skill.importance * 3;

        }

    });


    // Keep improvement realistic

    const potentialScore =
        Math.min(
            100,
            currentScore +
            Math.round(
                improvement / 2
            )
        );


    const increase =
        potentialScore -
        currentScore;


    document
        .getElementById("improvementResult")
        .innerHTML = `

        <div class="improvement-card">

            <div>

                <p>Current Match</p>

                <strong>
                    ${currentScore}%
                </strong>

            </div>


            <div class="arrow">
                →
            </div>


            <div>

                <p>Potential Match</p>

                <strong>
                    ${potentialScore}%
                </strong>

            </div>

        </div>


        <div class="improvement-message">

            ${
                increase > 0

                ?

                `🚀 Improving your skill gaps could
                 increase your match by
                 <strong>${increase}%</strong>.`

                :

                `🎉 You already have a strong
                 skill foundation!`
            }

        </div>


        <h3 class="priority-title">
            Priority Skills
        </h3>


        <div class="priority-skills">

            ${
                gaps.length > 0

                ?

                gaps
                    .slice(0, 3)
                    .map(
                        skill =>
                        `<span>${skill}</span>`
                    )
                    .join("")

                :

                `<span>No major gaps 🎉</span>`
            }

        </div>

    `;


    showSection("simulator");

}


// ========================================
// CALCULATE CAREER MATCH
// ========================================

function calculateCareerMatch(
    career,
    strengths
) {

    let matchedWeight = 0;

    let totalWeight = 0;


    career.skills.forEach(skill => {

        totalWeight +=
            skill.importance;


        if (
            strengths.includes(skill.name)
        ) {

            matchedWeight +=
                skill.importance;

        }

    });


    if (totalWeight === 0) {
        return 0;
    }


    return Math.round(
        (matchedWeight /
            totalWeight) * 100
    );

}


// ========================================
// CAREER MATCH MESSAGE
// ========================================

function getCareerMatchMessage(score) {

    if (score >= 80) {

        return "🔥 Excellent alternative";

    }

    if (score >= 60) {

        return "🚀 Strong alternative";

    }

    if (score >= 40) {

        return "📚 Some skills overlap";

    }

    return "🌱 Requires more learning";

}
// ========================================
// CAREER WHAT-IF SIMULATOR
// ========================================

function showSimulator() {

    const savedResult =
        localStorage.getItem("skillPathResult");

    if (!savedResult) {

        alert("Please complete the assessment first.");

        return;
    }


    const result =
        JSON.parse(savedResult);


    const currentCareer =
        careers[result.career];


    if (!currentCareer) {

        alert("Career information not found.");

        return;
    }


    // ========================================
    // CURRENT CAREER
    // ========================================

    document
        .getElementById("currentCareerResult")
        .innerHTML = `

        <div class="simulator-career">

            <h3>
                ${currentCareer.name}
            </h3>

            <div class="big-match">
                ${result.percentage}%
            </div>

            <p>
                Your current skill match
            </p>

        </div>

    `;


    // ========================================
    // CAREER COMPARISON
    // ========================================

    const comparison =
        document.getElementById(
            "careerComparison"
        );


    comparison.innerHTML = "";


    let careerScores = [];


    for (let key in careers) {

        if (key === result.career) {
            continue;
        }


        const career =
            careers[key];


        let totalImportance = 0;

        let matchedImportance = 0;


        career.skills.forEach(skill => {

            totalImportance +=
                skill.importance;


            const studentSkill =
                result.skillResults.find(
                    s => s.name === skill.name
                );


            if (studentSkill) {

                matchedImportance +=
                    skill.importance *
                    (studentSkill.percentage / 100);

            }

        });


        let score = 0;


        if (totalImportance > 0) {

            score =
                Math.round(
                    (matchedImportance /
                        totalImportance) * 100
                );

        }


        careerScores.push({

            name: career.name,

            score: score

        });

    }


    // Highest match first

    careerScores.sort(
        (a, b) => b.score - a.score
    );


    careerScores.forEach(career => {

        const card =
            document.createElement("div");


        card.className =
            "comparison-card";


        card.innerHTML = `

            <div>

                <h3>
                    ${career.name}
                </h3>

                <p>
                    ${getCareerMatchMessage(
                        career.score
                    )}
                </p>

            </div>

            <div class="comparison-score">

                ${career.score}%

            </div>

        `;


        comparison.appendChild(card);

    });


    // ========================================
    // IMPROVEMENT SIMULATOR
    // ========================================

    const currentScore =
        result.percentage;


    const gaps =
        result.gaps || [];


    let improvement =
        0;


    gaps.forEach(skillName => {

        const skill =
            currentCareer.skills.find(
                s => s.name === skillName
            );


        if (skill) {

            improvement +=
                skill.importance * 3;

        }

    });


    const potentialScore =
        Math.min(
            100,
            currentScore +
            Math.round(improvement / 2)
        );


    const increase =
        potentialScore -
        currentScore;


    document
        .getElementById("improvementResult")
        .innerHTML = `

        <div class="improvement-card">

            <div>

                <p>Current Match</p>

                <strong>
                    ${currentScore}%
                </strong>

            </div>


            <div class="arrow">
                →
            </div>


            <div>

                <p>Potential Match</p>

                <strong>
                    ${potentialScore}%
                </strong>

            </div>

        </div>


        <div class="improvement-message">

            ${
                increase > 0

                ?

                `🚀 Improving your weak skills
                 could increase your match by
                 <strong>${increase}%</strong>.`

                :

                `🎉 You already have a strong
                 skill foundation!`
            }

        </div>


        <h3 class="priority-title">
            Priority Skills
        </h3>


        <div class="priority-skills">

            ${
                gaps.length > 0

                ?

                gaps
                    .slice(0, 3)
                    .map(
                        skill =>
                        `<span>${skill}</span>`
                    )
                    .join("")

                :

                `<span>No major gaps 🎉</span>`
            }

        </div>

    `;


    showSection("simulator");

}
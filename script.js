async function analyzeResume() {
    const resume = document.getElementById("resumeText").value;
    const output = document.getElementById("output");

    output.innerHTML = "Analyzing...";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": ""
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a professional resume reviewer." },
                { role: "user", content: "Analyze this resume:\n" + resume }
            ]
        })
    });

    const data = await response.json();
    output.innerHTML = data.choices[0].message.content;
}

async function getCareerAdvice() {
    const skills = document.getElementById("skills").value;
    const interest = document.getElementById("interest").value;
    const output = document.getElementById("output");

    output.innerHTML = "Thinking...";

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "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"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a career mentor." },
                { role: "user", content: `My skills: ${skills}. My interest: ${interest}. Suggest career paths.` }
            ]
        })
    });

    const data = await response.json();
    output.innerHTML = data.choices[0].message.content;
}

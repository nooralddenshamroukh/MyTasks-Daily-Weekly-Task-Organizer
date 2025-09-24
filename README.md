# ✨ My Tasks — Minimal Task Organizer

A lightweight, responsive task organizer built with **HTML, CSS, and Vanilla JavaScript**.  
Organize tasks into **All / Today / Tomorrow / Weekend**, move items between boxes via drag-and-drop, and persist data locally using **localStorage** — no backend required.

---

## 🚀 Features
- Add tasks quickly via the input or by pressing **Enter**
- Drag & drop tasks between boxes (All, Today, Tomorrow, Weekend)
- Remove single tasks or use **Clear All** per box
- Live task counters for each box
- Persistent storage with **localStorage**
- Fully responsive layout for desktop and mobile
- Built with **pure (vanilla) JS**, CSS, and HTML — no libraries

---

## 🌍 Live Demo
🔗 [ MyTasks ](https://nooralddenshamroukh.github.io/MyTasks-Daily-Weekly-Task-Organizer/)

---
 
## 🎥 Project Video
📽️ Demo video posted on my [LinkedIn profile](https://www.linkedin.com/posts/nooralddenshamroukh-90b866366_as-part-of-my-front-end-learning-journey-activity-7376506763245834240-0Mvk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFrlU5sB1U_BrxfGLTw8OtUqfvfvRR57zzM)

---

## 🧠 How it works (brief)
- On load, the app reads the `tasks` object from `localStorage` (if present) and populates each box based on their `data-box` attribute.  
- Tasks are created as draggable `<p class="item">` elements containing the text and a remove button.  
- Drag events (`dragstart`, `dragend`, `dragover`, `drop`) handle moving items between boxes and saving the new state.  
- `localStorage` holds an object with keys matching the box names (`all`, `today`, `tomorrow`, `weekend`) where each key maps to an array of task strings.

---

## 📂 Project Structure
/index.html
/MyTasks.css
/MyTasks.js

yaml
Copy code

---

## ⚡ Usage
1. Clone the repo:
   ```bash
   git clone https://github.com/nooralddenshamroukh/MyTasks-Daily-Weekly-Task-Organizer
Open index.html in your browser:

Double-click index.html, or


Drag tasks between boxes to categorize them.

Use Clear All in any box to remove all items in that box.

🛠 Technologies

HTML5

CSS3 (responsive)

JavaScript (Vanilla / DOM API / HTML5 Drag & Drop)

✅ Notes & Implementation Details
Tasks are saved in localStorage under the key "tasks" as an object:

json
Copy code
{
  "all": ["task1", "task2"],
  "today": [...],
  "tomorrow": [...],
  "weekend": [...]
}
Each task element is created by createTask(text, parentBox) and inserted before the Clear All button inside the target box.

Task removal updates localStorage and UI counts immediately.

📌 Future Improvements/ suggestions
Add edit / mark-as-complete functionality for tasks

Add due dates, reminders, and sorting options

Improve mobile touch drag support (touch events)

Add export/import (JSON or CSV)

Add persistence across devices via a backend (Firebase / REST API)

Add accessibility improvements (ARIA attributes, keyboard-only reordering)

👨‍💻 Author
Noor Aldden — Computer Engineer
🔗 https://www.linkedin.com/in/nooralddenshamroukh-90b866366/

📄 License
This project is available under the MIT License — feel free to copy, adapt, and improve.

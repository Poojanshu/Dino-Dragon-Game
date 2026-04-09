# 🐉 Dino vs Dragon Game

A fun and interactive **Dino Runner Game** built using **HTML, CSS, and JavaScript**.  
Control the dinosaur, jump over dragons, and survive as long as possible while your score keeps increasing!

---

## 🚀 Demo

To run the game locally, use the **Live Server** extension in VS Code:
[http://127.0.0.1:5500/](http://127.0.0.1:5500/)

---

## 🎮 Gameplay

* **⬆️ Up Arrow**: Jump
* **➡️ Right Arrow**: Move forward
* **⬅️ Left Arrow**: Move backward
* **Objective**: Avoid hitting the dragon! Survive longer to increase your score.

---

## ✨ Features

* **Smooth Animations**: Fluid jumping and movement mechanics.
* **Real-time Scoring**: Track your survival time in real-time.
* **Immersive Audio**: Background sound effects for a better gaming experience.
* **Dynamic Difficulty**: The game speed increases gradually as you score higher.
* **Collision Detection**: Precise hit-box logic for a fair game-over system.

---

## 🛠 Tech Stack

* **HTML5**: Game structure and elements.
* **CSS3**: Styling, layout, and keyframe animations.
* **JavaScript (ES6)**: Game logic, movement, and collision detection.

---

## 📁 Project Structure

```text
Dino-Dragon-Game/
│── Dragon Game SS1.png
│── Dragon Game SS2.png
│── README.md
│── audio.mp3
│── background.png
│── dino.png
│── dragon.png
│── index.html
│── style.css
│── script.js
```
---

## ⚙️ How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Poojanshu/Dino-Dragon-Game.git

2. **Open the project folder**

3. Run with Live Server (VS Code recommended)

---

## 🧠 How It Works

* The dinosaur jumps using **CSS keyframe animation**
* The dragon moves continuously using **infinite animation loop**
* Collision detection is handled using:

  ```js
  offsetX = Math.abs(dx - ox)
  offsetY = Math.abs(dy - oy)
  ```
* Score increases when the player successfully crosses the obstacle
* Game speed increases dynamically by reducing animation duration

---

## 📸 Screenshots

### Gameplay

![Dino-Dragon-Game](https://github.com/Poojanshu/Dino-Dragon-Game/blob/main/Dragon%20Game%20SS1.png)

### Gameplay 2

![Dino-Dragon-Game](https://github.com/Poojanshu/Dino-Dragon-Game/blob/main/Dragon%20Game%20SS2.png)

---

## 💡 Future Improvements

* Restart button 🔄
* Mobile responsiveness 📱
* Multiple obstacles
* Power-ups & boosts
* Leaderboard system 🏆

---

## 👨‍💻 Author

**Poojanshu Sharma**

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!

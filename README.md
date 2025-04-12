# Floating Chat Bar (WIP)

A minimal, floating, always-on-top AI chat interface designed to live on your desktop and stay out of the way while you work. Summon it via keyboard shortcut and fire off questions or commands directly to a local or cloud-based AI — without switching windows.

---

## 🧠 Origin Story

This is my first foray into coding and UI development — the entire project was created with help from OpenAI. What started as curiosity turned into a full hands-on learning experience, and AI has opened the door to an interest I didn’t even know I had.

The long-term goal is to run this chat bar fully locally using tools like [Ollama](https://ollama.com), with zero cloud dependencies — just fast, private AI access baked into the OS.

---

## 🚀 Features

- Always-on-top floating chat bar UI
- Clean, misty visual design with animated typing indicator
- Message thread floats above the bar like a messaging app
- Live prompt + response system via OpenAI API (for now)
- Designed to evolve into a self-hosted AI tool

---

## 🧱 Stack

- HTML/CSS/JS frontend
- Node.js + Express backend
- OpenAI API (current backend)
- Ollama (local AI backend – in progress)

---

## 🛠️ Getting Started

```bash
git clone https://github.com/wensworld/floating-chat-bar.git
cd floating-chat-bar
npm install
node server.js

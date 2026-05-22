# 📡 Private 5G Surveillance Camera System

A real-time web dashboard for monitoring and streaming live video from a 5G IP camera over a private Celona 5G network.

---

## 📸 Demo

<!-- HOW TO ADD YOUR SCREENSHOT:
     1. Create a folder called "docs" in your repo
     2. Drop your screenshot inside it (e.g. dashboard.png)
     3. Replace the line below with:
        ![Dashboard Screenshot](docs/dashboard.png)
     OR if you upload directly to GitHub issues (drag & drop trick):
        Open any GitHub Issue → drag your image into the text box → copy the URL it generates → paste here
-->

![Dashboard Screenshot](docs/dashboard.png)

---

## ✨ Features

- 🎥 Live RTSP → WebRTC streaming via MediaMTX
- 📡 HLS fallback stream support
- ⚛️ React frontend with real-time camera feed
- 🖥️ Node.js / Express backend API
- 🔒 Deployed on private 5G core (Celona)

---

## 🛠️ Tech Stack

| Layer     | Technology          |
|-----------|---------------------|
| Frontend  | React + Vite        |
| Backend   | Node.js + Express   |
| Streaming | MediaMTX v1.17.1    |
| Network   | Celona Private 5G   |
| Camera    | SCB800 5G IP Camera |
| Server    | Ubuntu Server 24.04 |

---

## 🏗️ Architecture

<!-- Coming soon — will add network flow diagram here -->
> Architecture diagram will be added (Camera → UPF → MediaMTX → WebRTC → Browser)

---

## ⚙️ Prerequisites

- Node.js v18+
- MediaMTX installed on the streaming server
- Access to a 5G/local network with an RTSP-capable IP camera

---

## 🚀 Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/grahulreddyofficial/<your-repo-name>.git
   cd <your-repo-name>
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Configure environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your RTSP URL and server details
   ```

5. **Start the backend**
   ```bash
   npm run dev
   ```

6. **Start the frontend**
   ```bash
   cd ../frontend
   npm run dev
   ```

---

## 🔧 Configuration

Create a `.env` file in the `backend/` folder based on `.env.example`:

| Variable        | Description                   | Example                          |
|-----------------|-------------------------------|----------------------------------|
| `RTSP_URL`      | Camera RTSP stream URL        | `rtsp://<camera-ip>:554/ch01/0`  |
| `MEDIAMTX_PORT` | WebRTC WHEP port              | `8889`                           |
| `HLS_PORT`      | HLS fallback port             | `8888`                           |
| `PORT`          | Backend server port           | `3000`                           |

---

## 📁 Project Structure

```
5g-lab/
├── frontend/               # React + Vite application
│   └── src/
│       ├── components/     # UI components
│       └── hooks/          # useWhepStream hook (WebRTC)
├── backend/                # Node.js + Express API
│   ├── routes/
│   └── package.json        # CommonJS module config
├── docs/                   # Screenshots and diagrams
└── mediamtx.yml            # MediaMTX streaming config
```

---

## 🏫 Context

Built at the **Private 5G Research Lab, NIST University, Berhampur**, using a Celona-based 5G core infrastructure as part of hands-on network research.

---

## 📄 License

[MIT](LICENSE)

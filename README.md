# AI Program Generator 🪄

A modern web application that transforms your descriptions into production-ready code using the OpenAI GPT-4 API.

## ✨ Features

- 🔑 Secure OpenAI API integration
- 💻 Optimized code generation
- 🎨 Modern and responsive UI
- 📋 Quick code copying
- 🚀 Instant preview
- 🛡️ Robust error handling

## 🚀 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ai-program-generator.git
cd ai-program-generator
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```
Add your OpenAI API key to the `.env` file.

4. Start the development server:
```bash
npm run dev
```

## 🛠️ VPS Deployment

1. Clone the repository on your VPS
2. Install dependencies:
```bash
npm install
```

3. For production use with PM2:
```bash
npm install -g pm2
pm2 start npm --name "ai-generator" -- run dev
pm2 startup
```

4. Firewall configuration:
```bash
sudo ufw allow 3000
```

## 🔧 Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- OpenAI API
- Lucide Icons

## 📝 Usage

1. Enter your OpenAI API key
2. Describe the program you want to generate
3. Click the send button
4. View the generated code and its preview
5. Copy the code with one click

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## 📄 License

MIT

---

Created with ❤️

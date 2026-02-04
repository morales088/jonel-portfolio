# AI Resume Chat Setup Guide

This portfolio includes an AI-powered "Ask me anything" feature that answers questions based on your resume using OpenRouter's free Llama 3 model.

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Free OpenRouter API Key

1. Visit: https://openrouter.ai/
2. Sign up for a free account
3. Go to: https://openrouter.ai/keys
4. Click "Create Key"
5. Copy your API key

### Step 2: Configure Environment Variables

1. Open `.env.local` in your project root
2. Add your API key:

```env
OPENROUTER_API_KEY=sk-or-v1-your-key-here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

3. Save the file

### Step 3: Restart Dev Server

```bash
# Stop the current server (Ctrl+C)
# Start it again
npm run dev
```

### Step 4: Test It!

1. Open http://localhost:3000
2. Type a question like:
   - "What is your experience with Laravel?"
   - "Tell me about your backend skills"
   - "What projects have you worked on?"
3. The AI will answer based on your resume!

## 🎯 How It Works

### Architecture

```
User Question
    ↓
Frontend (app/page.tsx)
    ↓
API Route (app/api/chat/route.ts)
    ↓
OpenRouter API (Llama 3 8B)
    ↓
AI Response (based on resume context)
    ↓
Display to User
```

### Resume Context

- **File**: `lib/resume.ts`
- Contains your complete resume as plain text
- Injected as system prompt to AI
- AI only answers from this context

### Guardrails

✅ **Only resume information**: AI cannot access external knowledge
✅ **Concise responses**: Limited to 1-3 sentences
✅ **Safe fallback**: Returns "That information is not included in my resume" for off-topic questions
✅ **No hallucinations**: Low temperature (0.3) for factual responses

## 🔧 Customization

### Update Your Resume

Edit `lib/resume.ts`:

```typescript
export const resumeContent = `
# YOUR NAME
Your Title

## Add your information here
...
`;
```

### Adjust AI Behavior

Edit `app/api/chat/route.ts`:

```typescript
{
  model: "meta-llama/llama-3-8b-instruct:free",
  temperature: 0.3,  // Lower = more factual (0.0-1.0)
  max_tokens: 200,   // Response length limit
}
```

### Change AI Model

Other free models on OpenRouter:
- `meta-llama/llama-3-8b-instruct:free` (current)
- `mistralai/mistral-7b-instruct:free`
- `google/gemma-7b-it:free`

## 🛡️ Security

✅ **API key stored server-side**: Never exposed to client
✅ **Environment variables**: Not committed to git
✅ **Rate limiting**: Implemented by OpenRouter
✅ **Input validation**: Checks message format

## 💰 Cost

- **Model**: Llama 3 8B Instruct (FREE tier)
- **Provider**: OpenRouter
- **Limits**: Free tier includes generous usage
- **Upgrade**: Pay-as-you-go if needed

## 🐛 Troubleshooting

### "API key not configured"
- Check `.env.local` exists and has the key
- Restart dev server after adding key

### "Failed to get AI response"
- Verify API key is valid at https://openrouter.ai/keys
- Check your internet connection
- View API logs in terminal

### AI responses are off-topic
- Update `lib/resume.ts` with complete information
- AI can only answer what's in the resume

### Responses are too long
- Reduce `max_tokens` in `app/api/chat/route.ts`
- Adjust system prompt for brevity

## 📊 Monitoring

View AI usage:
1. Visit: https://openrouter.ai/activity
2. See request counts, costs, and performance

## 🚀 Production Deployment

### Environment Variables on Vercel

1. Go to your Vercel project settings
2. Navigate to "Environment Variables"
3. Add:
   - `OPENROUTER_API_KEY`: Your API key
   - `NEXT_PUBLIC_SITE_URL`: Your production URL
4. Redeploy

### Update Resume

After deploying, update your resume in `lib/resume.ts` and push to GitHub. Vercel will auto-deploy the changes.

## 🎉 Features

- ✅ AI-powered resume Q&A
- ✅ Free tier (no credit card required)
- ✅ Conversational interface
- ✅ Resume-only context (no hallucinations)
- ✅ Loading states and error handling
- ✅ Production-ready security
- ✅ Mobile responsive

## 📚 Resources

- OpenRouter: https://openrouter.ai/
- Llama 3 Model: https://ai.meta.com/llama/
- API Docs: https://openrouter.ai/docs

---

Need help? Check the console logs or API activity dashboard!

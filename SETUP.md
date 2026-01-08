# Project Setup

## 1. Environment Variables

Create a file named `.env.local` in the root of your project and add the following content.
**Note:** You need to find your **Supabase Anon Key** from your Supabase Dashboard (Settings > API) to complete this.

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_PROJECT_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY_HERE
```

## 2. Supabase Dashboard Configuration

You need to enter the X (Twitter) credentials into the Supabase Dashboard, NOT in this code.

1.  Go to your [Supabase Dashboard](https://supabase.com/dashboard/project/YOUR_PROJECT_ID/auth/providers).
2.  Navigate to **Authentication** -> **Providers**.
3.  Expand **X / Twitter (OAuth 2.0)** (recommended) or **Twitter**.
4.  Enable the provider.
5.  Enter your X/Twitter OAuth 2.0 credentials:
    *   **Client ID**: `YOUR_X_CLIENT_ID`
    *   **Client Secret**: `YOUR_X_CLIENT_SECRET`
6.  Ensure the **Callback URL** in your X Developer Portal matches:
    *   `https://YOUR_PROJECT_ID.supabase.co/auth/v1/callback`
7.  Click **Save**.

## 3. Run the App

```bash
npm run dev
```

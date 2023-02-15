/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  env : {
    DB : "mongodb+srv://fahim:12345@cluster0.kbhfp3r.mongodb.net/?retryWrites=true&w=majority",
    JWT : "THISISTESTHASHKEYHIUHFIUEHFNIEUFNEYGFYMHEFHIH",
    GOOGLE_ID: "218586286013-7pdtqirk5hc6860bupem4u3tnu23v1h0.apps.googleusercontent.com",
    GOOGLE_KEY : "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"
  }
}

module.exports = nextConfig

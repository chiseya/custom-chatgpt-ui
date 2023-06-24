# Custom-ChatGPT-UI

An AI chatbot app built with Next.js. This project depends on the [Custom-ChatGPT-API](https://github.com/chiseya/custom-chatgpt-api).

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- Custom-ChatGPT-API server running. You can clone and set it up from [here](https://github.com/chiseya/custom-chatgpt-api#getting-started).
- Google OAuth2 Client ID and Client Secret  
  (These should be the same as the ones used in the Custom-ChatGPT-API setup)

### Installation

```shell
git clone https://github.com/chiseya/custom-chatgpt-ui.git
cd custom-chatgpt-ui
npm install
```

Next, copy the .env.example file and rename it to .env:

```shell
cp .env.example .env
```

Open the .env file and replace the placeholder values with your actual credentials and necessary variables.

```dotenv
NEXTAUTH_URL="your-nextauth-url"
NEXTAUTH_SECRET="your-nextauth-secret"
GOOGLE_CLIENT_ID="your-client-id"
GOOGLE_CLIENT_SECRET="your-client-secret"
NEXT_PUBLIC_API_BASE_URL="your-api-base-url"
NEXT_PUBLIC_ORGANIZATION_NAME="your-organization-name"
```

- `NEXTAUTH_URL`: The canonical URL of your application.
  - For development, it looks like `http://localhost:3000`.
  - For production, it looks like `https://example.com`.
- `NEXTAUTH_SECRET`: A secret used to encrypt the NextAuth.js JWT. You can quickly create a good value on the command line via this openssl command:
  ```
  openssl rand -base64 32
  ```
- `NEXT_PUBLIC_API_BASE_URL`: The URL of your running Custom-ChatGPT-API server.
- `NEXT_PUBLIC_ORGANIZATION_NAME`: This is only used to display the name of your organization on some pages. Any value is fine!

### Usage

To start development server, run:

```shell
npm run dev
```

To create a production build and start the server, run:

```shell
npm run build
npm start
```

**Note**: Both the development and production servers require the Custom-ChatGPT-API server to be running in the background.

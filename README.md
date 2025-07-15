# SplitSmart - Smart Expense Splitting App

A beautiful, production-ready expense splitting app built with Expo and React Native.

## Features

- 🏠 **Group Management**: Create and manage expense groups
- 💰 **Smart Expense Tracking**: Add expenses with automatic splitting
- 📊 **Analytics**: Detailed spending insights and trends
- 📧 **Automatic Email Notifications**: Seamless email integration
- 💬 **Group Chat**: AI-powered expense assistant
- 🎯 **Budget Goals**: Set and track spending limits
- 📱 **Cross-Platform**: Works on iOS, Android, and Web

## Email Integration

SplitSmart features automatic email notifications for:
- Group invitations
- Expense notifications
- Welcome emails
- Payment reminders

### Email Service Setup

The app supports two email integration methods:

#### 1. Backend API (Recommended for Production)

Set up your own backend API with email sending capabilities:

```typescript
// Example backend endpoint structure
POST /api/emails/invitation
POST /api/emails/expense-notification
POST /api/emails/welcome
```

#### 2. EmailJS (Client-side Alternative)

For quick setup, you can use EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up email templates for:
   - Group invitations (`template_invitation`)
   - Expense notifications (`template_expense`)
   - Welcome emails (`template_welcome`)
3. Configure your environment variables

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Backend API (recommended)
EXPO_PUBLIC_API_URL=https://your-backend-api.com/api
EXPO_PUBLIC_API_KEY=your_api_key

# EmailJS (alternative)
EXPO_PUBLIC_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
EXPO_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
```

### Email Templates

The app uses the following email templates:

1. **Group Invitation**: Sent when users are invited to join groups
2. **Expense Notification**: Sent when new expenses are added
3. **Welcome Email**: Sent to new users upon registration

### Retry Mechanism

The email service includes automatic retry functionality:
- Failed emails are queued for retry
- Exponential backoff strategy
- Maximum 3 retry attempts
- Automatic processing every 10 minutes

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI
- iOS Simulator / Android Emulator (for mobile testing)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

#### Web
```bash
npm run build:web
```

#### Mobile
```bash
# Android
npm run build:android

# iOS
npm run build:ios
```

## Architecture

### Email Service Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   App Context   │───▶│   Email Service  │───▶│  Backend API    │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                │                        │
                                ▼                        ▼
                       ┌──────────────────┐    ┌─────────────────┐
                       │  Retry Queue     │    │   EmailJS       │
                       │  (AsyncStorage)  │    │   (Fallback)    │
                       └──────────────────┘    └─────────────────┘
```

### Key Components

- **AppContext**: Central state management with email integration
- **EmailService**: Handles all email operations with retry logic
- **Storage**: Persistent data storage with AsyncStorage
- **UI Components**: Beautiful, responsive React Native components

## Email Service Features

### Automatic Sending
- No manual intervention required
- Emails sent immediately when actions occur
- Fallback mechanisms for reliability

### Retry Logic
- Failed emails automatically queued
- Exponential backoff strategy
- Persistent retry queue in local storage

### Multiple Providers
- Primary: Backend API integration
- Fallback: EmailJS for client-side sending
- Easy to extend with additional providers

### Template System
- Structured email templates
- Dynamic content injection
- Consistent branding across all emails

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For support, email support@splitsmart.com or create an issue in the repository.
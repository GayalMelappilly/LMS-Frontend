# Learnify Frontend

Learnify is a dynamic Learning Management System (LMS) that allows users to create, sell, and enroll in courses. The frontend of Learnify is built with Next.js, TypeScript, and Tailwind CSS, providing a sleek, responsive, and interactive interface for learners and instructors.

## Features

- **Course browsing**: Users can browse available courses, view detailed information, and enroll easily.
- **Authentication**: Secure login and registration system for students and instructors.
- **Course creation**: Instructors can create, update, and manage their courses.
- **Real-time notifications**: Users are notified in real time about updates or new content through Socket.io.
- **Responsive design**: Fully responsive design to ensure a smooth experience on desktops, tablets, and mobile devices.
- **Payment integration**: Stripe integration for secure payments while purchasing courses.
- **User profiles**: Users can manage their profiles, view enrolled courses, and track learning progress.

## Tech Stack

- **Next.js**: React framework for building the user interface.
- **TypeScript**: Typed superset of JavaScript for a robust and scalable codebase.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Socket.io**: Real-time communication library for notifications.
- **Redux**: State management for managing user and course data.
- **Cloudinary**: Cloud-based service for managing images and videos used in courses.

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

- **Node.js** (v16 or higher)
- **Yarn** (recommended) or **npm**

## Environment Variables

The following environment variables need to be set for the Learnify frontend to work properly:

| Variable                     | Description                                |
| ---------------------------- | ------------------------------------------ |
| `NEXT_PUBLIC_SERVER_URI`      | The URI of the backend API                 |
| `NEXT_PUBLIC_SOCKET_SERVER_URI` | The URI of the socket server              |
| `GOOGLE_CLIENT_ID`            | Google OAuth Client ID                     |
| `GOOGLE_CLIENT_SECRET`        | Google OAuth Client Secret                 |
| `GITHUB_CLIENT_ID`            | GitHub OAuth Client ID                     |
| `GITHUB_CLIENT_SECRET`        | GitHub OAuth Client Secret                 |
| `SECRET`                      | Secret key for session encryption          |

> **Note:** Make sure to add these environment variables to your `.env.local` file in the root directory of your project.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/GayalMelappilly/LMS-Frontend.git
   ```
2. Navigate to the project directory:
   ```bash
   cd LMS-Frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables.
5. Run the development server:
   ```bash
   npm run dev
   ```   

## Deployment

The frontend is deployed using **Vercel** for seamless CI/CD.

To deploy your own copy, follow these steps:

1. **Fork** the repository.
2. **Connect** the repository to your Vercel account.
3. **Add** your environment variables in the Vercel dashboard.
4. **Deploy** the application.

## Contributing

We welcome contributions to Learnify! If you have suggestions, fixes, or improvements, feel free to open a pull request.

### How to Contribute

1. **Fork** the repository.
2. **Create a new branch**:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes.
4. Commit your changes:
  ```bash
  git commit -am 'Add feature'
  ```
5. Push to your branch:
  ```bash
  git push origin feature-branch
  ```
6. Open a pull request.


## Acknowledgements

- **Next.js**: for providing an amazing framework for building React apps.
- **Tailwind CSS**: for enabling fast and responsive UI development.
- **Stripe**: for secure payment integration.
- **Socket.io**: for real-time functionality.
- **Cloudinary**: for seamless media management.


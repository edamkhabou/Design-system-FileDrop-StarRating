# Design System App

This project is a design system application that includes custom emoji design, drag-and-drop functionality for file uploads and element reorganization, and a star rating component.

## Features

- **Custom Emoji Design**: Users can create and save their own emojis using the `EmojiCanvas` and `EmojiPalette` components.
- **Drag and Drop Functionality**: The `FileDropZone` component allows users to upload files by dragging and dropping them into designated areas. The `ReorderableList` component enables users to reorganize elements through drag-and-drop interactions.
- **Star Rating Component**: The `StarRating` component allows users to rate items using a star-based system.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd design-system-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   ```
   npm start
   ```

4. **Open your browser** and navigate to `http://localhost:3000` to view the application.

## Folder Structure

- `public/`: Contains static files such as `index.html` and `favicon.ico`.
- `src/`: Contains the source code for the application.
  - `components/`: Contains reusable components for emoji design, drag-and-drop functionality, and star rating.
  - `styles/`: Contains global styles for the application.
  - `types/`: Contains TypeScript types and interfaces.
- `package.json`: Lists project dependencies and scripts.
- `tsconfig.json`: TypeScript configuration file.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
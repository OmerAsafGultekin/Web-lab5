# React Product Dashboard - Assignment 5

A simple, modular React dashboard built with Vite demonstrating core React fundamentals: component decomposition, state management, controlled inputs, and composition using children props.

## File Organization

The project follows a clean, single-responsibility component structure:

- `src/components/Card.jsx`: A pure layout wrapper component utilizing the `children` prop. It applies border, padding, and elevation styles without knowing what children it renders.
- `src/components/Product.jsx`: A presentational component receiving `title` and `price` via props, wrapping its content inside `Card`.
- `src/components/ProductList.jsx`: Renders the hard-coded product dataset using `.map()` and assigns stable unique keys (`id`).
- `src/App.jsx`: The state root managing `name` (controlled input) and `showProducts` (conditional rendering toggle).
- `src/main.jsx`: React root mount configuration created by Vite.

## Challenges Faced

1. **Composition via `children` Prop:** Designing the `Card` component to remain strictly agnostic of its content while enforcing consistent styling required separating layout logic from product presentation.
2. **Strict Controlled Components:** Managing the user greeting input without direct DOM access required binding input state to `value` and updating purely through `onChange`.
3. **Constraint Adherence:** Building a dynamic UI strictly through primitive `useState` and conditional rendering (`&&`) without relying on lifecycle hooks (`useEffect`) or external libraries.

## How to Run

1. Install dependencies:
   ```bash
   npm install
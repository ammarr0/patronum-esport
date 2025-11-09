import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Onest', 'system-ui', 'sans-serif'],
              onest: ['Onest', 'system-ui', 'sans-serif'],
            },
            colors: {
              brand: {
                bg: '#020016',
                card: '#070322',
                primary: '#8B5CF6',
                primarySoft: '#4C1D95',
                blue: '#3B82F6',
                accent: '#FACC15',
              },
            },
            boxShadow: {
              glow: '0 0 40px rgba(139, 92, 246, 0.45)',
            },
          },
        },
      },
    }),
  ],
})
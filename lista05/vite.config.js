import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/lista05', 
  plugins: [react()],
  // Comente ou remova a linha abaixo durante o desenvolvimento local (npm run dev)
 
})

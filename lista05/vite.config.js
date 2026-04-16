import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Certifique-se de que o repositório no GitHub se chama 'react' e a pasta 'lista05'
  // Se o link for fernandofgs91.github.io/lista05/, mude para '/lista05/'
  base: '/react/lista05/' 
})

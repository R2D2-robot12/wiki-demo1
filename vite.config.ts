import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const ownerName = process.env.GITHUB_REPOSITORY_OWNER
const isUserOrOrgPage = repositoryName === `${ownerName}.github.io`
const base =
  process.env.GITHUB_ACTIONS === 'true' && repositoryName && !isUserOrOrgPage
    ? `/${repositoryName}/`
    : '/'

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
})

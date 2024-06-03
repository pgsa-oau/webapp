
import MillionLint from '@million/lint';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path'; // Add this line
const _plugins = [react(), tsconfigPaths()];
_plugins.unshift(MillionLint.vite())
export default defineConfig({
  plugins: _plugins,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
  // Other Vite configuration options...
});

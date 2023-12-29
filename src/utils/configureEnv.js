import { loadEnv } from 'vite';

export const configureEnv = (
  envPath,
  prefix,
  options
) => {
  const { mode, ssrBuild } = options;
  const envFile = loadEnv(mode, envPath, prefix);
  const viteEnv = {
    BASE_URL: `/${envFile._REPO_NAME}`,
    MODE: mode,
    DEV: mode === 'development',
    PROD: mode === 'production',
    SSR: ssrBuild,
    ...envFile
  };
  delete viteEnv._; // 앱의 디렉토리 위치
  return viteEnv;
};

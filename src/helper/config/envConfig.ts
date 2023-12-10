export const getBaseUrl = (): string => {
  return (
    process.env.BACKEND_PUBLIC_API_BASE_URL || "http://localhost:4000/api/v1"
  );
};

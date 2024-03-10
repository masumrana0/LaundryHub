// import LoadingSpinner from "./LoadingSpinner";

import { cn } from "@/lib/utils";

const Button = ({
  className,
  children,
  isLoading = false,
  ...restProps
}: {
  className?: string;
  children: string;
  isLoading?: boolean;
}) => {
  return (
    <button
      disabled={isLoading}
      type="submit"
      {...restProps}
      className={cn(
        "w-full text-xl px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 ",
        className,
        {
          "flex justify-center items-center gap-2 bg-gray-300 hover:bg-gray-300":
            isLoading,
        }
      )}
    >
      {" "}
      {children}
    </button>
  );
};

export default Button;

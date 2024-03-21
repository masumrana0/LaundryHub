import { cn } from "@/lib/utils";

const Button = ({
  className,
  children,
  isLoading = false,
  onClick,
  ...restProps
}: {
  className?: string;
  children: string;
  isLoading?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      disabled={isLoading}
      type="submit"
      onClick={onClick}
      {...restProps}
      className={cn(
        "w-full text-xl px-4 py-2 bg-green-500 text-white rounded-lg transition-colors duration-300",
        className,
        {
          "flex justify-center items-baseline gap-2 bg-gray-300": isLoading,
          "hover:bg-green-700": !isLoading,
        }
      )}
    >
      {children}
    </button>
  );
};

export default Button;

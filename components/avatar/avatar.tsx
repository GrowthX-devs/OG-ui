export interface AvatarProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  src?: string;
  name?: string;
  badge?: React.ReactNode;
}

export const Avatar: React.FC<AvatarProps> = ({
  size = "md",
  src,
  name,
  badge,
}) => {
  const sizeStyles = {
    xs: "w-6 h-6 text-xs",
    sm: "w-8 h-8 text-sm",
    md: "w-10 h-10 text-base",
    lg: "w-12 h-12 text-lg",
    xl: "w-14 h-14 text-xl",
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative inline-block">
      {src ? (
        <img
          src={src}
          alt={name || "avatar"}
          className={`${sizeStyles[size]} rounded-full object-cover`}
        />
      ) : (
        <div
          className={`
              ${sizeStyles[size]}
              rounded-full
              bg-gray-500
              text-white
              flex
              items-center
              justify-center
              font-medium
            `}
        >
          {name ? getInitials(name) : "??"}
        </div>
      )}
      {badge && (
        <div className="absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4">
          {badge}
        </div>
      )}
    </div>
  );
};

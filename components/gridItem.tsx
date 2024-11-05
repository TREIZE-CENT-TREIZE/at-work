import Link from "next/link";

type GridItemProps = {
  children: React.ReactNode;
  href: string;
  external: boolean;
  className: string;
};

export const GridItem = ({
  children,
  href,
  external,
  className,
}: GridItemProps) => {
  const baseClasses =
    "rounded-lg hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center aspect-square";
  const combinedClasses = `${baseClasses} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  );
};

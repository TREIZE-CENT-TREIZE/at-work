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
    "rounded-lg transition-shadow duration-300 flex flex-col items-center justify-center";
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
    <Link href={href} className={combinedClasses} prefetch>
      {children}
    </Link>
  );
};

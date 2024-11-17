export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator = " / ",
}) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2">
        {items.map((item, index) => (
          <li
            key={index}
            className={`breadcrumb-item ${item.isCurrent ? "font-bold" : ""}`}
          >
            {item.href ? (
              <a href={item.href} className="text-blue-600 hover:underline">
                {item.label}
              </a>
            ) : (
              item.label
            )}
            {index < items.length - 1 && (
              <span className="mx-2">{separator}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

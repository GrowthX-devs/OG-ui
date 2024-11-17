export interface SkeletonProps {
  width?: string;
  height?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = "100%",
  height = "20px",
}) => {
  return <div className="skeleton" style={{ width, height }}></div>;
};

import { cn } from "@/lib/utils";
import { TCommonProps } from "@/types/common.type";

const Container = ({
  className,
  parentClass,
  children,
  id,
}: TCommonProps & { parentClass?: string }) => {
  return (
    <div className={cn("w-full", parentClass)}>
      <div
        id={id}
        className={cn(
          "container mx-auto px-2.5 sm:px-4 lg:px-6 2xl:px-2 py-10 lg:py-16",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;

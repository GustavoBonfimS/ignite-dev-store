import Skeleton from "@/components/skeleton";

function HomeLoading() {
  return (
    <div className="grid h-full grid-cols-9 grid-rows-6 gap-6">
      <Skeleton className="row-span-6 col-span-6 h-[856px]" />
      <Skeleton className="row-span-3 col-span-3" />
      <Skeleton className="row-span-3 col-span-3" />
    </div>
  );
}

export default HomeLoading;

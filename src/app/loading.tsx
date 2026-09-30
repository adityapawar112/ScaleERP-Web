import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto p-8 max-w-5xl space-y-8 animate-in fade-in duration-500">
      <div className="space-y-4">
        <Skeleton className="h-12 w-[250px] sm:w-[400px]" />
        <Skeleton className="h-4 w-[200px] sm:w-[300px]" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Skeleton className="h-[200px] w-full rounded-lg" />
        <Skeleton className="h-[200px] w-full rounded-lg" />
        <Skeleton className="h-[200px] w-full rounded-lg" />
      </div>
      
      <div className="space-y-4 mt-8">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-8 w-[80%]" />
      </div>
    </div>
  )
}

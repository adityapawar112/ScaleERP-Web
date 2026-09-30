import { Camera, Video } from "lucide-react";

export function MediaPlaceholder({ description, type = "image" }: { description: string, type?: "image" | "video" }) {
  const Icon = type === "video" ? Video : Camera;
  return (
    <div className="w-full aspect-video bg-muted/30 border-2 border-dashed border-border/50 rounded-xl flex flex-col items-center justify-center p-6 text-center text-muted-foreground my-8 not-prose">
      <Icon className="w-10 h-10 mb-4 opacity-50" />
      <p className="font-medium">{type === "video" ? "Video" : "Image"} Placeholder</p>
      <p className="text-sm opacity-70 max-w-lg">{description}</p>
    </div>
  );
}

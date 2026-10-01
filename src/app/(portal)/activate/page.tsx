import { redirect } from "next/navigation";

export default function PublicActivateRedirect() {
  redirect("/admin/activate");
}

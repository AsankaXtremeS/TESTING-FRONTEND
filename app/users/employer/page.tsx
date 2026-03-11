import { redirect } from "next/navigation";

// /users/employer → redirect to dashboard
export default function EmployerRootPage() {
  redirect("/users/employer/dashboard");
}
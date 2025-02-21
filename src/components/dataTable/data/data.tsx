import { TBadgeVariants } from "@/components/ui"

export const labels: {
  value: string,
  label: string,
  badge: TBadgeVariants
}[] = [
    {
      value: "approved",
      label: "Approved",
      badge: "default"
    },
    {
      value: "rejected",
      label: "Rejected",
      badge: "destructive"
    },
  ]
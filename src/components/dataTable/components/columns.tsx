import { ColumnDef } from "@tanstack/react-table"
import { Badge, Checkbox } from "@/components/ui/"
import { labels } from "../data/data"
import { Bill, Legislator } from "../data/schema"
import { DataTableColumnHeader } from "./dataTableColumnHeader"
import { DataTableRowActions, DataTableRowActionsLegislator } from "./dataTableRowActions"

export const BillsColumns: ColumnDef<Bill>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Bill Title" />
    ),
    cell: ({ row }) => {
      const hasBeenVoted = !!row.original.votesResult[0].voteId
      const isApproved = hasBeenVoted && row.original.votesResult[0]?.result.support > row.original.votesResult[0]?.result.oppose
      const label = labels.find(label => {
        if (isApproved) return label.value === 'approved'
        else return label.value === 'rejected'
      })

      return (
        <div className="flex space-x-2">
          {hasBeenVoted && label && <Badge variant={label.badge} className="uppercase" >{label.label}</Badge>}
          <div className="max-w-[500px] truncate font-medium">{row.getValue("title")}</div>
        </div>
      )
    },
    enableHiding: false,
  },
  {
    accessorKey: "support",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Supporters" />
    ),
    cell: ({ row }) => {
      const votesResult = row.original.votesResult;

      return (
        <div className="flex space-x-2">
          <span className="w-[80px] ">
            {!!votesResult?.[0] && votesResult[0].result.support + ' votes'}
            {!votesResult?.[0] && ' - '}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "opposer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Opposers" />
    ),
    cell: ({ row }) => {
      const votesResult = row.original.votesResult;
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {!!votesResult?.[0] && votesResult[0].result.oppose + ' votes'}
            {!votesResult?.[0] && ' - '}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "sponsor",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sponsor" />
    ),
    cell: ({ row }) => {
      const sponsor = row.original.sponsor;
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {sponsor?.name ?? ' - '}
          </span>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]

export const LegislatorsColumns: ColumnDef<Legislator>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Legislator name" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <div className="max-w-[500px] truncate font-medium">{row.original.name}</div>
        </div>
      )
    },
    enableHiding: false,
  },
  {
    accessorKey: "support",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Supported bills" />
    ),
    cell: ({ row }) => {
      const supportedBills = row.original.total.support;

      return (
        <div className="flex space-x-2">
          <span className="w-[80px] ">
            {supportedBills}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: "opposer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Opposed Bills" />
    ),
    cell: ({ row }) => {
      const opposedBills = row.original.total.oppose;;
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {opposedBills}
          </span>
        </div>
      )
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActionsLegislator row={row} />,
  },
]

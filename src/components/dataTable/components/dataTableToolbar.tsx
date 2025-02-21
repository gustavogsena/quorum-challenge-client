import { Table } from "@tanstack/react-table"
import { X } from "lucide-react"
import { Button, Input } from "@/components/ui"
import { DataTableViewOptions } from "./dataTableViewOptions"
import { COLUMNS_MAP } from "@/utils/constants"

interface DataTableToolbarProps<TData> {
  table: Table<TData>,
  tableName: keyof typeof COLUMNS_MAP
}



export function DataTableToolbar<TData>({
  table,
  tableName
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          className="h-8 w-[150px] lg:w-[250px]"
          placeholder="Filter..."
          value={(table.getColumn(COLUMNS_MAP[tableName])?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn(COLUMNS_MAP[tableName])?.setFilterValue(event.target.value)
          }
        />
        {isFiltered && (
          <Button variant="ghost" onClick={() => table.resetColumnFilters()} className="h-8 px-2 lg:px-3">
            Reset <X />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  )
}

import { ModeToggle } from "@/components/modeToogle";
import { BillsColumns, LegislatorsColumns } from "@/components/dataTable/components/columns";
import { DataTable } from "@/components/dataTable/components/dataTable";
import { useLoaderData } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card"
import quorum from "@/assets/quorum.png"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export default function Home() {
  const { legislators, bills } = useLoaderData() as { bills: any[], legislators: any[] };


  return (
    <div className="w-full">
      <div className="md">
        <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
          <div className="flex items-center justify-between space-y-2">
            <div>
              <div className="flex gap-2 items-center">
                <img src={quorum} alt='Quorum logo' className="w-9 " />
                <h2 className="text-2xl font-bold tracking-tight">Quorum</h2>
              </div>
              <p className="text-muted-foreground">
                Government Intelligence Platform
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <ModeToggle />
            </div>
          </div>
          <Tabs defaultValue="bills" className="w-full">
            <TabsList className="grid w-full grid-cols-2 ">
              <TabsTrigger value="bills">Bills</TabsTrigger>
              <TabsTrigger value="legislators">Legislators</TabsTrigger>
            </TabsList>
            <TabsContent value="bills" >
              <Card>
                <CardContent className="py-6 space-y-2">
                  <DataTable data={bills ?? []} columns={BillsColumns} tableName="bills" />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="legislators">
              <Card>
                <CardContent className="py-6 space-y-2">
                  <DataTable data={legislators ?? []} columns={LegislatorsColumns} tableName="legislators" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

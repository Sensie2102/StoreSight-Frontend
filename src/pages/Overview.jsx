import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function Overview() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Overview</h1>

      <Card>
        <CardHeader>
          <CardTitle>Overview Content</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This is the overview page content. You can add more components and information here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
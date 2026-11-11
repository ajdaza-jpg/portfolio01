import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-background">
      <div className="max-w-md w-full space-y-6 text-center">
        {/* Header Section */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Welcome to Front-End!</h1>
          <p className="text-lg text-muted-foreground">Student Profile Overview</p>
        </div>

        {/* Info Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Alleo Daza</CardTitle>
            <CardDescription>BSCS-2A</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Welcome to my portfolio application built with Next.js, TypeScript, and shadcn/ui components.
            </p>
            
            <div className="flex justify-center gap-3">
              <Button>Explore Projects</Button>
              <Button variant="outline">Contact Me</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
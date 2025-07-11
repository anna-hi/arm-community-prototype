import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NavBar from "@/components/NavBar"
import { MainButton } from "@/components/MainButton"
import Footer from "@/components/Footer"

export default function ProjectProposal() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="mb-12">Project Proposal</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* New Proposal */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">New Proposal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">Submit your Proposal for open Project Calls here.</p>
              <MainButton text="Create New Proposal" className="w-full text-black" />
            </CardContent>
          </Card>

          {/* Current Proposals */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">Current Proposals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">You are not currently associated with any Proposals.</p>
            </CardContent>
          </Card>

          {/* Current Reviews */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">Current Reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">You are not currently associated with any Reviews.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

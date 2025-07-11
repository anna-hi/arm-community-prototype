import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import NavBar from "@/components/NavBar"

export default function ProjectProposal() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Project Proposal</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* New Proposal */}
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-gray-900">New Proposal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">Submit your Proposal for open Project Calls here.</p>
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3">
                Submit Proposal
              </Button>
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
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">ARM</span>
                </div>
                <span className="font-semibold">ARM INSTITUTE</span>
              </div>
              <p className="text-gray-400 text-sm">
                Advancing American Robotics Manufacturing through Innovation, Education and Collaboration
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Address</h4>
              <p className="text-gray-400 text-sm">
                Mill 19 at Hazelwood Green
                <br />
                4720 Technology Dr, Suite 300
                <br />
                Pittsburgh, PA 15219
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Phone</h4>
              <p className="text-gray-400 text-sm">412.322.7800</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Need Help?</h4>
              <Button className="bg-orange-500 hover:bg-orange-600">Contact ARM</Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

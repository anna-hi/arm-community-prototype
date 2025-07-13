import MemberDetail from "./member-detail"

interface PageProps {
  params: {
    id: string
  }
}

export default function MemberDetailPage({ params }: PageProps) {
  return <MemberDetail memberId={params.id} />
}

import ProjectCallTemplate from "../project-call-template/project-call-template";

export default function CoreTechDraftProjectCall() {
  const title = "2024 AI Data Foundry Tech Project Call";
  const description = [
    "The ARM Institute is soliciting submissions that respond to specific needs of the manufacturing industry and the Department of Defense (DoD). This project call is seeking projects to make focused investments in the Special Topic Areas (STA) described below.",
    "These Special Topic Areas have been derived from the Institute's prior research, with guidance from the Institute's Technology Advisory Committee (TAC) and partners. Project teams are encouraged to leverage successfully completed ARM Institute technology development programs as well as Consortium Developed Intellectual Property (CDIP) statements.",
  ];
  const proposalTimeline = [
    { month: "May", date: "8", title: "Project Calls Open" },
    { month: "May", date: "28", title: "Project Call Webinar and Q&A" },
    { month: "June", date: "12", title: "Concept Paper Submission Deadline" },
    {
      month: "June",
      date: "28",
      title: "Invitations for Presentation Submission",
    },
  ];

  return (
    <ProjectCallTemplate
      title={title}
      description={description}
      proposalTimeline={proposalTimeline}
    />
  );
}

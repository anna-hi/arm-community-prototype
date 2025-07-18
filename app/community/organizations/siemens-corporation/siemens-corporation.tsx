"use client";

import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import CDIPCard from "@/components/ui/cdip-card";
import ContactCard from "@/components/ui/contact-card";
import { IoMdMail } from "react-icons/io";
import { OrangeButton } from "@/components/OrangeButton";

const projects = [
	{
		id: "TEC-19-04-F-15",
		status: "Completed",
		title: "Autonomous Multi-Tool Head Surface Prep",
		tags: ["Surface Preparation", "Multi-Robot", "Modeling"],
		leadOrg: "Siemens Corporation",
		principalInvestigator: "Sudhir Rajagopalan",
		imageSrc: "/images/cdip/cdip-image.png",
		isFavorite: true,
	},
	{
		id: "T-24-C19-01-01",
		status: "Completed",
		title: "Autonomous Coating with Realtime Control and Inspection",
		tags: ["Robot Integration", "Multi-Robot", "Robot Control"],
		leadOrg: "Siemens Corporation",
		principalInvestigator: "Shashank Tamaskar",
		imageSrc: "/images/cdip/cdip-image.png",
		isFavorite: true,
	},
	{
		id: "TEC-20-02-F-12",
		status: "Completed",
		title: "Robotic Application of Anti-Microbial Copper Coating",
		tags: ["Robotics", "Application System", "Robot Control"],
		leadOrg: "Siemens Corporation",
		principalInvestigator: "Mark Burhop",
		imageSrc: "/images/cdip/cdip-image.png",
		isFavorite: true,
	},
];

const contacts = [
	{
		id: "prithvi-akella",
		name: "Prithvi Akella",
		company: "Siemens Corporation",
		title: "Research Professional",
		email: "prithvi.akella@siemens.com",
		isFavorite: true,
	},
	{
		id: "shashank-tamaskar",
		name: "Shashank Tamaskar",
		company: "Siemens Corporation",
		title: "(No Title Provided)",
		email: "shashank.tamaskar@siemens.com",
		isFavorite: true,
	},
	{
		id: "sudhir-rajagopalan",
		name: "Sudhir Rajagopalan",
		company: "Siemens Corporation",
		title: "(No Title Provided)",
		email: "sudhir.rajagopalan@siemens.com",
		isFavorite: true,
	},
];

export default function SiemensCorporationPage() {
	return (
		<>
			<main className="max-w-7xl mx-auto px-12 py-12">
				{/* Organization Navbar */}
				<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-20 gap-8">
					<div className="flex items-center gap-6">
						<div className="w-32 h-32 bg-[#1AB0B0] flex items-center justify-center rounded">
							<span className="text-white text-3xl font-bold">SIEMENS</span>
						</div>
						<div>
							<h1 className="text-3xl font-bold text-gray-900 mb-2">
								Siemens Corporation
							</h1>
							<p className="text-gray-500 text-lg mb-2">
								Princeton, New Jersey
							</p>
							<div className="inline-block bg-[#e8f3ff] rounded-sm px-2 py-1 text-sm font-medium">
								Platinum
							</div>
						</div>
					</div>
					<Card className="w-full !h-40 md:w-80 bg-gray-50 border-none rounded-lg">
						<CardContent className="flex flex-col justify-between">
							<div className="text-base font-normal text-gray-900 mb-2">
								Administrative Contact:
							</div>
							<div className="flex items-center gap-3">
								<div>
									<p className="text-xl font-montserrat font-semibold text-black">Jeff Staples</p>
									<a
										href="mailto:jstaples@siemens.com"
										className="flex items-center gap-2 text-blue-700 underline text-sm"
									>
										<IoMdMail className="w-6 h-6 text-[#008EC1]" />
										jstaples@siemens.com
									</a>
								</div>
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Projects Completed/Performing */}
				<div className="mb-20">
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-2xl font-semibold text-gray-900">
							Projects Completed/Performing
						</h2>
						<OrangeButton
							className="flex items-center"
							text="See More"
						/>
					</div>
					<div className="grid md:grid-cols-3 gap-6">
						{projects.map((project, idx) => (
							<CDIPCard
								key={project.id + idx}
								status={project.status as "Completed" | "Performing"}
								title={project.title}
								code={project.id}
								tags={project.tags}
								leadOrg={project.leadOrg}
								principalInvestigator={project.principalInvestigator}
								imageSrc={project.imageSrc}
								// isFavorite={project.isFavorite}
							/>
						))}
					</div>
				</div>

				{/* Contacts */}
				<div className="mb-12">
					<div className="flex items-center justify-between mb-6">
						<h2 className="text-2xl font-semibold text-gray-900">Contacts</h2>
						<OrangeButton
							className="flex items-center"
							text="See More"
						/>
					</div>
					<div className="grid md:grid-cols-3 gap-6">
						{contacts.map((contact) => (
							<ContactCard key={contact.id} member={contact} />
						))}
					</div>
				</div>
			</main>
		</>
	);
}
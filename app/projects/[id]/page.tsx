import { SectionSplit } from "@/components/SectionSplit";
import { Banner } from "@/modules/Banner";
import { ProjectSingle } from "./modules/ProjectSingle";
import { projects } from "../page";
import { SimilarProjets } from "./modules/SimilarProjets";
export default function Work({params}:{params:{id:string}})
{
    const project = projects.find(project=>project.id === Number(params.id))
    const similarProjects = projects.filter((p)=>p.location === project?.location &&  p.id !==project?.id).slice(0,3);

    return (
    <>
        <Banner/>
        <SectionSplit>
            {project && <ProjectSingle {...project}/>}
        </SectionSplit>
        {similarProjects.length >0 && <SimilarProjets projects={similarProjects}/>}
    </>
    )
}
import { Container } from "@/components/Container"
import { SectionSplit } from "@/components/SectionSplit"
import { Banner } from "@/modules/Banner"
import Link from "next/link"
import React from "react"
import { Projects as Project } from "./components/Projects"
import { Filtering } from "./components/Filtering"
import { SearchParams } from "@/types/route"
import { PaginationControl } from "./components/PaginationControl"

export default function ProjectsPage(
    { searchParams, }: {
        searchParams: { [key: string]: string | string[] | undefined };
    }) {
    const page = searchParams[SearchParams.PAGE] ?? "1";
    const perPage = searchParams[SearchParams.PER_PAGE] ?? "6";

    const start = (Number(page) - 1) * Number(perPage);
    const end = start + Number(perPage);

    const totalPages = Math.ceil(projects.length / Number(perPage));

    const years = projects.map((project) => project.year);
    const locations = projects.map((project) => project.location);

    const FilteredProjects = projects.filter((project) => {
        const year = searchParams[SearchParams.YEAR];
        const location = searchParams[SearchParams.LOCATION];

        if (year && location) {
            return project.year == Number(year) && project.location == location;
        } else if (year) {
            return project.year == Number(year);
        } else if (location) {
            return project.location === location;
        } else {
            return true;
        }
    })
    const PaginatedProjects = FilteredProjects.slice(start, end);
    const isPaginationVis = FilteredProjects.length > Number(perPage);
    return (
        <>
            <Banner />
            <SectionSplit>
                <Container>
                    <h1 className="mb-4">
                        Our Work
                    </h1>
                    <Filtering years={years} locations={locations} />
                    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-12">
                        {PaginatedProjects.map((project) => (
                            <Link href={`/projects/${project.id}`} key={project.title}>
                                <Project {...project} />
                            </Link>
                        ))}
                    </div>
                    {isPaginationVis && 
                        <PaginationControl 
                            page={page} 
                            perPage={perPage} 
                            hasNextPage={projects.length > end} 
                            hasPrevPage={start > 0} 
                            TotalPages={totalPages} 
                        />
                    }

                </Container>
            </SectionSplit>
        </>
    )
}

const projects = [
    {
        id: 1,
        title: "Project 1",
        year: 2021,
        location: "Lemesos",
        images: ["/hero.jpg"],
    },
    {
        id: 2,
        title: "Project 2",
        year: 2020,
        location: "Nicosia",
        images: ["/hero2.jpg"],
    },
    {
        id: 3,
        title: "Project 3",
        year: 2023,
        location: "Pafos",
        images: ["/hero3.jpg"],
    },
    {
        id: 4,
        title: "Project 4",
        year: 2021,
        location: "Lemesos",
        images: ["/hero.jpg"],
    },
    {
        id: 5,
        title: "Project 5",
        year: 2020,
        location: "Nicosia",
        images: ["/hero2.jpg"],
    },
    {
        id: 6,
        title: "Project 6",
        year: 2023,
        location: "Pafos",
        images: ["/hero3.jpg"],
    },
    {
        id: 7,
        title: "Project 7",
        year: 2021,
        location: "Lemesos",
        images: ["/hero.jpg"],
    },
    {
        id: 8,
        title: "Project 8",
        year: 2020,
        location: "Nicosia",
        images: ["/hero2.jpg"],
    },
    {
        id: 9,
        title: "Project 9",
        year: 2023,
        location: "Pafos",
        images: ["/hero3.jpg"],
    },
    {
        id: 10,
        title: "Project 10",
        year: 2021,
        location: "Lemesos",
        images: ["/hero.jpg"],
    },
    {
        id: 11,
        title: "Project 11",
        year: 2020,
        location: "Nicosia",
        images: ["/hero2.jpg"],
    },
    {
        id: 12,
        title: "Project 12",
        year: 2023,
        location: "Pafos",
        images: ["/hero3.jpg"],
    },
]
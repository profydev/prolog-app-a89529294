import styled from "styled-components";
import { breakpoint, color, space } from "@styles/theme";
import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import Image from "next/image";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: ${space(6)};

  // reset list styles
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${breakpoint("desktop")}) {
    grid-template-columns: repeat(auto-fit, 400px);
  }
`;

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  color: ${color("error", 700)};
  font-size: 0.875rem;
  font-weight: 500;
  gap: 0.75rem;
  border: 1px solid ${color("error", 300)};
  padding: 1rem;
  border-radius: 8px;
  background-color: ${color("error", 25)};
`;

const ErrorButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  gap: 0.75rem;
  white-space: nowrap;
  background: transparent;
  border: none;
  color: ${color("error", 700)};
  margin-left: auto;
`;

export function ProjectList() {
  const { data, isLoading, isError, refetch } = useGetProjects();

  if (isLoading) {
    return <div>Loading</div>;
  }

  // eslint-disable-next-line no-constant-condition
  if (isError) {
    return (
      <ErrorWrapper className="py-4 pl-4.5 pr-5">
        <Image
          src="/icons/alert-circle.svg"
          alt="alert"
          width={16}
          height={16}
        />
        There was a problem while loading the project data
        <ErrorButton onClick={() => refetch()}>
          Try again
          <Image
            src="/icons/arrow-right-red.svg"
            alt="right-arrow"
            width={12}
            height={12}
          />
        </ErrorButton>
      </ErrorWrapper>
    );
  }

  return (
    <List>
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </List>
  );
}

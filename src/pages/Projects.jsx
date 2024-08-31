import OfficeProjectGrid from '../components/projects/OfficeProject';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import { ProjectsProvider } from '../context/ProjectsContext';

const Projects = () => {
	return (
		<ProjectsProvider>
			<div className="container mx-auto">
				<OfficeProjectGrid />
			</div>
			<div className="container mx-auto">
				<ProjectsGrid />
			</div>
			
		</ProjectsProvider>
	);
};

export default Projects;

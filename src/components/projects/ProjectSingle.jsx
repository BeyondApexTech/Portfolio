import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectSingle = ({ title, category, image, description, link }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, delay: 1 }}
			transition={{
				ease: 'easeInOut',
				duration: 0.7,
				delay: 0.15,
			}}
		>
			<a href={link} target='_blank'>
				<div className="rounded-md shadow-md hover:shadow-lg cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
					<div>
						<img
							src={image}
							className="w-100 rounded-t-xl border-none img-responsive"
							alt="Single Project"
						/>
					</div>
					<div className="text-center px-4 py-6">
						<p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
							{title} <br/>({category})
						</p>
						<span className="text-lg text-ternary-dark dark:text-ternary-light">
							{description}
						</span>
					</div>
				</div>
			</a>
		</motion.div>
	);
};

export default ProjectSingle;

import { createClient } from "../../prismicio";
import { motion } from "framer-motion";
import ProjectDetail from "../../components/Project/ProjectDetail";

export async function getStaticProps({ params, locale, previewData }) {
  const client = createClient({ previewData });

  const project = await client.getByUID("project", params.project);
  const projects = await client.getAllByType("project", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  return {
    props: {
      project,
      projects,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient();

  const projects = await client.getAllByType("project");

  return {
    paths: projects.map((project) => {
      return {
        params: { project: project.uid },
      };
    }),
    fallback: false,
  };
}

const project = ({ router, project, projects }) => {
  // console.log(project.uid);
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      transition={{ delay: 0, default: { duration: 0.5 } }}
      variants={{
        pageInitial: { opacity: 0 },
        pageAnimate: {
          opacity: 1,
        },
        pageExit: {
          opacity: 0,
        },
      }}
      className="absolute top-0 overflow-hidden"
    >
      <ProjectDetail project={project} projects={projects} />
    </motion.div>
  );
};

export default project;

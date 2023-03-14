import { motion } from "framer-motion";
import { createClient } from "../prismicio";
import ProjectList from "../components/Project/ProjectList";

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const projects = await client.getAllByType("project", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
  });

  return {
    props: { projects },
  };
}

const projects = ({ router, projects }) => {
  return (
    <>
      <motion.div
        key={router.route}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <ProjectList projects={projects} />
      </motion.div>
    </>
  );
};

export default projects;

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FREE Internship",
    category: "Web Development",
    
    image: "/projects/internship.jpg",
  },
  {
    title: "Software Development Training with Live Projects",
    category: "Custom Software",
   
    image: "/projects/software-training.jpg",
  },
  {
    title: "Career Building",
    category: "Mobile Development",
   
    image: "/projects/career.jpg",
  },
  {
    title: "Live Project Training",
    category: "Enterprise Software",
   
    image: "/projects/live-project.jpg",
  },
  {
    title: "Internship Support",
    category: "Web Application",
    
    image: "/projects/support.jpg",
  },
  {
    title: "Dashboard Portfolio",
    category: "Cloud Solution",
  
    image: "/projects/dashboard.jpg",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Projects That Deliver Results
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore some of our successful projects that have transformed
            businesses and delighted clients.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ExternalLink className="w-5 h-5 text-black" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-primary text-sm font-medium">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-2 mb-3">
                  {project.title}
                </h3>
               
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Want to see more? Let’s discuss your project
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}

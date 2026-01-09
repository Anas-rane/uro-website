import { motion } from "framer-motion";

import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Shield,
  Headphones,
  ArrowRight,
  Grid,
  Database,
  User,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Data & Analytics",
    description:
      "Data Science, Machine Learning, Data Analysis, Python / R, Power BI, Advanced Excel",
    
  },
  {
    icon: Globe,
    title: "Software & Web Development",
    description:
      "Web Development, ASP.NET (C#), Python Django, C / C++, Java / PHP, Data Structures",
      },
  {
    icon: Database,
    title: "Database & Systems",
    description:
      "DBMS, SQL / MySQL, Android Development, Networking, Advanced Networking",
    },
  {
    icon: Grid,
    title: "Excel, Power BI & SQL",
    description:
      "Power Query, Data Modeling, DAX & Pivot Tables, Dashboards, DAX Formulas, Professional Reports, Data Connections, SELECT Queries, Joins, Aggregation, Subqueries",
      },
  {
    icon: User,
    title: "Office & Accounting",
    description:
      "MS Office, CCC / CCC+, Tally Prime with GST",
      },
  {
    icon: Shield,
    title: "Python",
    description:
      "Pandas & NumPy, Data Cleaning, Visualization, Mini Projects",
    },
];


const ServicesSection = () => {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-4">
            Comprehensive IT Solutions for Your Business
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a full spectrum of IT services designed to help your
            business thrive in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 bg-hero-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;




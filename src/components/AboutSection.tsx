import { motion } from "framer-motion";
import { Users, Award, Clock, Globe } from "lucide-react";

const stats = [
  { icon: Users, value: "200+", label: "Happy Clients" },
  { icon: Award, value: "500+", label: "Projects Completed" },
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Globe, value: "15+", label: "Courses" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Technology Partner in India
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
             
            </p>
            <p className="text-muted-foreground mb-8">
              URO Computer WebSoft Solution is renowned for undertaking software-based projects with the aim of reliability and satisfaction to the companies & clients. The company’s vision is to put thorough roots in the IT sector and its advancements. With the objective of persuading the current vision, it's turning out to be the most efficient and trusted service provider to the clients by providing cost effective project and with best after sale services & consultancy to the firm. Their mission defines the way of procurement of knowledge and application of this to the practical world.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {["Innovation First", "Quality Assured", "Client Focused", "Timely Delivery"].map(
                (value) => (
                  <div
                    key={value}
                    className="flex items-center gap-2 text-foreground"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="font-medium">{value}</span>
                  </div>
                )
              )}
            </div>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-display text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

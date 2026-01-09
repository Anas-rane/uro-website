import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    content:
      "33 2nd Floor, Uma Complex Above Domino's Pizza, Uma Char Rasta Waghodia Road, Vadodara - 390019",
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 9033 914914",
  },
  {
    icon: Mail,
    title: "Email Us",
    content: "admin@urocomputerwebsoftsolution.in",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon - Sat: 9:00 AM - 7:00 PM",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-muted-foreground text-lg">
            Reach out to us through the details below and our team will connect
            with you shortly.
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {contactInfo.map((info) => (
            <div
              key={info.title}
              className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <info.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{info.title}</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  {info.content}
                </p>
              </div>
            </div>
          ))}

          {/* Trust Badge */}
          <div className="bg-hero-gradient rounded-xl p-6 text-primary-foreground">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 className="w-8 h-8" />
              <h4 className="font-bold text-lg">
                Free Consultation
              </h4>
            </div>
            <p className="text-sm opacity-90">
              Get a free 30-minute consultation with our experts to discuss your
              project requirements and explore the best solutions.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

 import React from "react";

function Contact() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">

      <div className="max-w-xl w-full bg-white/5 backdrop-blur-lg border border-sky-500/20 rounded-2xl shadow-2xl shadow-sky-500/10 p-8 md:p-12 space-y-8 hover:scale-[1.02] transition-transform duration-300">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-sky-400 border-b border-sky-500 pb-3 w-fit">
          Contact
        </h2>

        {/* CONTACT LINKS */}
        <div className="space-y-5 text-lg">

          {/* EMAIL */}
          <a
            href="mailto:midhunam501@gmail.com"
            className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition-colors duration-300"
          >
            📧 <span>Email</span>
          </a>

          {/* PHONE */}
          <a
            href="tel:7306301781"
            className="flex items-center gap-3 text-gray-300 hover:text-sky-400 transition-colors duration-300"
          >
            📞 <span>Call Me</span>
          </a>

        </div>

        {/* EXTRA NOTE */}
        <p className="text-sm text-gray-400">
          Feel free to reach out for collaboration or project opportunities 🚀
        </p>

      </div>

    </section>
  );
}

export default Contact;
type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Joshua John",
    fullName: "Joshua John",
    email: "joshua.v.john@gmail.com",
  },
  hero: {
    name: "Josh",
    p: ["I am a Computer Science & Business student at the University of Maryland and an aspiring software engineer! "],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "About Me",
      h2: "Overview.",
      content: `I'm a dedicated software developer and Computer Science 
      student at the University of Maryland, with a strong foundation in 
      Java, Python, JavaScript, and several other programming languages. 
      I have practical experience building AI applications, user interfaces,
       and predictive models, leveraging tools like PyCharm, Next.js, Flask, Django, and 
       various AWS services. My internships at DoorList, Headstarter AI, 
       and Xficient Inc. have honed my skills in app development, 
       data analysis, and client collaboration. As a leader in 
       various student organizations, I've demonstrated my ability 
       to manage projects and drive initiatives. Let's collaborate 
       to create innovative solutions that make a real impact!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "Whats next.",
      h2: "Upcoming.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};

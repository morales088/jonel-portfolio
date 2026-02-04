"use client";

import { useState, useEffect, useRef } from "react";
import Avatar from "@/components/Avatar";
import ChatInput from "@/components/ChatInput";
import NavPill from "@/components/NavPill";
import ScrollToTop from "@/components/ScrollToTop";
import MessageBubble from "@/components/MessageBubble";
// import Banner from "@/components/Banner";
import { MeIcon, ProjectsIcon, SkillsIcon, FunIcon, ContactIcon } from "@/components/icons/Icons";
import MeSection from "@/components/sections/MeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FunSection from "@/components/sections/FunSection";
import ContactSection from "@/components/sections/ContactSection";

type Section = "me" | "projects" | "skills" | "fun" | "contact" | null;

interface Message {
  id: string;
  question: string;
  answer: React.ReactNode;
  section: Section;
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [customQuestion, setCustomQuestion] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sectionQuestions = {
    me: "Tell me about yourself",
    projects: "What projects have you worked on?",
    skills: "What are your skills?",
    fun: "Tell me something fun about you",
    contact: "How can I contact you?",
  };

  const handlePillClick = (section: Section) => {
    if (!section) return;

    const question = sectionQuestions[section];
    const newMessage: Message = {
      id: Date.now().toString(),
      question,
      answer: getSectionContent(section),
      section,
    };

    // Replace previous conversation with new one
    setMessages([newMessage]);
    setActiveSection(section);
  };

  const handleCustomQuestion = (question: string) => {
    if (!question.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      question: question.trim(),
      answer:
        "Thanks for your question! Feel free to explore the sections above or ask me anything specific about my work, skills, or experience.",
      section: null,
    };

    // Replace previous conversation with new one
    setMessages([newMessage]);
    setCustomQuestion("");
  };

  const getSectionContent = (section: Section) => {
    switch (section) {
      case "me":
        return <MeSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      case "fun":
        return <FunSection />;
      case "contact":
        return <ContactSection />;
      default:
        return null;
    }
  };

  // Scroll to bottom when new messages are added
  useEffect(() => {
    if (messages.length > 0) {
      setTimeout(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Optional Banner - uncomment to use */}
      {/* <Banner 
        message="This portfolio is unpublished - only you can see it" 
        actionText="Back to Dashboard"
        actionHref="/"
      /> */}
      
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center space-y-6">
          {/* Avatar */}
          <div className="flex justify-center">
            <Avatar />
          </div>

          {/* Greeting */}
          <div>
            <h2 className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">
              Hey, I'm John Neil 👋
            </h2>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-3">
              Software Engineer
            </h1>
            <p className="text-xl text-slate-500">Backend Specialist</p>
          </div>

          {/* Navigation Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            <NavPill
              label="Me"
              icon={<MeIcon />}
              active={activeSection === "me"}
              onClick={() => handlePillClick("me")}
            />
            <NavPill
              label="Projects"
              icon={<ProjectsIcon />}
              active={activeSection === "projects"}
              onClick={() => handlePillClick("projects")}
            />
            <NavPill
              label="Skills"
              icon={<SkillsIcon />}
              active={activeSection === "skills"}
              onClick={() => handlePillClick("skills")}
            />
            <NavPill
              label="Fun"
              icon={<FunIcon />}
              active={activeSection === "fun"}
              onClick={() => handlePillClick("fun")}
            />
            <NavPill
              label="Contact"
              icon={<ContactIcon />}
              active={activeSection === "contact"}
              onClick={() => handlePillClick("contact")}
            />
          </div>

          {/* Welcome Message */}
          {messages.length === 0 && (
            <div className="mt-12 text-center">
              <p className="text-slate-600 text-lg">
                👋 Hi! Click any topic above or ask me a question to get started.
              </p>
            </div>
          )}
        </div>

        {/* Conversation Area */}
        {messages.length > 0 && (
          <div className="max-w-5xl mx-auto px-6 mt-12 pb-12">
            {messages.map((message) => (
              <div key={message.id}>
                <MessageBubble type="question" content={message.question} />
                <MessageBubble
                  type="answer"
                  content={message.answer}
                  isText={typeof message.answer === "string"}
                />
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Sticky Chat Input */}
        <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent pt-8 pb-6">
          <div className="max-w-4xl mx-auto px-6">
            <ChatInput
              value={customQuestion}
              onChange={setCustomQuestion}
              onSubmit={handleCustomQuestion}
            />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
}

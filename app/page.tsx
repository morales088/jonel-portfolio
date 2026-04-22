"use client";

import { useState, useEffect, useRef } from "react";
import Avatar from "@/components/Avatar";
import ChatInput from "@/components/ChatInput";
import NavPill from "@/components/NavPill";
import ScrollToTop from "@/components/ScrollToTop";
import MessageBubble from "@/components/MessageBubble";
import { MeIcon, ProjectsIcon, SkillsIcon, FunIcon, ContactIcon } from "@/components/icons/Icons";
import MeSection from "@/components/sections/MeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import FunSection from "@/components/sections/FunSection";
import ContactSection from "@/components/sections/ContactSection";
import InquiryButton from "@/components/InquiryButton";

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
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const shouldScrollRef = useRef(false);
  const pillsRef = useRef<HTMLDivElement>(null);
  const conversationRef = useRef<HTMLDivElement>(null);
  const [floatingNav, setFloatingNav] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (pillsRef.current) {
        setFloatingNav(window.scrollY > pillsRef.current.offsetTop + pillsRef.current.offsetHeight);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionQuestions: Record<NonNullable<Section>, string> = {
    me: "Tell me about yourself",
    projects: "What projects have you worked on?",
    skills: "What are your skills?",
    fun: "Tell me something fun about you",
    contact: "How can I contact you?",
  };

  const handlePillClick = (section: Section) => {
    if (!section) return;
    setMessages([{
      id: Date.now().toString(),
      question: sectionQuestions[section],
      answer: getSectionContent(section),
      section,
    }]);
    setActiveSection(section);
    setTimeout(() => conversationRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };

  const handleCustomQuestion = async (question: string) => {
    if (!question.trim() || isLoading) return;
    const userQuestion = question.trim();
    setCustomQuestion("");
    setIsLoading(true);
    shouldScrollRef.current = true;
    setMessages([{ id: Date.now().toString(), question: userQuestion, answer: "Thinking…", section: null }]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userQuestion }),
      });
      if (!response.ok) throw new Error("Failed");
      const data = await response.json();
      setMessages([{
        id: Date.now().toString(),
        question: userQuestion,
        answer: data.response || "I'm sorry, I couldn't generate a response.",
        section: null,
      }]);
    } catch {
      setMessages([{
        id: Date.now().toString(),
        question: userQuestion,
        answer: "I'm sorry, I encountered an error. Please try again.",
        section: null,
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const getSectionContent = (section: Section) => {
    switch (section) {
      case "me":       return <MeSection />;
      case "projects": return <ProjectsSection />;
      case "skills":   return <SkillsSection />;
      case "fun":      return <FunSection />;
      case "contact":  return <ContactSection />;
      default:         return null;
    }
  };

  useEffect(() => {
    if (messages.length > 0 && shouldScrollRef.current) {
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
      shouldScrollRef.current = false;
    }
  }, [messages]);

  return (
    <div className="min-h-screen bg-mesh">

      {/* Floating sticky nav */}
      <div className={`fixed top-0 left-0 right-0 z-30 flex justify-center gap-2.5 px-4 pt-3 pb-2 bg-gradient-to-b from-slate-50/95 to-transparent backdrop-blur-sm transition-all duration-300 ${floatingNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}>
        {(["me", "projects", "skills", "fun", "contact"] as Section[]).map((s) => {
          const icons = { me: <MeIcon />, projects: <ProjectsIcon />, skills: <SkillsIcon />, fun: <FunIcon />, contact: <ContactIcon /> };
          const labels = { me: "Me", projects: "Projects", skills: "Skills", fun: "Fun", contact: "Contact" };
          return (
            <NavPill
              key={s}
              label={labels[s!]}
              icon={icons[s!]}
              active={activeSection === s}
              onClick={() => handlePillClick(s)}
            />
          );
        })}
      </div>
      <div className="max-w-4xl mx-auto px-5 pt-20 pb-6">

        {/* Hero */}
        <div className="text-center space-y-6 animate-slideUp">
          <div className="flex justify-center">
            <Avatar />
          </div>

          <div className="space-y-1">
            <p className="text-sm font-semibold text-indigo-500 tracking-widest uppercase">
              Available for work
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              John Neil Morales
            </h1>
            <p className="text-lg text-slate-500 font-medium">Backend Developer · Full-Stack Engineer</p>
          </div>

          {/* Pills */}
          <div ref={pillsRef} className="flex flex-wrap justify-center gap-2.5 pt-4">
            {(["me", "projects", "skills", "fun", "contact"] as Section[]).map((s) => {
              const icons = { me: <MeIcon />, projects: <ProjectsIcon />, skills: <SkillsIcon />, fun: <FunIcon />, contact: <ContactIcon /> };
              const labels = { me: "Me", projects: "Projects", skills: "Skills", fun: "Fun", contact: "Contact" };
              return (
                <NavPill
                  key={s}
                  label={labels[s!]}
                  icon={icons[s!]}
                  active={activeSection === s}
                  onClick={() => handlePillClick(s)}
                />
              );
            })}
          </div>

          {/* Empty state */}
          {messages.length === 0 && (
            <div className="mt-10 animate-fadeIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-slate-200/60 text-slate-500 text-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Click a topic above or ask me anything below
              </div>
            </div>
          )}
        </div>

        {/* Conversation */}
        {messages.length > 0 && (
          <div ref={conversationRef} className="mt-10 pb-6">
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
      </div>

      {/* Sticky input */}
      <div className="sticky bottom-0 bg-gradient-to-t from-slate-50 via-slate-50/95 to-transparent pt-6 pb-5">
        <div className="max-w-2xl mx-auto px-5">
          <ChatInput
            value={customQuestion}
            onChange={setCustomQuestion}
            onSubmit={handleCustomQuestion}
            isLoading={isLoading}
          />
        </div>
      </div>

      <ScrollToTop />
      <InquiryButton />
    </div>
  );
}

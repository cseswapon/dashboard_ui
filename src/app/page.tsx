import Link from "next/link";
import { Button, Card, Tag } from "antd";
import { LayoutDashboard, CheckCircle2, Code2 } from "lucide-react";

export default function Home() {
  const techStack = ["Next.js", "Ant Design", "TypeScript", "Tailwind CSS"];

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 dark:bg-blue-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl w-full text-center space-y-8 animate-in fade-in zoom-in duration-700">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50  border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Frontend Developer Assignment
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight dark:text-black leading-[1.1]">
          Modern Dashboard <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-500">
            Interface Challenge
          </span>
        </h1>

        <div className="max-w-2xl mx-auto mt-8 text-left">
          <Card className="bg-white/50 backdrop-blur-md border-slate-200 dark:border-slate-800  rounded-lg">
            <div className="space-y-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Code2 size={20} className="text-blue-500" /> Assignment
                Overview
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed text-justify">
                This dashboard is being developed as per the requirements of{" "}
                <strong>Easysofts</strong>. It features a functional
                implementation using the latest <strong>React 19</strong>,
                focusing on the core Figma design, Ant Design integration, and
                dynamic theme switching.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                {[
                  "Dark/Light Mode Support",
                  "Ant Design Component Library",
                  "Modular Folder Structure",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300"
                  >
                    <CheckCircle2 size={16} className="text-green-500" /> {item}
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap justify-center gap-2">
                {techStack.map((tech) => (
                  <Tag
                    key={tech}
                    color="blue"
                    className="rounded-md px-3 py-0.5 border-none bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300"
                  >
                    {tech}
                  </Tag>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
          <Link href="/dashboard">
            <Button
              type="primary"
              size="large"
              className="h-14 px-10 rounded-xl bg-blue-600 hover:bg-blue-700 border-none flex items-center gap-2 text-lg font-semibold shadow-lg shadow-blue-500/25 transition-transform hover:scale-105"
            >
              Explore Dashboard <LayoutDashboard size={20} />
            </Button>
          </Link>
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-500 pt-8 uppercase tracking-widest font-semibold">
          Developed by Swapan Kumar Saha
        </p>
      </div>
    </div>
  );
}

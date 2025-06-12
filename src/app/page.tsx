import Experiences from "../components/experiences";
import Projects from "../components/projects";
import UserInfo from "../components/user-info";
import { siteConfig } from "../config/site";

export const revalidate = 60;

export default function Home() {
  return (
    <div className="mx-auto grid min-h-dvh max-w-7xl gap-4 p-4 lg:grid-cols-2">
      <h1 className="sr-only">{siteConfig.name}</h1>

      {/* Information */}
      <div className="flex h-dvh items-center pb-16 lg:fixed">
        <UserInfo />
      </div>

      {/* Experience & Projects */}
      <div className="@container space-y-16 lg:col-start-2 lg:space-y-8 lg:py-16">
        {/* Experience */}
        <Experiences />

        {/* Projects */}
        <Projects />
      </div>
    </div>
  );
}

import Experiences from "../components/experiences";
import UserInfo from "../components/user-info";
import { siteConfig } from "../config/site";

export const revalidate = 60;

export default function Home() {
  return (
    <div className="mx-auto grid min-h-dvh max-w-7xl grid-cols-2 gap-4 p-4">
      <h1 className="sr-only">{siteConfig.name}</h1>

      {/* Information */}
      <div className="fixed flex h-dvh items-center pb-16">
        <UserInfo />
      </div>

      {/* Experience & Projects */}
      <div className="col-start-2 py-16">
        {/* Experience */}
        <Experiences />

        {/* Projects */}
      </div>
    </div>
  );
}

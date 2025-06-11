import { siteConfig } from "@/config/site";
import UserInfo from "@/components/user-info";

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
      <div>
        {/* Experience */}

        {/* Projects */}
      </div>
    </div>
  );
}

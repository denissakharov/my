import Head from "next/head";
import { profile } from "../data/profile";
import { PORT } from "../config";
import { ExperienceItem } from "../data/experience";
import React from "react";

interface HomePageProps {
  experience: ExperienceItem[];
}

const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <div>
      <Head>
        <title>Denis Sakharov | Motorsport Network | Resume | CV</title>
        <meta
          name="description"
          content="Frontend Developer at Motorsport Network. Yekaterinburg, Sverdlovsk, Russia"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-34G0RXZBR4"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-34G0RXZBR4');        
        `,
          }}
        ></script>
      </Head>

      <main className="max-w-screen-md mx-auto pt-6 flex flex-col gap-4">
        <section className="bg-white rounded p-5">
          <h1 className="text-xl font-medium">Denis Sakharov</h1>
          <div className="text-gray-800">
            Front-end Engineer at Motorsport Network
          </div>
          <div className="text-gray-500 text-sm">
            Yekaterinburg, Sverdlovsk, Russia
          </div>
        </section>

        <section className="bg-white rounded p-5">
          <h2 className="text-xl font-medium">About</h2>
          <div className="text-gray-500">
            Front-end Engineer at Motorsport Network
          </div>
          <div className="text-sm">{profile.about}</div>
        </section>

        <section className="bg-white rounded p-5">
          <h2 className="text-xl font-medium">Experience</h2>

          <div className="divide-y">
            {props.experience.map((job) => {
              return (
                <article key={job.id} className="py-3">
                  <header>
                    <h3 className="font-medium">{job.title}</h3>
                    <div className="text-sm">{job.companyName}</div>
                    <time className="text-sm text-gray-500">
                      {[job.startDate, job.endDate].filter(Boolean).join(" - ")}
                    </time>
                    <div className="text-sm text-gray-500">{job.city}</div>
                  </header>
                  <p className="text-sm mt-2">{job.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="bg-white rounded p-5">
          <h2 className="text-xl font-medium">Education</h2>
          <div className="text-gray-500">
            Front-end Engineer at Motorsport Network
          </div>
        </section>
      </main>

      <footer />
    </div>
  );
};

export default HomePage;

export async function getServerSideProps() {
  console.log(`http://127.0.0.1:${PORT}/api/experience`);
  const experience = await fetch(
    `http://127.0.0.1:${PORT}/api/experience`
  ).then((response) => response.json());

  // Pass data to the page via props
  return { props: { experience } };
}

import {
  abakPressDescription,
  freelanceDescription,
  intTechDescription,
  motorsportNetworkDescription,
} from "./experience-descriptions";

export interface ExperienceItem {
  id: string;
  title: string;
  companyName: string;
  city: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
}

export const experience: ExperienceItem[] = [
  {
    id: Math.random().toString(),
    title: "Frontend Developer",
    companyName: "Motorsport Network",
    city: "Yekaterinburg",
    startDate: new Date("15 May 2017"),
    endDate: null,
    description: motorsportNetworkDescription,
  },
  {
    id: Math.random().toString(),
    title: "Full Stack Developer",
    companyName: "Int-tech",
    city: "Yekaterinburg",
    startDate: new Date("15 Dec 2016"),
    endDate: new Date("15 May 2017"),
    description: intTechDescription,
  },
  {
    id: Math.random().toString(),
    title: "Backend Developer",
    companyName: "Freelance",
    city: "Yekaterinburg",
    startDate: new Date("15 May 2016"),
    endDate: new Date("15 Dec 2016"),
    description: freelanceDescription,
  },
  {
    id: Math.random().toString(),
    title: "Junior Backend Developer",
    companyName: "Abak Press",
    city: "Yekaterinburg",
    startDate: new Date("15 Sep 2015"),
    endDate: new Date("15 Dec 2015"),
    description: abakPressDescription,
  },
];

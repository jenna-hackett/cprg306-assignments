
import PageLinks from "../components/PageLinks";
import { linkInfo } from "../components/LinkInformation";

export default function StudentInfo({name}) {
  return (
    <section className="px-4 py-4 border-amber-500 border-2 rounded-md max-w-md mx-4 mt-6">
        <h2 className="text-xl font-bold text-indigo-900 dark:text-indigo-400 mb-2">
          Name: <span className="text-slate-900 dark:text-white">{name}</span>
        </h2>
        <p className="text-slate-900 dark:text-white">
          GitHub Link: <PageLinks {...linkInfo[4]} />
        </p>
    </section>
);
}
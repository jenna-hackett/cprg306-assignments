
import PageLinks from "../components/PageLinks";
import { linkInfo } from "../components/LinkInformation";

export default function StudentInfo({ name }) {
  return (
    <section className="px-4 py-4 border-rose-400 border-4 rounded-lg max-w-md mx-4 mt-10 bg-pink-900">
        <h2 className="text-2xl font-bold text-pink-400 mb-2">
          Name: <span className="text-white">{name}</span>
        </h2>
        <p className="text-white font-medium">
          GitHub Link: <PageLinks {...linkInfo[4]} />
        </p>
    </section>
);
}
import Nav from "../../../components/Nav/Nav";
import Overview from "../../../components/Overview/Overview";
import { projects } from "../../../data/projects";
export default function MessageGenerator() {
  return (
    <>
      <Nav />
      <Overview data={projects[0]} />
    </>
  );
}

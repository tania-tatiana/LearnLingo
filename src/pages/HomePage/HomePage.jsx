import Advantages from "../../components/Advantages/Advantages";
import MainContent from "../../components/MainContent/MainContent";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homePageWrapper}>
      <MainContent />
      <Advantages />
    </div>
  );
}

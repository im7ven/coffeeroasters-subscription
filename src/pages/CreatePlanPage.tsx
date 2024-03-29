import PlanBlock from "../components/create-plan/PlanBlock";
import PlanHero from "../components/create-plan/PlanHero";
import { ServiceBlock } from "../components/shared/ServiceBlock";

const CreatePlanPage = () => {
  return (
    <>
      <PlanHero />
      <ServiceBlock theme="plan" />
      <PlanBlock />
    </>
  );
};

export default CreatePlanPage;

import PlanHero from "../components/create-plan/PlanHero";
import SelectionCardBlock from "../components/create-plan/SelectionCardBlock";
import { ServiceBlock } from "../components/shared/ServiceBlock";

const CreatePlanPage = () => {
  return (
    <>
      <PlanHero />
      <ServiceBlock theme="plan" />
      <SelectionCardBlock />
    </>
  );
};

export default CreatePlanPage;

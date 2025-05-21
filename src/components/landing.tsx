import { FeaturesSectionDemo } from "./features";
import Started from "./Started";
import FeaturePage from "./temp";
import { HeroSectionOne } from "./ui/herosection";

export default function Landing() {
    return (
        <div>
            <HeroSectionOne />
            <FeaturesSectionDemo />
            <FeaturePage />
            <Started />
        </div>
    )
}
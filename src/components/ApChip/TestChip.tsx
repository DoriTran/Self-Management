import { faStar, faTree } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import ApChip from "./ApChip";

interface TestChipProps {
  small?: boolean;
  filled?: boolean;
}

const TestChip: FC<TestChipProps> = ({ small, filled }) => {
  return (
    <>
      <ApChip small={small} filled={filled} label="label" />
      <ApChip small={small} filled={filled} icon={{ icon: faStar }} />
      <ApChip small={small} filled={filled} icon={{ icon: faStar }} label="icon" />
      <ApChip small={small} filled={filled} endIcons={{ icons: [faStar] }} label="end 1 icon" />
      <ApChip small={small} filled={filled} endIcons={{ icons: [faStar, faTree] }} label="end 2 icons" />
      <ApChip small={small} filled={filled} hoverIcons={{ icons: [faStar] }} label="hover 1 icon" />
      <ApChip small={small} filled={filled} hoverIcons={{ icons: [faStar, faTree] }} label="hover 2 icons" />
      <ApChip
        small={small}
        filled={filled}
        color="green"
        icon={{ icon: faStar }}
        hoverIcons={{ icons: [faStar] }}
        label="green"
      />
      <ApChip
        small={small}
        filled={filled}
        color="pink"
        icon={{ icon: faStar }}
        hoverIcons={{ icons: [faStar] }}
        label="pink"
      />
      <ApChip
        small={small}
        filled={filled}
        color="purple"
        icon={{ icon: faStar }}
        hoverIcons={{ icons: [faStar] }}
        label="purple"
      />
      <ApChip
        small={small}
        filled={filled}
        color="red"
        icon={{ icon: faStar }}
        hoverIcons={{ icons: [faStar] }}
        label="red"
      />
      <ApChip
        small={small}
        filled={filled}
        color="orange"
        icon={{ icon: faStar }}
        hoverIcons={{ icons: [faStar] }}
        label="orange"
      />
      <ApChip
        small={small}
        filled={filled}
        color="yellow"
        icon={{ icon: faStar }}
        hoverIcons={{ icons: [faStar] }}
        label="yellow"
      />
      <ApChip
        small={small}
        filled={filled}
        color="blue"
        icon={{ icon: faStar }}
        hoverIcons={{ icons: [faStar] }}
        label="blue"
      />
      <ApChip
        small={small}
        filled={filled}
        color="black"
        icon={{ icon: faStar }}
        hoverIcons={{ icons: [faStar] }}
        label="black"
      />
    </>
  );
};

export default TestChip;

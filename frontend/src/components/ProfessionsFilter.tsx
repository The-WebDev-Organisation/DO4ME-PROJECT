import { professionList } from "@/config/artisan-options-config";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (professions: string[]) => void;
  selectedProfessions: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

const ProfessionsFilter = ({
  onChange,
  selectedProfessions,
  isExpanded,
  onExpandedClick,
}: Props) => {
  const handleProfessionsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedProfession = event.target.value;
    const isChecked = event.target.checked;

    const newProfessionsList = isChecked
      ? [...selectedProfessions, clickedProfession]
      : selectedProfessions.filter((profession) => profession !== clickedProfession);

    onChange(newProfessionsList);
  };

  const handleprofessionsReset = () => onChange([]);

  return (
    <>
      <div className="flex justify-between items-center px-2">
        <div className="text-md font-semibold mb-2">Filter By profession</div>
        <div
          onClick={handleprofessionsReset}
          className="text-sm font-semibold mb-2 underline cursor-pointer text-blue-500"
        >
          Reset Filters
        </div>
      </div>

      <div className="space-y-2 flex flex-col">
        {professionList
          .slice(0, isExpanded ? professionList.length : 7)
          .map((profession) => {
            const isSelected = selectedProfessions.includes(profession);
            return (
              <div className="flex">
                <input
                  id={`profession_${profession}`}
                  type="checkbox"
                  className="hidden"
                  value={profession}
                  checked={isSelected}
                  onChange={handleProfessionsChange}
                />
                <Label
                  htmlFor={`profession_${profession}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                    isSelected
                      ? "border border-green-600 text-green-600"
                      : "border border-slate-300"
                  }`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {profession}
                </Label>
              </div>
            );
          })}

        <Button
          onClick={onExpandedClick}
          variant="link"
          className="mt-4 flex-1"
        >
          {isExpanded ? (
            <span className="flex flex-row items-center">
              View Less <ChevronUp />
            </span>
          ) : (
            <span className="flex flex-row items-center">
              View More <ChevronDown />
            </span>
          )}
        </Button>
      </div>
    </>
  );
};

export default ProfessionsFilter;

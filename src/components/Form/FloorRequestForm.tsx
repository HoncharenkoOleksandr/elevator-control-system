import React, { useState } from "react";
import { useI18n } from "../../i18n/Context";
import * as S from "./styles";

interface FloorRequestFormProps {
  onSubmit: (floor: number) => void;
  disabled?: boolean;
}

export const FloorRequestForm: React.FC<FloorRequestFormProps> = ({
  onSubmit,
  disabled = false,
}) => {
  const { t } = useI18n();
  const [selectedFloor, setSelectedFloor] = useState<number>(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!disabled) {
      onSubmit(selectedFloor);
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormLabel htmlFor="floor-select">{t("floor.select")}</S.FormLabel>
      <S.FormSelect
        id="floor-select"
        value={selectedFloor}
        onChange={(e) => setSelectedFloor(parseInt(e.target.value))}
        disabled={disabled}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <S.FormOption key={i + 1} value={i + 1}>
            {t("floor.floor", { floor: i + 1 })}
          </S.FormOption>
        ))}
      </S.FormSelect>
      <S.FormButton type="submit" disabled={disabled}>
        {t("controls.call")}
      </S.FormButton>
    </S.Form>
  );
};

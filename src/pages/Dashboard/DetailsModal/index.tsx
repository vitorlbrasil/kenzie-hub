import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Label from "../../../components/Label";
import ModalFormContainer from "../../../components/ModalFormContainer";
import ModalFormHeader from "../../../components/ModalFormHeader";
import ModalWrapper from "../../../components/ModalWrapper";
import { ThemeButton } from "../../../style/buttons";
import { HeadlineRed, Title2 } from "../../../style/typography";
import { editTechFormSchema } from "../../../validators/editTechFormSchema";
import { SyntheticEvent, useContext, useRef } from "react";
import { TechContext } from "../../../Providers/TechProvider";
import { ITech } from "../../../Providers/UserProvider/interfaces";

interface IDetailsModalProps {
  setIsDetailsModalVisible: (value: boolean) => void;
  editableTech: ITech;
}

const DetailsModal = ({ setIsDetailsModalVisible, editableTech }: IDetailsModalProps) => {
  const { editTech, deleteTech } = useContext(TechContext);
  const ref = useRef<HTMLDivElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editTechFormSchema),
  });

  const handleClick = (e: SyntheticEvent) => {
    (e.target as Element).className === ref?.current?.className &&
    setIsDetailsModalVisible(false);
  }

  return (
    <ModalWrapper ref={ref} onClick={handleClick}>
      <ModalFormHeader>
        <Title2>Editar tecnologia</Title2>
        <button onClick={() => setIsDetailsModalVisible(false)}>X</button>
      </ModalFormHeader>

      <ModalFormContainer>
        <form
          onSubmit={handleSubmit((data) =>
            editTech(data, setIsDetailsModalVisible)
          )}
        >
          <input
            {...register("id")}
            value={editableTech.id}
            style={{ display: "none" }}
          />
          <div className="inputWrapper">
            <Label htmlFor="title">Nome da tecnologia</Label>
            <input
              id="title"
              placeholder="Digite o nome da tecnologia"
              {...register("title")}
              value={editableTech.title}
            />
            <HeadlineRed><>{errors.title?.message}</></HeadlineRed>
          </div>

          <div className="inputWrapper">
            <Label htmlFor="status">Selecionar status</Label>
            <select {...register("status")} id="status">
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <HeadlineRed><>{errors.status?.message}</></HeadlineRed>
          </div>

          <div className="twoButtonsWrapper">
            <ThemeButton type="submit" size="big" color="primary">
              Salvar
            </ThemeButton>

            <ThemeButton
              type="button"
              size="big"
              color="grey"
              onClick={() => {
                deleteTech(editableTech.id, setIsDetailsModalVisible);
                setIsDetailsModalVisible(false);
              }}
            >
              Excluir
            </ThemeButton>
          </div>
        </form>
      </ModalFormContainer>
    </ModalWrapper>
  );
};

export default DetailsModal;

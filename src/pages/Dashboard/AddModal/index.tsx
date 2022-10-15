import { useForm } from "react-hook-form";
import Label from "../../../components/Label";
import ModalFormContainer from "../../../components/ModalFormContainer";
import ModalFormHeader from "../../../components/ModalFormHeader";
import ModalWrapper from "../../../components/ModalWrapper";
import { ThemeButton } from "../../../style/buttons";
import { HeadlineRed, Title2 } from "../../../style/typography";
import { yupResolver } from "@hookform/resolvers/yup";
import { addTechFormSchema } from "../../../validators/addTechFormSchema";
import { SyntheticEvent, useContext, useRef } from "react";
import { TechContext } from "../../../Providers/TechProvider";

interface IAddModalProps {
  setIsAddModalVisible: (value: boolean) => void;
}

const AddModal = ({ setIsAddModalVisible }: IAddModalProps) => {
  const { addTech } = useContext(TechContext);
  const ref = useRef<HTMLDivElement | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(addTechFormSchema),
  });

  const handleClick = (e: SyntheticEvent) => {
    (e.target as Element).className === ref?.current?.className && setIsAddModalVisible(false);
  }

  return (
    <ModalWrapper ref={ref} onClick={handleClick}>
      <ModalFormHeader>
        <Title2>Cadastrar tecnologia</Title2>
        <button onClick={() => setIsAddModalVisible(false)}>X</button>
      </ModalFormHeader>

      <ModalFormContainer>
        <form
          onSubmit={handleSubmit((data) => addTech(data, setIsAddModalVisible))}
        >
          <div className="inputWrapper">
            <Label htmlFor="title">Nome da tecnologia</Label>
            <input
              id="title"
              placeholder="Digite o nome da tecnologia"
              {...register("title")}
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

          <ThemeButton type="submit" size="big" color="primary">
            Cadastrar tecnologia
          </ThemeButton>
        </form>
      </ModalFormContainer>
    </ModalWrapper>
  );
};

export default AddModal;

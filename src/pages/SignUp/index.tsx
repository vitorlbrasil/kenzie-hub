import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../Providers/UserProvider";

import FormContainer from "../../components/FormContainer";
import Label from "../../components/Label";
import logo from "../../assets/Logo.svg";
import { Headline, HeadlineRed, Title1 } from "../../style/typography";
import { ThemeButton } from "../../style/buttons";
import { StyledDiv, motionDivStyle } from "./style";

import { yupResolver } from "@hookform/resolvers/yup";
import { signUpFormSchema } from "../../validators/signUpForm";
import { motion } from "framer-motion";

const SignUp = () => {
  const { signUp } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpFormSchema),
  });

  return (
    <motion.div
      style={motionDivStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <StyledDiv>
        <div className="logoWrapper">
          <img src={logo} alt="Logo do Kenzie Hub" />
          <ThemeButton
            size="small"
            color="dark-grey"
            onClick={() => navigate("/", { replace: true })}
          >
            Voltar
          </ThemeButton>
        </div>

        <FormContainer>
          <Title1>Crie sua conta</Title1>
          <Headline>Rapido e grátis. Vamos nessa!</Headline>

          <form onSubmit={handleSubmit(signUp)}>
            <div className="inputWrapper">
              <Label htmlFor="name">Nome</Label>
              <input
                id="name"
                placeholder="Digite seu nome"
                {...register("name")}
              />
              <HeadlineRed><>{errors.name?.message}</></HeadlineRed>
            </div>

            <div className="inputWrapper">
              <Label htmlFor="email">E-mail</Label>
              <input
                id="email"
                placeholder="Digite seu e-mail"
                {...register("email")}
              />
              <HeadlineRed><>{errors.email?.message}</></HeadlineRed>
            </div>

            <div className="inputWrapper">
              <Label htmlFor="password">Senha</Label>
              <input
                type="password"
                id="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <HeadlineRed><>{errors.password?.message}</></HeadlineRed>
            </div>

            <div className="inputWrapper">
              <Label htmlFor="passwordConfirmation">Confirme a senha</Label>
              <input
                type="password"
                id="passwordConfirmation"
                placeholder="Digite novamente sua senha"
                {...register("passwordConfirmation")}
              />
              <HeadlineRed><>{errors.passwordConfirmation?.message}</></HeadlineRed>
            </div>

            <div className="inputWrapper">
              <Label htmlFor="bio">Bio</Label>
              <input
                id="bio"
                placeholder="Fale sobre você"
                {...register("bio")}
              />
              <HeadlineRed><>{errors.bio?.message}</></HeadlineRed>
            </div>

            <div className="inputWrapper">
              <Label htmlFor="contact">Contato</Label>
              <input
                id="contact"
                placeholder="Opção de contato"
                {...register("contact")}
              />
              <HeadlineRed><>{errors.contact?.message}</></HeadlineRed>
            </div>

            <div className="inputWrapper">
              <Label htmlFor="course_module">Selecionar módulo</Label>
              <select {...register("course_module")} id="course_module">
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro módulo (Introdução ao Frontend)
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo módulo (Frontend Avançado)
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro módulo (Introdução ao Backend)
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto módulo (Backend Avançado)
                </option>
              </select>
              <HeadlineRed><>{errors.course_module?.message}</></HeadlineRed>
            </div>

            <ThemeButton type="submit" size="big" color="primary">
              Cadastrar
            </ThemeButton>
          </form>
        </FormContainer>
      </StyledDiv>
    </motion.div>
  );
};

export default SignUp;

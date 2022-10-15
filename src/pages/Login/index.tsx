import FormContainer from "../../components/FormContainer";
import Label from "../../components/Label";
import { ThemeButton } from "../../style/buttons";
import { HeadlineBold, HeadlineRed, Title1 } from "../../style/typography";
import { StyledDiv, motionDivStyle } from "./style";
import logo from "../../assets/Logo.svg";

import { UserContext } from "../../Providers/UserProvider";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormSchema } from "../../validators/loginFormSchema";
import { motion } from "framer-motion";

const Login = () => {
  const { signIn } = useContext(UserContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
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
        <img src={logo} alt="Logo do Kenzie Hub" />

        <FormContainer>
          <Title1>Login</Title1>

          <form onSubmit={handleSubmit(signIn)}>
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
                id="password"
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
              <HeadlineRed><>{errors.password?.message}</></HeadlineRed>
            </div>

            <ThemeButton type="submit" size="big" color="primary">
              Entrar
            </ThemeButton>
          </form>

          <div className="buttonWrapper">
            <HeadlineBold>Ainda não possui uma conta?</HeadlineBold>
            <ThemeButton
              size="big"
              color="grey"
              onClick={() => navigate("/signup")}
            >
              Cadastre-se
            </ThemeButton>
          </div>
        </FormContainer>
      </StyledDiv>
    </motion.div>
  );
};

export default Login;

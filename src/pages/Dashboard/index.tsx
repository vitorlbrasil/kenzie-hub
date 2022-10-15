import React, { useContext, useState } from "react";
import logo from "../../assets/Logo.svg";
import { ThemeButton } from "../../style/buttons";
import { Headline, HeadlineBold, Title1, Title2 } from "../../style/typography";
import { LoadingDiv, StyledDiv } from "./style";
import { VscAdd } from "react-icons/vsc";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../../Providers/UserProvider";
import AddModal from "./AddModal";
import { AnimatePresence, motion } from "framer-motion";
import DetailsModal from "./DetailsModal";
import { ITech } from "../../Providers/UserProvider/interfaces";

const Dashboard = () => {
  const [isAddModalVisible, setIsAddModalVisible] = useState<boolean>(false);
  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState<boolean>(false);
  const [editableTech, setEditableTech] = useState<ITech>({} as ITech);
  const { user, loading } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();

    navigate("/", { replace: true });
  };

  if (loading) {
    return <LoadingDiv>carregando</LoadingDiv>;
  }

  return (
    <motion.div
      style={{ width: "100%", height: "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {user ? (
        <>
          <AnimatePresence>
            {isDetailsModalVisible && (
              <DetailsModal
                setIsDetailsModalVisible={setIsDetailsModalVisible}
                editableTech={editableTech}
              />
            )}
            {isAddModalVisible && (
              <AddModal setIsAddModalVisible={setIsAddModalVisible} />
            )}
          </AnimatePresence>

          <StyledDiv>
            <div className="navbar">
              <div className="container">
                <img src={logo} alt="Logo Kenzie Hub" />
                <ThemeButton
                  size="small"
                  color="dark-grey"
                  onClick={handleLogout}
                >
                  Sair
                </ThemeButton>
              </div>
            </div>

            <div className="userHeader">
              <div className="container">
                <div className="userHeader__mainDiv">
                  <Title1>Olá, {user.name}!</Title1>
                  <HeadlineBold>{user.course_module}</HeadlineBold>
                </div>
              </div>
            </div>

            <main>
              <div className="container">
                <div className="main__mainDiv">
                  <div className="addButtonWrapper">
                    <Title1>Tecnologias</Title1>
                    <ThemeButton
                      size="smaller"
                      color="dark-grey"
                      onClick={() => setIsAddModalVisible(true)}
                    >
                      <VscAdd />
                    </ThemeButton>
                  </div>

                  <ul>
                    <AnimatePresence>
                      {user.techs.length ? (
                        user.techs.map((tech) => (
                          <motion.li
                            key={tech.id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            onClick={() => {
                              setIsDetailsModalVisible(true);
                              setEditableTech(tech);
                            }}
                          >
                            <Title2>{tech.title}</Title2>
                            <Headline>{tech.status}</Headline>
                          </motion.li>
                        ))
                      ) : (
                        <Title2>Nenhuma tecnologia cadastrada</Title2>
                      )}
                    </AnimatePresence>
                  </ul>
                </div>
              </div>
            </main>
          </StyledDiv>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
    </motion.div>
  );
};

export default Dashboard;

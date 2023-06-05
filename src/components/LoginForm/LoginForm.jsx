import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./login.scss";
import Pizza from "../../assets/icon/pizza.svg";
import { GetAdmin } from "../../Services/GetAdmind";
import { searchParamsContext } from "../../Routes/AppRoutes";

const LoginForm = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn, username, setUsername } =
    useContext(searchParamsContext);

  const handleSubmit = async (values) => {
    const { userName, paswoord } = values;
    try {
      const data = await GetAdmin(userName, paswoord);
      if (data.length > 0) {
        setIsLoggedIn(true);
        setUsername(username);
        navigate(`/Home/${userName}`);
        console.log("Ingreso exitoso");
      } else {
        console.log("Credenciales inválidas");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const initialValues = {
    userName: "",
    paswoord: "",
  };

  const validationSchema = Yup.object({
    userName: Yup.string().required("Campo obligatorio"),
    paswoord: Yup.string().required("Campo obligatorio"),
  });

  return (
    <div className="login">
      <div className="login__logo">
        <img src={Pizza} alt="PiSassScript" />
        <h1>PiSassScript</h1>
      </div>
      <h1 className="login__title">Inicia sesión en tu cuenta</h1>
      <p>
        Disfruta de la mejor Pizza creada para las personas amantes del codigo.
      </p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="login__form">
            <label htmlFor="userName">Nombre de usuario</label>
            <Field type="text" id="userName" name="userName" />
            <ErrorMessage
              name="userName"
              component="div"
              className="login__error-message"
            />
          </div>

          <div className="login__form">
            <label htmlFor="paswoord">Contraseña</label>
            <Field type="password" id="paswoord" name="paswoord" />
            <ErrorMessage
              name="paswoord"
              component="div"
              className="login__error-message"
            />
          </div>

          <button type="submit">Iniciar sesión</button>
        </Form>
      </Formik>

      <div className="login__reset-password">
        <button>Restablecer contarseña</button>
      </div>
    </div>
  );
};

export default LoginForm;

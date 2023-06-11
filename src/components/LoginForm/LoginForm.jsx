import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.scss";
import Pizza from "../../assets/icon/pizza.svg";
import { GetAdmin } from "../../Services/GetAdmind";
import { searchParamsContext } from "../../Routes/AppRoutes";

const LoginForm = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUsername, setUser } =
    useContext(searchParamsContext);

  const handleSubmit = async (values) => {
    const { userName, paswoord } = values;
    try {
      const data = await GetAdmin(userName, paswoord);
      if (data.length > 0) {
        setIsLoggedIn(true);
        setUsername(userName);
        setUser(data[0]);
        sessionStorage.setItem("user", JSON.stringify(data[0]));
        console.log("Ingreso exitoso");
        navigate(`/Home/${userName}`);
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
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <div className="form__logo">
            <img src={Pizza} alt="PiSassScript" />
            <h1>PiSassScript</h1>
          </div>
          <h1 className="form__title">Inicia sesión en tu cuenta</h1>
          <p className="form__paragraph">
            Disfruta de la mejor Pizza creada para las personas amantes del
            codigo.
          </p>

          <div className="form__container">
            <div className="form__group">
              <Field
                id="userName"
                name="userName"
                className="form__input"
                placeholder=" "
              />
              <ErrorMessage
                name="userName"
                component="div"
                className="form__error-message"
              />
              <label htmlFor="userName" className="form__label">
                Usuario
              </label>
              <div className="form__line"></div>
            </div>

            <div className="form__group">
              <Field
                className="form__input"
                placeholder=" "
                type="password"
                id="paswoord"
                name="paswoord"
              />
              <ErrorMessage
                name="paswoord"
                component="div"
                className="form__error-message"
              />
              <label htmlFor="email" className="form__label">
                Contraseña
              </label>
              <div className="form__line"></div>
            </div>

            <button type="submit" className="form__submit">
              Iniciar sesión
            </button>
            <div className="form__reset-password">
              <button>Restablecer contarseña</button>
              <p>¿No tienes una cuenta?</p>
            </div>
            <p className="form__link">Registrate aquí</p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

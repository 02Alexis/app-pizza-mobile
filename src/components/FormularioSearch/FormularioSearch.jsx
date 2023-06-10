import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  FormControl,
  /*   FormErrorMessage, */
  Input,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import "./FormularioSearch.scss";

const validationSchema = Yup.object().shape({
  pizzaName: Yup.string()
    .min(3, "El nombre de la pizza debe tener al menos 5 caracteres")
    .max(20, "El nombre de la pizza no debe tener más de 20 caracteres")
    .required("El nombre de la pizza es obligatorio"),
});

export const FormularioSearch = ({ pizzaName, handlePizza }) => {
  const initialValues = {
    pizzaName: "" || pizzaName,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handlePizza(values);
    },
    enableReinitialize: true,
  });

  const isError = pizzaName === "";

  return (
    <form onSubmit={formik.handleSubmit} className="form">
      <FormControl isInvalid={isError} className="containerInput">
        <Input
          type="text"
          placeholder="Pizza de peperoni, mexicana, ha..."
          {...formik.getFieldProps("pizzaName")}
          className="containerInput__searchPizza"
        />
        {/*         <FormErrorMessage>
          {formik.touched.pizzaName && formik.errors.pizzaName && (
            <div>{formik.errors.pizzaName}</div>
          )}
        </FormErrorMessage> */}
      </FormControl>
      <IconButton
        type="submit"
        disabled={formik.isSubmitting}
        colorScheme="blue"
        aria-label="Search database"
        className="form__searchButton"
        icon={<SearchIcon className="iconSearch" />}
      />
    </form>
  );
};

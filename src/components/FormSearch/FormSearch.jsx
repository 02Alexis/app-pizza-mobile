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
import "./FormSearch.scss";

const validationSchema = Yup.object().shape({
  pizzaName: Yup.string()
    .max(20, "El nombre de la pizza no debe tener más de 20 caracteres")
    .required("El nombre de la pizza es obligatorio"),
});

export const FormularioSearch = ({ pizzaName, handlePizza }) => {
  const initialValues = {
    pizzaName: pizzaName ? pizzaName : "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handlePizza(values);
    },
    enableReinitialize: true,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="formSearch">
      <FormControl className="containerInput">
        <Input
          type="text"
          placeholder="Pizza de peperoni, mexicana, ha..."
          {...formik.getFieldProps("pizzaName")}
          className="containerInput__searchPizza"
        />
      </FormControl>
      <IconButton
        type="submit"
        disabled={formik.isSubmitting}
        colorScheme="blue"
        aria-label="Search database"
        className="formSearch__searchButton"
        icon={<SearchIcon className="iconSearch" />}
      />
    </form>
  );
};

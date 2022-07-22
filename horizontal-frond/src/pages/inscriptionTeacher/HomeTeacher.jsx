import React from "react";
import { useFormik } from "formik";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const HomeTeacher = () => {
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      firstLastName: "",
      secondLastName: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });

  return (
 
      <section
        style={{
          maxWidth: "1000px",
          width: "95%",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Inscripcion del maestro
        </h1>
        <div
          style={{
            maxWidth: "700px",
          }}
        >
          <form noValidate onSubmit={formik.handleSubmit}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <TextField
                id="id"
                label="ID"
                helperText={formik.errors.userName}
                variant="outlined"
                {...formik.getFieldProps("id")}
                style={{
                  marginRight: "20px",
                }}
              />
              <TextField
                id="name"
                label="Nombre"
                helperText={formik.errors.userName}
                variant="outlined"
                {...formik.getFieldProps("name")}
                style={{
                  marginRight: "20px",
                }}
              />

              <TextField
                id="firstLastName"
                label="Apellido Paterno"
                helperText={formik.errors.password}
                variant="outlined"
                {...formik.getFieldProps("firstLastName")}
                style={{
                  marginRight: "20px",
                }}
              />
              <TextField
                id="secondLastName"
                label="Apellido Paterno"
                helperText={formik.errors.password}
                variant="outlined"
                {...formik.getFieldProps("secondLastName")}
                style={{}}
              />
            </div>

            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button type="submit" variant="contained">
                Guardar
              </Button>
            </div>
          </form>
        </div>
      </section>
  );
};

export default HomeTeacher;

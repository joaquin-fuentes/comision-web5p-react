import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function FormCrearAlumno() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nombre: "",
      urlImagen: "",
      pasatiempo: "",
      marca: "",
      pelicula: "",
    },
  });

  function onSubmit(data) {
    console.log(data);
    // Traer el listado de alumnos

    // Agregar el alumno a lista de la db

    // guardar la lista actualizada en la db

    // Aviso al usuario que salio bien o mal

    // Limpio el formulario
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre Alumno</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el nombre del alumno"
          isInvalid={errors.nombre}
          {...register("nombre", {
            required: "El campo es obligatorio",
            minLength: {
              value: 3,
              message: "Debe ingresar al menos 3 caracteres",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.nombre?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Imagen de perfil (URL)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la url de la imagen de perfil"
          isInvalid={errors.urlImagen}
          {...register("urlImagen", {
            required: "El campo es obligatorio",
            minLength: {
              value: 3,
              message: "Debe ingresar al menos 3 caracteres",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.urlImagen?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Marca favorita</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la marca favorita del alumno"
          isInvalid={errors.marca}
          {...register("marca", {
            required: "El campo es obligatorio",
            minLength: {
              value: 3,
              message: "Debe ingresar al menos 3 caracteres",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.marca?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pasatiempo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese el pasatiempo del alumno"
          isInvalid={errors.pasatiempo}
          {...register("pasatiempo", {
            required: "El campo es obligatorio",
            minLength: {
              value: 3,
              message: "Debe ingresar al menos 3 caracteres",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.pasatiempo?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Película</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la pelicula favorit del alumno"
          isInvalid={errors.pelicula}
          {...register("pelicula", {
            required: "El campo es obligatorio",
            minLength: {
              value: 3,
              message: "Debe ingresar al menos 3 caracteres",
            },
          })}
        />
        <Form.Control.Feedback type="invalid">
          {errors.pelicula?.message}
        </Form.Control.Feedback>
      </Form.Group>
      <Button variant="primary" type="submit">
        Crear Alumno
      </Button>
    </Form>
  );
}

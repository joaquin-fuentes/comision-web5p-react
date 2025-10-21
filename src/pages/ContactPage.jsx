import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [status, setStatus] = useState(null);

  const onSubmit = (data) => {
    // data es { user_name: "...", user_email: "...", message: "..." }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, //SERVICE_id
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // TEMPLATE_ID
        {
          user_name: data.user_name,
          user_email: data.user_email,
          message: data.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // PUBLIC_KEY
      )
      .then(() => {
        setStatus({ ok: true, msg: "Mensaje enviado ✅" });
        alert("email enviado con éxito");
        reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Error al enviar el email");
        setStatus({ ok: false, msg: "Hubo un error al enviar el email ❌" });
      });
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">FORMULARIO DE CONTACTO</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            {...register("user_name", { required: "Campo obligatorio" })}
            isInvalid={!!errors.user_name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.user_name?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            {...register("user_email", { required: "Campo obligatorio" })}
            isInvalid={!!errors.user_email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.user_email?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            {...register("message", { required: "Campo obligatorio" })}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">
            {errors.message?.message}
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit">Enviar</Button>

        {status && (
          <Alert className="mt-3" variant={status.ok ? "success" : "danger"}>
            {status.msg}
          </Alert>
        )}
      </Form>
    </div>
  );
}

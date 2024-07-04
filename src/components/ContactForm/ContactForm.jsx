import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from './ContactForm.module.css'


export default function ContactForm({ addContact }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(50, "Must be 50 characters or less")
          .required("Required"),
        number: Yup.string()
          .min(3, "Must be at least 3 characters")
          .max(50, "Must be 50 characters or less")
          .required("Required"),
      })}
      onSubmit={(values, { resetForm }) => {
        addContact(values.name, values.number);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formLabel}>
            <label htmlFor="name">Name</label>
            <Field
              type="text"
              name="name"
              id="name"
              autoComplete="name" />
            <ErrorMessage name="name" component="div" />
          </div>
          <div className={css.formLabel}>
            <label htmlFor="number">Number</label>
            <Field
              type="text"
              name="number"
              id="number"
              autoComplete="tel" />
            <ErrorMessage name="number" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting} className={css.formButton}>
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
import { Formik, Form, Field } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9+\-() ]+$/, "Only digits and symbols + - ( ) are allowed")
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    id: "",
    name: "",
    number: "",
  };
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    const newContact = {
      ...values,
    };
    dispatch(addContact(newContact));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ContactFormSchema}
      >
        <div>
          <div className="card-body">
            <Form>
              <label htmlFor={nameFieldId}>
                Name
                <Field type="text" name="name" id={nameFieldId} />
              </label>
              <ErrorMessage name="name" component="span" />

              <label htmlFor={numberFieldId}>
                Number
                <Field type="text" name="number" id={numberFieldId} />
              </label>
              <ErrorMessage
                className="text-red-700"
                name="number"
                component="span"
              />
              <button type="submit">Add Contact</button>
            </Form>
          </div>
        </div>
      </Formik>
    </>
  );
};

export default ContactForm;

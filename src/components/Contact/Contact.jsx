import { useDispatch, useSelector } from "react-redux";
import { deleteContact, editContact } from "../../redux/contacts/operations";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { isEditContact } from "../../redux/contacts/slice";
import { useId } from "react";
import { selectIsEdit } from "../../redux/contacts/selectors";

const Contact = ({ name, number, id }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const ContactFormAudit = Yup.object().shape({
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
  const initialValues = {
    id: id,
    name: name,
    number: number,
  };

  const isEdit = useSelector(selectIsEdit);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };
  const handleEdit = (values) => {
    dispatch(editContact(values));
    dispatch(isEditContact(null));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleEdit}
        validationSchema={ContactFormAudit}
      >
        {({ values }) => (
          <div>
            <Form>
              {isEdit === id && (
                <>
                  <fieldset className="fieldset">
                    <label htmlFor={nameFieldId}>
                      Name
                      <Field type="text" name="name" id={nameFieldId} />
                    </label>
                    <ErrorMessage name="name" component="span" />
                    <label htmlFor={numberFieldId}>
                      Number
                      <Field type="text" name="number" id={numberFieldId} />
                    </label>
                    <ErrorMessage name="number" component="span" />
                  </fieldset>
                  <div>
                    <button type="submit" className="btn btn-accent">
                      Save
                    </button>
                    <button
                      type="button"
                      onClick={() => dispatch(isEditContact(null))}
                      className="btn btn-accent"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              )}

              {isEdit !== id && (
                <div>
                  <h2>{values.name}</h2>
                  <p>{values.number}</p>
                  <div className="justify-end card-actions">
                    <button
                      type="button"
                      onClick={() => dispatch(isEditContact(id))}
                    >
                      Edit
                    </button>
                    <button type="button" onClick={() => handleDelete(id)}>
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default Contact;

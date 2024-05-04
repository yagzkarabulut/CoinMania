const InputFieldView = ({ formik, data }) => {
  const { label, name, type } = data;
  const err = formik.errors;
  const touched = formik.touched;
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        onBlur={formik.handleBlur}
        onChange={formik.handleChange}
        name={name}
        type={type}
        className={`form-control ${
          err[name] && touched[name] ? "is-invalid" : "is-valid"
        }`}
      />
      <div className="feedback">{err[name]} &nbsp;</div>
    </div>
  );
};

export default InputFieldView;

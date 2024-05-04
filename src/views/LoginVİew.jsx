import { inputs } from "../constans";
import InputFieldView from "./InputFieldView";

const LoginVİew = ({ formik }) => {
  return (
    <div className="login-pages">
      <div className="container my-5" style={{ maxWidth: "700px" }}>
        <h2 className="d-flex gap-3 justify-content-center align-items-center">
          <img height={60} src="/c-logo.png" />
          <span>CoinMania</span>
        </h2>

        <form
          onSubmit={formik.handleSubmit}
          action=""
          className="d-flex flex-column gap-3 mt-5"
        >
          {inputs.map((data) => (
            <InputFieldView key={data.id} formik={formik} data={data} />
          ))}

          <button type="submit" className="btn btn-warning">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginVİew;

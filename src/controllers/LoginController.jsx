import { useFormik } from "formik";
import { schmea } from "../schema";
import LoginVİew from "../views/LoginVİew";
import { useNavigate } from "react-router-dom";

const LoginController = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    // formda tutulacak verilerin ilk değeri
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirm: "",
    },

    // validsayon şeması
    // inputlardaki verileri tanımladığımız şemdaki koşullara uygun mu diye kontrol eder . Eğer geçerli değilse error state'inde hataları ekler
    validationSchema: schmea,
    // form gönderilince çalışıcak olan fonksiyon
    // otomatik olarak sayfa yenilemeyi engeller
    // 1.parametre (values) inputlardaki verileri alır
    // 2.parametre (actions) formda çalışısabilecek aksiyonları alır
    onSubmit: (values, actions) => {
      navigate("/home");
    },
  });
  return <LoginVİew formik={formik} />;
};

export default LoginController;

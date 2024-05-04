// yupdaki bütün fonksiyonları import et
import * as yup from "yup";

// validosyan şeması
// formdaki inpuları geçerli olması için gerekli koşullar tanımladğımız alan
// bir alan için koşulları yazarken ilk olarak bu alnın tipini tanımlayan yup fonksiyonu çağırırız

// bir büyük bir küçük harf 1 sayı bir özel karakter min:5 karakter
const regex = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$";
export const schmea = yup.object().shape({
  // emailin geçerli olması içi koşullar
  email: yup
    .string()
    .email("Email geçerli bir formatta olmalı")
    .required("Email zorunlu bir alan"),
  // yaşın geçerli olması için koşullar
  age: yup
    .number()
    .min(18, "Yaş 18'den küçük olamaz")
    .max(100, "Yaş 100'den büyük olamaz")
    .integer("Lütfen tam sayı değeri giriniz")
    .required("Yaş zorunlu bir alan"),
  // şifre geçerli olması için koşullar
  password: yup
    .string("")
    .min(5, "Şifreniz en az 5 karakterli olmalı")
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required("Şifre zorunlu bir alandır"),
  passwordConfirm: yup
    .string()
    //   oneOf kontrol ettiğimix inpuutaki verinin verdiğimiz deperlere eşit olup olmadığını kontrol eder
    // ref farklı bir bi inputtaki veriyi erişmemizi sağlar
    .oneOf([yup.ref("password")], "Onay şifreniz eşleşmiyor")
    .required("Şifrenizi lütfen onaylayın"),
});

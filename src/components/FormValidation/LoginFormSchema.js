import * as Yup from "yup"

const loginFormSchema = Yup.object().shape({
    email: Yup.string()
    // Минимальная длина - 2 символа
        .min(2, "Должно быть длинее 2 символов")
    // Макисмальная длина - 20 символов
        .max(20,"Не может быть такого длинного имени")
        .required("Обязательно"),
    password: Yup.string()
        .min(8, "Должно быть длинее 8 символов")
        .required("Обязательно")
})

export default loginFormSchema
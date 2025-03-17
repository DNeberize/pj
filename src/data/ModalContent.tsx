import ThemeToggleSelect from "../utils/DarkModeToggle";
import { useFormik } from "formik";
import * as yup from "yup";
import SignInLoad from "../components/svgs/SignInLoad";

type ModalProps = {
  ModalHandler?: () => void;
};

export const SettingsModalContent: React.FC<ModalProps> = ({
  ModalHandler,
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-between p-2 rounded">
      <h2 className="text-lg text-[var(--color-text)] font-semibold">
        Settings
      </h2>
      <button
        className="cursor-pointer hover:opacity-80"
        onClick={ModalHandler}
      >
        <img src="/src/assets/X.svg" alt="Close" className="h-4 w-4" />
      </button>
    </div>
    <div className="border-t border-[var(--color-secondary)]" />
    <div className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded">
      <span className="text-[var(--color-text)]">Language</span>
      <select className="border bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-secondary)] rounded p-1 text-sm">
        <option value="english">English</option>
        <option value="spanish">Spanish</option>
      </select>
    </div>
    <div className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded">
      <span className="text-[var(--color-text)]">Timezone</span>
      <select className="border bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-secondary)] rounded p-1 text-sm">
        <option value="utc">UTC</option>
        <option value="est">EST</option>
      </select>
    </div>
    <div className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded">
      <span className="text-[var(--color-text)]">Theme</span>
      <ThemeToggleSelect />
    </div>
    <div className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded">
      <span className="text-[var(--color-text)]">Edit</span>
      <select className="border bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-secondary)] rounded p-1 text-sm">
        <option value="1.50">1.50</option>
        <option value="2.00">2.00</option>
      </select>
    </div>
  </div>
);

export const DottedGridModalContent: React.FC<ModalProps> = ({
  ModalHandler,
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-between p-2 rounded">
      <h2 className="text-lg text-[var(--color-text)] font-semibold">
        Grid Menu
      </h2>
      <button
        className="cursor-pointer hover:opacity-80"
        onClick={ModalHandler}
      >
        <img src="/src/assets/X.svg" alt="Close" className="h-4 w-4" />
      </button>
    </div>
    <div className="border-t border-[var(--color-secondary)]" />
    <div className="grid grid-cols-2 gap-2 p-2">
      <div className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded">
        <span className="text-[var(--color-text)]">Timezone</span>
        <select className="border bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-secondary)] rounded p-1 text-sm">
          <option value="utc">UTC</option>
          <option value="est">EST</option>
        </select>
      </div>
      <div className="flex items-center justify-between p-2 hover:bg-[var(--color-secondary)] rounded">
        <span className="text-[var(--color-text)]">Edit</span>
        <select className="border bg-[var(--color-bg)] text-[var(--color-text)] border-[var(--color-secondary)] rounded p-1 text-sm">
          <option value="1.50">1.50</option>
          <option value="2.00">2.00</option>
        </select>
      </div>
    </div>
  </div>
);

export const SignInModal: React.FC<ModalProps> = ({ ModalHandler }) => {
  const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const basicSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .matches(passwordRules, "Enter a stronger password")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm password is required"),
  });
  const onSubmit = async (values: any, action: any) => {
    console.log(values, action);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    action.resetForm();
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between p-1 rounded">
        <h2 className="text-lg text-[var(--color-text)] font-semibold">
          Sign in
        </h2>
        <button
          className="cursor-pointer hover:opacity-80"
          onClick={ModalHandler}
        >
          <img src="/src/assets/X.svg" alt="Close" className="h-4 w-4" />
        </button>
      </div>
      <div className="border-t border-[var(--color-secondary)]" />
      <form
        className="flex flex-col gap-8 px-10 py-3"
        onSubmit={formik.handleSubmit}
      >
        <input
          className={`${
            formik.errors.name && formik.touched.name ? "input error" : ""
          } p-2 border-1 border-solid border-secondary rounded-[8px] `}
          type="text"
          name="name"
          placeholder="Name..."
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500">{formik.errors.name}</p>
        )}

        <input
          className={`${
            formik.errors.email && formik.touched.email ? "input error" : ""
          } p-2 border-1 border-solid border-secondary rounded-[8px] `}
          type="email"
          name="email"
          placeholder="Email@.com"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500">{formik.errors.email}</p>
        )}

        <input
          className={`${
            formik.errors.password && formik.touched.password
              ? "input error"
              : ""
          } p-2 border-1 border-solid border-secondary rounded-[8px] `}
          type="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <p className="text-red-500">{formik.errors.password}</p>
        )}

        <input
          className={`${
            formik.errors.confirmPassword && formik.touched.confirmPassword
              ? "input error"
              : ""
          } p-2 border-1 border-solid border-secondary rounded-[8px] `}
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <p className="text-red-500">{formik.errors.confirmPassword}</p>
        )}
        <div className="flex w-full  justify-center items-center">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="flex items-center justify-center  transition-all w-full h-12 duration-500 ease-in-out 
    border border-solid border-secondary hover:rounded-xl 
    disabled:w-12 disabled:h-12 disabled:rounded-full 
    hover:bg-[#7e3ffcb9] bg-[#7F3FFC] text-white font-bold rounded-[8px]"
          >
            {formik.isSubmitting ? <SignInLoad /> : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
};

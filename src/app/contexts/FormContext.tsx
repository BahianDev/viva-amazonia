import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface IFormContext {
  formData: any;
  setFormData: Dispatch<SetStateAction<any>>;
  setStep: Dispatch<SetStateAction<any>>;
  formEnvironmental: any;
  setFormEnvironmental: Dispatch<SetStateAction<any>>;
  formLand: any;
  setFormLand: Dispatch<SetStateAction<any>>;
  onHandleBack: () => void;
  onHandleNext: () => void;
  step: number;
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
  screenSize: undefined | number;
  setScreenSize: Dispatch<SetStateAction<undefined | number>>;
}

const FormContext = createContext<IFormContext>({
  formData: {},
  setFormData: () => {},
  setStep: () => {},
  formEnvironmental: {},
  setFormEnvironmental: () => {},
  formLand: {},
  setFormLand: () => {},
  onHandleBack: () => {},
  onHandleNext: () => {},
  step: 0,
  activeMenu: true,
  setActiveMenu: () => {},
  screenSize: undefined,
  setScreenSize: () => {},
});

interface IProps {
  children: ReactNode;
}

export function FormProvider({ children }: IProps) {
  const [formData, setFormData] = useState();
  const [formEnvironmental, setFormEnvironmental] = useState();
  const [formLand, setFormLand] = useState();

  const [step, setStep] = useState(1);
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState<undefined | number>(undefined);

  function onHandleNext() {
    setStep((prev) => prev + 1);
  }

  function onHandleBack() {
    setStep((prev) => prev - 1);
  }

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        onHandleBack,
        onHandleNext,
        step,
        activeMenu,
        setActiveMenu,
        setScreenSize,
        screenSize,
        formEnvironmental,
        setFormEnvironmental,
        formLand,
        setFormLand,
        setStep
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}

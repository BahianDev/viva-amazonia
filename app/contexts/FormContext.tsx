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
  onHandleBack: () => {},
  onHandleNext: () => {},
  setFormData: () => {},
  step: 0,
  activeMenu: true,
  setActiveMenu: () => {},
  screenSize: undefined,
  setScreenSize: () => {}
});

interface IProps {
  children: ReactNode;
}

export function FormProvider({ children }: IProps) {
  const [formData, setFormData] = useState();
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
        screenSize
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  return useContext(FormContext);
}
